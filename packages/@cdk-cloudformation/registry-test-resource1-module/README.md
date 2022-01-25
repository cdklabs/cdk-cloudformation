# registry-test-resource1-module

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `REGISTRY::TEST::RESOURCE1::MODULE` v1.5.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

---

![Deprecated](https://img.shields.io/badge/deprecated-critical.svg?style=for-the-badge)

> This package is deprecated

---
## Description

Schema for Module Fragment of type REGISTRY::TEST::RESOURCE::MODULE

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name REGISTRY::TEST::RESOURCE1::MODULE \
  --publisher-id 4686b5f994c8b12636b1af16ce88b8e2d2e75c8c \
  --type MODULE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/module/4686b5f994c8b12636b1af16ce88b8e2d2e75c8c/REGISTRY-TEST-RESOURCE1-MODULE \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `REGISTRY::TEST::RESOURCE1::MODULE`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fregistry-test-resource1-module+v1.5.0).
* Issues related to `REGISTRY::TEST::RESOURCE1::MODULE` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
