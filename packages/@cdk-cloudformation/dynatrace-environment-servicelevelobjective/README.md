# dynatrace-environment-servicelevelobjective

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Dynatrace::Environment::ServiceLevelObjective` v1.7.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Manage a Service Level Objective in Dynatrace.

## References

* [Documentation](https://github.com/aws-ia/cloudformation-dynatrace-resource-providers)
* [Source](https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Dynatrace::Environment::ServiceLevelObjective \
  --publisher-id c830e97710da0c9954d80ba8df021e5439e7134b \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/c830e97710da0c9954d80ba8df021e5439e7134b/Dynatrace-Environment-ServiceLevelObjective \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Dynatrace::Environment::ServiceLevelObjective`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fdynatrace-environment-servicelevelobjective+v1.7.0).
* Issues related to `Dynatrace::Environment::ServiceLevelObjective` should be reported to the [publisher](https://github.com/aws-ia/cloudformation-dynatrace-resource-providers).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
