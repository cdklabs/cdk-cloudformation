# sysdig-helm-agent

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Sysdig::Helm::Agent` v1.8.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Sysdig Agent EKS cluster deployment.

## References

* [Source](https://github.com/sysdiglabs/cloudformation-resource-providers.git)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Sysdig::Helm::Agent \
  --publisher-id a108ed126706e786484be9f9ab13bf537951db1d \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/a108ed126706e786484be9f9ab13bf537951db1d/Sysdig-Helm-Agent \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Sysdig::Helm::Agent`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fsysdig-helm-agent+v1.8.0).
* Issues related to `Sysdig::Helm::Agent` should be reported to the [publisher](https://github.com/sysdiglabs/cloudformation-resource-providers.git).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
