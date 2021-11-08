# @cdk-cloudformation/aqua-enterprise-kubeenforcer

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `Aqua::Enterprise::KubeEnforcer` v1.1.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

A resource provider for Aqua Enterprise KubeEnforcer.

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Aqua::Enterprise::KubeEnforcer \
  --publisher-id 4f06bc39af5f4b984dd46ad17f10316e6258d9fa \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/4f06bc39af5f4b984dd46ad17f10316e6258d9fa/Aqua-Enterprise-KubeEnforcer \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## References

* [Source](https://github.com/aquasecurity/aqua-helm.git)

## License

Distributed under the Apache-2.0 License.
