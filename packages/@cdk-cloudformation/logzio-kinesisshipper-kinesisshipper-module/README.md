# logzio-kinesisshipper-kinesisshipper-module

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Logzio::KinesisShipper::KinesisShipper::MODULE` v1.2.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type Logzio::KinesisShipper::KinesisShipper::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Logzio::KinesisShipper::KinesisShipper::MODULE \
  --publisher-id 8a9caf0628707da0ff455be490fd366079c8223e \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/8a9caf0628707da0ff455be490fd366079c8223e/Logzio-KinesisShipper-KinesisShipper-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Logzio::KinesisShipper::KinesisShipper::MODULE`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Flogzio-kinesisshipper-kinesisshipper-module+v1.2.0).
* Issues related to `Logzio::KinesisShipper::KinesisShipper::MODULE` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
