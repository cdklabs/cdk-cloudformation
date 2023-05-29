# awscommunity-resource-lookup

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `AwsCommunity::Resource::Lookup` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

This resource uses the `ListResources` and `GetResource` actions of AWS Cloud Control API to perform a lookup of a resource of a given type (such as, `AWS::EC2::VPC`) in your AWS account -and current region if you are using a regional AWS service- based on a query you specify.  If only one match is found, this resource returns the primary identifier of the resource (in the `AWS::EC2::VPC` example, the ID of the VPC), that you can then consume by referencing it in your template with the `Fn::GetAtt` intrinsic function.  Note: as this resource type uses Cloud Control API, you can specify resource type search targets -like `AWS::EC2::VPC`- that are supported by Cloud Control API; for more information, see `Determining if a resource type supports Cloud Control API`: https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-types.html#resource-types-determine-support .

## References

* [Documentation](https://github.com/aws-cloudformation/community-registry-extensions/blob/main/resources/Resource_Lookup/README.md)
* [Source](https://github.com/aws-cloudformation/community-registry-extensions/tree/main/resources/Resource_Lookup)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name AwsCommunity::Resource::Lookup \
  --publisher-id c830e97710da0c9954d80ba8df021e5439e7134b \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/c830e97710da0c9954d80ba8df021e5439e7134b/AwsCommunity-Resource-Lookup \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `AwsCommunity::Resource::Lookup`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fawscommunity-resource-lookup+v1.0.0).
* Issues related to `AwsCommunity::Resource::Lookup` should be reported to the [publisher](https://github.com/aws-cloudformation/community-registry-extensions/blob/main/resources/Resource_Lookup/README.md).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.