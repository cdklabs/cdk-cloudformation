# @cdk-cloudformation/spot-elastigroup-group

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `Spot::Elastigroup::Group` v1.0.3.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

The Spot Elastigroup Resource allows you to create, update, manage, and delete Spot Elastigroups easily with CloudFormation

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Spot::Elastigroup::Group \
  --publisher-id 91d05981c6c0b080f2f1adcb370e1145c39b99e2 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/91d05981c6c0b080f2f1adcb370e1145c39b99e2/Spot-Elastigroup-Group \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
