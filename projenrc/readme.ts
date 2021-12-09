import { URL } from 'url';
import { CloudFormation } from 'aws-sdk';
import { Component, Project, TextFile } from 'projen';

export interface ReadmeOptions {
  readonly npmName: string;
  readonly typeName: string;
  readonly kebabName: string;
  readonly type: CloudFormation.DescribeTypeOutput;
  /**
   *
   * @default - false
   */
  readonly deprecated?: boolean;

  /**
   *
   * @default - undefined
   */
  readonly deprecateMessage?: string;
}

export class Readme extends Component {
  constructor(project: Project, options: ReadmeOptions) {
    super(project);
    const typeName = options.typeName;;

    const description = options.type.Description ?? `Constructs for ${typeName}`;

    const readme = new Array<string>();

    readme.push(`# ${options.kebabName}`);
    readme.push('');

    const version = options.type.LatestPublicVersion ? ` v${options.type.LatestPublicVersion}` : '';

    readme.push(`> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type \`${typeName}\`${version}.`);
    readme.push('');
    readme.push('[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html');
    readme.push('[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html');
    readme.push('');

    if (options.deprecated) {
      readme.push('---');
      readme.push('');
      readme.push('![Deprecated](https://img.shields.io/badge/deprecated-critical.svg?style=for-the-badge)');
      readme.push('');
      readme.push(`> ${options.deprecateMessage}`);
      readme.push('');
      readme.push('---');
    }

    if (options.type.Description) {
      readme.push('## Description');
      readme.push('');
      readme.push(description);
    }

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


    readme.push('');
    readme.push('## Feedback');
    readme.push('');
    readme.push(`This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for \`${typeName}\`.`);
    readme.push('');

    const newIssueUrl = new URL('https://github.com/cdklabs/cdk-cloudformation/issues/new');
    newIssueUrl.searchParams.append('title', `Issue with ${options.npmName}${version}`);

    readme.push(`* Issues related to this generated library should be [reported here](${newIssueUrl.toString()}).`);

    const publisherUrl = options.type.DocumentationUrl ?? options.type.SourceUrl;
    readme.push(`* Issues related to \`${typeName}\` should be reported to the [publisher](${publisherUrl}).`);
    readme.push('');
    readme.push('[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation');

    readme.push('');
    readme.push('## License');
    readme.push('');
    readme.push('Distributed under the Apache-2.0 License.');
    readme.push('');

    new TextFile(project, 'README.md', { lines: readme });
  }
}
