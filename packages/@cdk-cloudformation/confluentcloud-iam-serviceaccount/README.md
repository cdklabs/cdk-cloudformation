# confluentcloud-iam-serviceaccount

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `ConfluentCloud::IAM::ServiceAccount` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Service Account as defined in Confluent Cloud IAM v2 API.

## References

* [Source](https://github.com/JohnPreston/aws-cfn-confluentcloud-iam-serviceaccount)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name ConfluentCloud::IAM::ServiceAccount \
  --publisher-id 9331cf547939e23b9c7f24086db031317893be87 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/9331cf547939e23b9c7f24086db031317893be87/ConfluentCloud-IAM-ServiceAccount \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `ConfluentCloud::IAM::ServiceAccount`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fconfluentcloud-iam-serviceaccount+v1.0.0).
* Issues related to `ConfluentCloud::IAM::ServiceAccount` should be reported to the [publisher](https://github.com/JohnPreston/aws-cfn-confluentcloud-iam-serviceaccount).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
