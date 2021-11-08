# @cdk-cloudformation/awsqs-kubernetes-get

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `AWSQS::Kubernetes::Get` v1.13.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Fetches data from a kubernetes cluster using jsonpath expressions.

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AWSQS::Kubernetes::Get \
  --publisher-id 408988dff9e863704bcc72e7e13f8d645cee8311 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/408988dff9e863704bcc72e7e13f8d645cee8311/AWSQS-Kubernetes-Get \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## References

* [Documentation](https://github.com/aws-quickstart/quickstart-kubernetes-resource-provider/blob/main/README.md)
* [Source](https://github.com/aws-quickstart/quickstart-amazon-eks.git)

## License

Distributed under the Apache-2.0 License.
