# symphonia-opensource-cloudformationartifactsbucket-module

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Schema for Module Fragment of type Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE \
  --publisher-id bf9c3875bb157d57566fdd0661e23ca05eb62a19 \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/bf9c3875bb157d57566fdd0661e23ca05eb62a19/Symphonia-OpenSource-CloudFormationArtifactsBucket-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fsymphonia-opensource-cloudformationartifactsbucket-module+v1.0.0).
* Issues related to `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
