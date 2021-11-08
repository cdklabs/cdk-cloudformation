# @cdk-cloudformation/tf-random-string

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `TF::Random::String` v1.0.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

CloudFormation equivalent of random_string

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name TF::Random::String \
  --publisher-id e1238fdd31aee1839e14fb3fb2dac9db154dae29 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/e1238fdd31aee1839e14fb3fb2dac9db154dae29/TF-Random-String \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## References

* [Documentation](https://github.com/iann0036/cfn-tf-custom-types/blob/docs/resources/random/TF-Random-String/docs/README.md)
* [Source](https://github.com/iann0036/cfn-tf-custom-types.git)

## License

Distributed under the Apache-2.0 License.
