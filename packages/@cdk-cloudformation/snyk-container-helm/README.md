# @cdk-cloudformation/snyk-container-helm

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `Snyk::Container::Helm` v1.2.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Snyk integrates with Amazon EKS, enabling you to import and test your running workloads and identify vulnerabilities in their associated images and configurations that might make those workloads less secure. Once imported, Snyk continues to monitor those workloads, identifying additional security issues as new images are deployed and the workload configuration changes.

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Snyk::Container::Helm \
  --publisher-id 23b85bc331bd703709e021cd4c874df9f591d746 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/23b85bc331bd703709e021cd4c874df9f591d746/Snyk-Container-Helm \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## References

* [Documentation](https://github.com/snyk/aws-cloudformation-resource-providers/blob/main/snyk-container-helm/README.md)
* [Source](https://github.com/snyk/aws-cloudformation-resource-providers.git)

## License

Distributed under the Apache-2.0 License.
