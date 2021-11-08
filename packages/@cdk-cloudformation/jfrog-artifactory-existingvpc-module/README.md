# @cdk-cloudformation/jfrog-artifactory-existingvpc-module

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `JFrog::Artifactory::ExistingVpc::MODULE` v1.11.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type JFrog::Artifactory::ExistingVpc::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name JFrog::Artifactory::ExistingVpc::MODULE \
  --publisher-id 06ff50c2e47f57b381f874871d9fac41796c9522 \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/06ff50c2e47f57b381f874871d9fac41796c9522/JFrog-Artifactory-ExistingVpc-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
