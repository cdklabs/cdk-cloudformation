# awscommunity-s3-bucket-module

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `AwsCommunity::S3::Bucket::MODULE` v1.16.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type AwsCommunity::S3::Bucket::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AwsCommunity::S3::Bucket::MODULE \
  --publisher-id c830e97710da0c9954d80ba8df021e5439e7134b \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/c830e97710da0c9954d80ba8df021e5439e7134b/AwsCommunity-S3-Bucket-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `AwsCommunity::S3::Bucket::MODULE`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fawscommunity-s3-bucket-module+v1.16.0).
* Issues related to `AwsCommunity::S3::Bucket::MODULE` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
