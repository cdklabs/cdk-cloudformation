#!/usr/bin/env node
const aws = require('aws-sdk');
const fs = require('fs/promises');
const { join } = require('path');
const caseutil = require('case');
const deprecations = require('../deprecated-types.json');

const outdir = join(__dirname, 'types');

const cfn = new aws.CloudFormation({
  region: 'us-east-1'
});

function isDeprecated(typeName) {
  return typeName in deprecations.deprecatedTypes || Object.keys(deprecations.deprecatedPrefixes).some(p => typeName.startsWith(p))
}

async function main() {
  let nextToken = undefined;
  do {
    const response = await cfn.listTypes({ Visibility: 'PUBLIC', NextToken: nextToken }).promise();
    for (const type of response.TypeSummaries ?? []) {
      // skip 1st party and any deprecated types
      if (type.TypeName.startsWith('AWS::') || isDeprecated(type.TypeName)) {
        continue;
      }

      const filename = await saveTypeInfo(type);
      await sleep(1000); // sleep to avoid throttling
      console.log(filename);
    }

    nextToken = response.NextToken;
  } while (nextToken);
}

async function saveTypeInfo(type) {
  const response = await cfn.describeType({ Arn: type.TypeArn }).promise();
  const filename = `${caseutil.kebab(type.TypeName)}.json`;
  const outfile = join(outdir, filename);
  delete response.ResponseMetadata; // incldes request id and stuff we don't want stored.
  await fs.writeFile(outfile, JSON.stringify(response, null, 2));
  return filename;
}

async function sleep(ms) {
  return new Promise(ok => setTimeout(ok, ms));
}

main().catch(e => {
  console.log(e);
});
