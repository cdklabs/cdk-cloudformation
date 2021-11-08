# AWS CDK CloudFormation Constructs for TF::Google::StorageBucket

Creates a new bucket in Google cloud storage service (GCS).
Once a bucket has been created, its location can't be changed.

For more information see
[the official documentation](https://cloud.google.com/storage/docs/overview)
and
[API](https://cloud.google.com/storage/docs/json_api/v1/buckets).

**Note**: If the project id is not set on the resource or in the provider block it will be dynamically
determined which will require enabling the compute api.
## References
* [Documentation](https://github.com/iann0036/cfn-tf-custom-types/blob/docs/resources/google/TF-Google-StorageBucket/docs/README.md)
* [Source](https://github.com/iann0036/cfn-tf-custom-types.git)
## License

Distributed under the Apache-2.0 License.