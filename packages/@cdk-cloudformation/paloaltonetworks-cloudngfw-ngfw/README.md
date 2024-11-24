# paloaltonetworks-cloudngfw-ngfw

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `PaloAltoNetworks::CloudNGFW::NGFW` v2.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

A Firewall resource offers Palo Alto Networks next-generation firewall capabilities with built-in resiliency, scalability, and life-cycle management.

## References

* [Source](https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name PaloAltoNetworks::CloudNGFW::NGFW \
  --publisher-id 4e4cf7d0eb3aa7334767bc17a1dbec7e8279d078 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/4e4cf7d0eb3aa7334767bc17a1dbec7e8279d078/PaloAltoNetworks-CloudNGFW-NGFW \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `PaloAltoNetworks::CloudNGFW::NGFW`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fpaloaltonetworks-cloudngfw-ngfw+v2.0.0).
* Issues related to `PaloAltoNetworks::CloudNGFW::NGFW` should be reported to the [publisher](https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
