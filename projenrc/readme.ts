import { CloudFormation } from 'aws-sdk';
import { Component, Project, TextFile } from 'projen';

export interface ReadmeOptions {
  readonly npmName: string;
  readonly typeName: string;
  readonly type: CloudFormation.DescribeTypeOutput;
}

export class Readme extends Component {
  constructor(project: Project, options: ReadmeOptions) {
    super(project);
    const typeName = options.typeName;;

    const description = options.type.Description ?? `Constructs for ${typeName}`;

    const readme = new Array<string>();

    readme.push(`# ${options.npmName}`);
    readme.push('');

    const version = options.type.LatestPublicVersion ? ` v${options.type.LatestPublicVersion}` : '';

    readme.push(`> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type \`${typeName}\`${version}.`);
    readme.push('');
    readme.push('[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html');
    readme.push('[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html');
    readme.push('');

    if (options.type.Description) {
      readme.push('## Description');
      readme.push('');
      readme.push(description);
    }

    readme.push('');
    readme.push('## Usage');
    readme.push('');
    readme.push('In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:');
    readme.push('');
    readme.push('```sh');
    readme.push('aws cloudformation activate-type \\');
    readme.push(`  --type-name ${typeName} \\`);
    readme.push(`  --publisher-id ${options.type.PublisherId} \\`);
    readme.push(`  --type ${options.type.Type} \\`);
    readme.push('  --execution-role-arn ROLE-ARN');
    readme.push('```');
    readme.push('');
    readme.push('Alternatively:');
    readme.push('');
    readme.push('```sh');
    readme.push('aws cloudformation activate-type \\');
    readme.push(`  --public-type-arn ${options.type.Arn} \\`);
    readme.push('  --execution-role-arn ROLE-ARN');
    readme.push('```');
    readme.push('');

    readme.push('You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).');

    if (options.type.DocumentationUrl || options.type.SourceUrl) {
      readme.push('');
      readme.push('## References');
      readme.push('');
      if (options.type.DocumentationUrl) {
        readme.push(`* [Documentation](${options.type.DocumentationUrl})`);
      }
      if (options.type.SourceUrl) {
        readme.push(`* [Source](${options.type.SourceUrl})`);
      }
    }


    readme.push('');
    readme.push('## License');
    readme.push('');
    readme.push('Distributed under the Apache-2.0 License.');
    readme.push('');

    new TextFile(project, 'README.md', { lines: readme });
  }
}