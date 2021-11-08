# @cdk-cloudformation/awsqs-iridium-cloudconnectqs-module

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `AWSQS::Iridium::CloudConnectQS::MODULE` v1.1.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type AWSQS::Iridium::CloudConnectQS::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AWSQS::Iridium::CloudConnectQS::MODULE \
  --publisher-id 408988dff9e863704bcc72e7e13f8d645cee8311 \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/408988dff9e863704bcc72e7e13f8d645cee8311/AWSQS-Iridium-CloudConnectQS-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
