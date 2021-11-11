# fireeye-cloudintegrations-cloudwatch

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `FireEye::CloudIntegrations::Cloudwatch` v1.1.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

This Resource Type will create necessary resources in your AWS account to forward cloudwatch logs to FireEye Helix. Visit FireEye Cloud Integration Portal for more info and to generate a pre-populated CloudFormation Template

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name FireEye::CloudIntegrations::Cloudwatch \
  --publisher-id 264c59dceccf8b8a42e60198f3ba62cb0aa9f0bf \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/264c59dceccf8b8a42e60198f3ba62cb0aa9f0bf/FireEye-CloudIntegrations-Cloudwatch \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `FireEye::CloudIntegrations::Cloudwatch`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Ffireeye-cloudintegrations-cloudwatch+v1.1.0).
* Issues related to `FireEye::CloudIntegrations::Cloudwatch` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
