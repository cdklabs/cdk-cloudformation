# Construct Libraries for Public CloudFormation Extensions

> Maturity: this project is currently in alpha. This means that breaking changes
> may occur.

This project includes an AWS CDK construct library for every public extension in
the [AWS CloudFormation Registry].

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Usage

Every public extension (module/resource) in the AWS CloudFormation Registry is
available in a separate code library in all AWS CDK supported languages. Each
library includes generated constructs and data types based on the extension's
schema.

For example, to use the `TF::Random::String` type in TypeScript:

Install the module:

```sh
npm install @cdk-cloudformation-types/tf-random-string
```

Import the construct to your code and add it to your app like any other
construct:

```typescript
import { CfnString } from '@cdk-cloudformation-types/tf-random-string';

new CfnString(this, 'MyString', {
  length: 100,
  lower: true,
  upper: true,
});
```

## Versioning

The version of each library is based on the version of the public extension.
This means that you should be able to obtain any version by simply requesting
that version from your package manager.

## Contributing

Contributions are welcome and celebrated. See
[CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more
information.

## License

This project is licensed under the [Apache-2.0](./LICENSE) License.
