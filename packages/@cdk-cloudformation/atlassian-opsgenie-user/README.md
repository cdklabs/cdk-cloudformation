# atlassian-opsgenie-user

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Atlassian::Opsgenie::User` v1.0.1.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Opsgenie User

## References

* [Source](https://github.com/opsgenie/opsgenie-cloudformation-resources)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Atlassian::Opsgenie::User \
  --publisher-id 4fb8713ab4ce2587ce74e0559d7661bb6e01e72b \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/4fb8713ab4ce2587ce74e0559d7661bb6e01e72b/Atlassian-Opsgenie-User \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Atlassian::Opsgenie::User`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fatlassian-opsgenie-user+v1.0.1).
* Issues related to `Atlassian::Opsgenie::User` should be reported to the [publisher](https://github.com/opsgenie/opsgenie-cloudformation-resources).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
