# generic-secretsprotection-hook

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Generic::SecretsProtection::Hook` v1.1.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Protects all resources against the use of credentials within properties

## References

* [Documentation](https://github.com/iann0036/cfn-hooks/blob/main/Generic-SecretsProtection-Hook/README.md)
* [Source](https://github.com/iann0036/cfn-hooks)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Generic::SecretsProtection::Hook \
  --publisher-id e1238fdd31aee1839e14fb3fb2dac9db154dae29 \
  --type HOOK \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/hook/e1238fdd31aee1839e14fb3fb2dac9db154dae29/Generic-SecretsProtection-Hook \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Generic::SecretsProtection::Hook`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fgeneric-secretsprotection-hook+v1.1.0).
* Issues related to `Generic::SecretsProtection::Hook` should be reported to the [publisher](https://github.com/iann0036/cfn-hooks/blob/main/Generic-SecretsProtection-Hook/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
