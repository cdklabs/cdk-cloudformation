# generic-transcribe-vocabulary

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Generic::Transcribe::Vocabulary` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

A custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.

## References

* [Source](https://github.com/iann0036/cfn-types/tree/master/generic-transcribe-vocabulary)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Generic::Transcribe::Vocabulary \
  --publisher-id e1238fdd31aee1839e14fb3fb2dac9db154dae29 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/e1238fdd31aee1839e14fb3fb2dac9db154dae29/Generic-Transcribe-Vocabulary \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Generic::Transcribe::Vocabulary`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fgeneric-transcribe-vocabulary+v1.0.0).
* Issues related to `Generic::Transcribe::Vocabulary` should be reported to the [publisher](https://github.com/iann0036/cfn-types/tree/master/generic-transcribe-vocabulary).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
