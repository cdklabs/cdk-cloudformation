# stocks-orders-marketorder

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `Stocks::Orders::MarketOrder` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

A market order is a request to buy or sell a security at the currently available market price. The order to buy a security will be submitted on resource creation and the security will be sold (or the unfilled order cancelled) on resource deletion. Supported exchanges are AMEX, ARCA, BATS, NYSE, NASDAQ and NYSEARCA.

## References

* [Source](https://github.com/iann0036/cfn-types/tree/master/stocks-orders-marketorder)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name Stocks::Orders::MarketOrder \
  --publisher-id e1238fdd31aee1839e14fb3fb2dac9db154dae29 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/e1238fdd31aee1839e14fb3fb2dac9db154dae29/Stocks-Orders-MarketOrder \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `Stocks::Orders::MarketOrder`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fstocks-orders-marketorder+v1.0.0).
* Issues related to `Stocks::Orders::MarketOrder` should be reported to the [publisher](https://github.com/iann0036/cfn-types/tree/master/stocks-orders-marketorder).

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
