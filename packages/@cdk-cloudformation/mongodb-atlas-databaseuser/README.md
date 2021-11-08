# @cdk-cloudformation/mongodb-atlas-databaseuser

> An AWS CDK L1 construct for the [AWS CloudFormation Registry] type `MongoDB::Atlas::DatabaseUser` v1.3.0.

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

The databaseUsers resource lets you retrieve, create and modify the MongoDB users in your cluster. Each user has a set of roles that provide access to the project?s databases. A user?s roles apply to all the clusters in the project: if two clusters have a products database and a user has a role granting read access on the products database, the user has that access on both clusters.

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::DatabaseUser \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-DatabaseUser \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## License

Distributed under the Apache-2.0 License.
