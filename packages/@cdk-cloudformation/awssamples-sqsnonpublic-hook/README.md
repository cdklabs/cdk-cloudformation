# awssamples-sqsnonpublic-hook

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `AWSSamples::SQSNonPublic::Hook` v1.2.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Example resource SSE (Server Side Encryption) verification hook

## References

* [Documentation](https://github.com/aws-cloudformation/aws-cloudformation-samples/blob/main/hooks/java-hooks/sqs-policy-non-public/README.md)
* [Source](https://github.com/aws-cloudformation/aws-cloudformation-samples/tree/main/hooks/java-hooks/sqs-policy-non-public)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AWSSamples::SQSNonPublic::Hook \
  --publisher-id 096debcd443a84c983955f8f8476c221b2b08d8b \
  --type HOOK \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/hook/096debcd443a84c983955f8f8476c221b2b08d8b/AWSSamples-SQSNonPublic-Hook \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `AWSSamples::SQSNonPublic::Hook`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fawssamples-sqsnonpublic-hook+v1.2.0).
* Issues related to `AWSSamples::SQSNonPublic::Hook` should be reported to the [publisher](https://github.com/aws-cloudformation/aws-cloudformation-samples/blob/main/hooks/java-hooks/sqs-policy-non-public/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
