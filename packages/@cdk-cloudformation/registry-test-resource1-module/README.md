# @cdk-cloudformation/registry-test-resource1-module

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `REGISTRY::TEST::RESOURCE1::MODULE` v1.5.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type REGISTRY::TEST::RESOURCE::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name REGISTRY::TEST::RESOURCE1::MODULE \
  --publisher-id 4686b5f994c8b12636b1af16ce88b8e2d2e75c8c \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/4686b5f994c8b12636b1af16ce88b8e2d2e75c8c/REGISTRY-TEST-RESOURCE1-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
