# AWS CDK CloudFormation Constructs for TF::AWS::KeyPair

Provides an [EC2 key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) resource. A key pair is used to control login access to EC2 instances.

Currently this resource requires an existing user-supplied key pair. This key pair's public key will be registered with AWS to allow logging-in to EC2 instances.

When importing an existing key pair the public key material may be in any format supported by AWS. Supported formats (per the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws)) are:

* OpenSSH public key format (the format in ~/.ssh/authorized_keys)
* Base64 encoded DER format
* SSH public key file format as specified in RFC4716
## References
* [Documentation](https://github.com/iann0036/cfn-tf-custom-types/blob/docs/resources/aws/TF-AWS-KeyPair/docs/README.md)
* [Source](https://github.com/iann0036/cfn-tf-custom-types.git)
## License

Distributed under the Apache-2.0 License.