# mongodb-atlas-projectipaccesslist

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::ProjectIpAccessList` v1.1.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

---

![Deprecated](https://img.shields.io/badge/deprecated-critical.svg?style=for-the-badge)

> This package is deprecated. Please use the respective `@mongodbatlas-awscdk/*` scoped package instead

---
## Description

An example resource schema demonstrating some basic constructs and validation rules.

## References

* [Source](https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::ProjectIpAccessList \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-ProjectIpAccessList \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::ProjectIpAccessList`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-projectipaccesslist+v1.1.0).
* Issues related to `MongoDB::Atlas::ProjectIpAccessList` should be reported to the [publisher](https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
