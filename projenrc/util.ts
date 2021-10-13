import { spawnSync } from 'child_process';

interface CloudFormationType {
  TypeArn: string;
  TypeName: string;
}

export function listCloudFormationTypes(): CloudFormationType[] {
  const results = new Array<CloudFormationType>();
  let nextToken = undefined;

  do {
    const args = [
      'cloudformation',
      'list-types',
      '--output', 'json',
      '--visibility', 'PUBLIC',
      '--region', 'us-east-1',
    ];

    if (nextToken) {
      args.push('--next-token', nextToken);
    }

    const response = JSON.parse(spawnSync('aws', args).stdout.toString());

    nextToken = response.NextToken;

    results.push(...response.TypeSummaries);
  } while (nextToken);

  return results;
}
