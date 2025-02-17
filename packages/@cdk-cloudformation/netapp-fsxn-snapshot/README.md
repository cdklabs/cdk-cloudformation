# netapp-fsxn-snapshot

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `NetApp::FSxN::Snapshot` v1.1.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

A snapshot creates a read-only copy of a volume or LUN at a specific time. It allows users to restore files or volumes if data is deleted, corrupted, or changed. Snapshots efficiently store only the changes made after the snapshot, making them ideal for data protection and recovery. Once activated, you need a preview key to consume this resource. Please reach out to Ng-fsx-cloudformation@netapp.com to get the key. To use this resource, you must first create the Link module.

## References

* [Source](https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name NetApp::FSxN::Snapshot \
  --publisher-id a25d267c2b9b86b8d408fce3c7a4d94d34c90946 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/a25d267c2b9b86b8d408fce3c7a4d94d34c90946/NetApp-FSxN-Snapshot \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `NetApp::FSxN::Snapshot`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fnetapp-fsxn-snapshot+v1.1.0).
* Issues related to `NetApp::FSxN::Snapshot` should be reported to the [publisher](https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
