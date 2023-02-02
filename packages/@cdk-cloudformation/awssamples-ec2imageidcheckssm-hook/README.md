# awssamples-ec2imageidcheckssm-hook

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `AWSSamples::Ec2ImageIdCheckSsm::Hook` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Validates that EC2 Instances are using the correct AMI ImageID from SSM

## References

* [Documentation](https://github.com/aws-cloudformation/example-sse-hook/blob/master/README.md)
* [Source](https://github.com/aws-cloudformation/example-sse-hook)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AWSSamples::Ec2ImageIdCheckSsm::Hook \
  --publisher-id 096debcd443a84c983955f8f8476c221b2b08d8b \
  --type HOOK \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/hook/096debcd443a84c983955f8f8476c221b2b08d8b/AWSSamples-Ec2ImageIdCheckSsm-Hook \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `AWSSamples::Ec2ImageIdCheckSsm::Hook`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fawssamples-ec2imageidcheckssm-hook+v1.0.0).
* Issues related to `AWSSamples::Ec2ImageIdCheckSsm::Hook` should be reported to the [publisher](https://github.com/aws-cloudformation/example-sse-hook/blob/master/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
