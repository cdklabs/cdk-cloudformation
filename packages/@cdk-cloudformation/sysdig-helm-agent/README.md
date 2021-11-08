# @cdk-cloudformation/sysdig-helm-agent

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `Sysdig::Helm::Agent` v1.8.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Sysdig Agent EKS cluster deployment.

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

## References

* [Source](https://github.com/sysdiglabs/cloudformation-resource-providers.git)

## License

Distributed under the Apache-2.0 License.
