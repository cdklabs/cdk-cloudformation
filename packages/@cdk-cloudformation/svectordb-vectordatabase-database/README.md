# svectordb-vectordatabase-database

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `SvectorDB::VectorDatabase::Database` v1.1.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Creates a serverless vector database with SvectorDB, sign up at https://svectordb.com to get started

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name SvectorDB::VectorDatabase::Database \
  --publisher-id a867ba60608173fcd64ddc25dcbee967cb54dbb4 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/a867ba60608173fcd64ddc25dcbee967cb54dbb4/SvectorDB-VectorDatabase-Database \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `SvectorDB::VectorDatabase::Database`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fsvectordb-vectordatabase-database+v1.1.0).
* Issues related to `SvectorDB::VectorDatabase::Database` should be reported to the [publisher](undefined).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
