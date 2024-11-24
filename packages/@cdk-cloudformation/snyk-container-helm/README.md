# snyk-container-helm

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Snyk::Container::Helm` v1.2.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Snyk integrates with Amazon EKS, enabling you to import and test your running workloads and identify vulnerabilities in their associated images and configurations that might make those workloads less secure. Once imported, Snyk continues to monitor those workloads, identifying additional security issues as new images are deployed and the workload configuration changes.

## References

* [Documentation](https://github.com/snyk/aws-cloudformation-resource-providers/blob/main/snyk-container-helm/README.md)
* [Source](https://github.com/snyk/aws-cloudformation-resource-providers.git)

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

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Snyk::Container::Helm`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fsnyk-container-helm+v1.2.0).
* Issues related to `Snyk::Container::Helm` should be reported to the [publisher](https://github.com/snyk/aws-cloudformation-resource-providers/blob/main/snyk-container-helm/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
