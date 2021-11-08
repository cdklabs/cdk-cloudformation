# @cdk-cloudformation/splunk-enterprise-quickstart-module

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `Splunk::Enterprise::QuickStart::MODULE` v1.0.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type Splunk::Enterprise::QuickStart::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Splunk::Enterprise::QuickStart::MODULE \
  --publisher-id c90b10f63c592300fda916a73ffef76788069f34 \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/c90b10f63c592300fda916a73ffef76788069f34/Splunk-Enterprise-QuickStart-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
