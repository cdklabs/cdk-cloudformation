# trendmicro-cloudonecontainer-helm

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `TrendMicro::CloudOneContainer::Helm` v1.2.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Deploys Trend Micro Cloud One Container Security into EKS clusters using helm.

## References

* [Documentation](https://github.com/trendmicro/cloudone-container-security-helm/blob/master/README.md)
* [Source](https://github.com/aws-quickstart/quickstart-trend-micro-cloudone-helm-resource-provider.git)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name TrendMicro::CloudOneContainer::Helm \
  --publisher-id 408988dff9e863704bcc72e7e13f8d645cee8311 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/408988dff9e863704bcc72e7e13f8d645cee8311/TrendMicro-CloudOneContainer-Helm \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `TrendMicro::CloudOneContainer::Helm`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Ftrendmicro-cloudonecontainer-helm+v1.2.0).
* Issues related to `TrendMicro::CloudOneContainer::Helm` should be reported to the [publisher](https://github.com/trendmicro/cloudone-container-security-helm/blob/master/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
