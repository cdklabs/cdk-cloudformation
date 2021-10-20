#!/usr/bin/env node
const aws = require('aws-sdk');
const fs = require('fs/promises');
const { join } = require('path');
const caseutil = require('case');

const outdir = join(__dirname, 'types');

const cfn = new aws.CloudFormation({
  region: 'us-east-1'
});

async function main() {
  let nextToken = undefined;
  do {
    const response = await cfn.listTypes({ Visibility: 'PUBLIC', NextToken: nextToken }).promise();
    for (const type of response.TypeSummaries ?? []) {
      // skip 1st party
      if (type.TypeName.startsWith('AWS::')) {
        continue;
      }

      const filename = await saveTypeInfo(type);
      console.log(filename);
    }

    nextToken = response.NextToken;
  } while (nextToken); 
}

async function saveTypeInfo(type) {
  const response = await cfn.describeType({ Arn: type.TypeArn }).promise();
  const filename = `${caseutil.kebab(type.TypeName)}.json`;
  const outfile = join(outdir, filename);
  await fs.writeFile(outfile, JSON.stringify(response, null, 2));
  return filename;
}

main().catch(e => {
  console.log(e);
});

// export function listCloudFormationTypes(): CloudFormationType[] {
//   const results = new Array<CloudFormationType>();
//   let nextToken = undefined;

//   do {
//     const args = [
//       'cloudformation',
//       'list-types',
//       '--output', 'json',
//       '--visibility', 'PUBLIC',
//       '--region', REGION,
//     ];

//     if (nextToken) {
//       args.push('--next-token', nextToken);
//     }

//     const result = spawnSync('aws', args);
//     if (result.status !== 0) {
//       throw new Error(`Failed to list CloudFormation types: ${result.stderr.toString()}`);
//     }

//     const response = JSON.parse(result.stdout.toString());

//     nextToken = response.NextToken;

//     results.push(...response.TypeSummaries);
//   } while (nextToken);

//   return results.filter(type => !shouldExclude(type.TypeArn));
// }
