// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * CloudFormation template for Pro Subscription.
 *
 * @schema CfnProSubscriptionProps
 */
export interface CfnProSubscriptionProps {
  /**
   * [Required]. The Base URL where the API calls are sent.
   *
   * @schema CfnProSubscriptionProps#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * [Optional]. Subscription name. Example: My new subscription
   *
   * @schema CfnProSubscriptionProps#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * [Optional]. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Example: false. Default: 'false'.
   *
   * @schema CfnProSubscriptionProps#DryRun
   */
  readonly dryRun?: string;

  /**
   * [Optional]. Creates a single region subscription. Example: single-region
   *
   * @schema CfnProSubscriptionProps#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * [Optional]. Payment method for the requested subscription. If credit card is specified, the payment method Id must be defined. Default: 'credit-card'
   *
   * @schema CfnProSubscriptionProps#PaymentMethod
   */
  readonly paymentMethod?: string;

  /**
   * [Optional]. A valid payment method that was pre-defined in the current account. This value is Optional if 'paymentMethod' is 'marketplace', but Required for all other account types.
   *
   * @schema CfnProSubscriptionProps#PaymentMethodId
   */
  readonly paymentMethodId?: string;

  /**
   * [Optional]. Optional. Memory storage preference: either 'ram' or a combination of 'ram-and-flash'. Example: ram. Default: 'ram'
   *
   * @schema CfnProSubscriptionProps#MemoryStorage
   */
  readonly memoryStorage?: string;

  /**
   * [Required as JSON]. Cloud hosting & networking details. Example: [{"regions": [{"region": "us-east-1", "networking": {}}]}]
   *
   * @schema CfnProSubscriptionProps#CloudProviders
   */
  readonly cloudProviders: string;

  /**
   * [Optional]. If specified, the redisVersion defines the Redis version of the databases in the subscription. If omitted, the Redis version will be the default (available in 'GET /subscriptions/redis-versions'). Example: 7.2. Default = 'default'
   *
   * @schema CfnProSubscriptionProps#RedisVersion
   */
  readonly redisVersion?: string;
}

/**
 * Converts an object of type 'CfnProSubscriptionProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnProSubscriptionProps(obj: CfnProSubscriptionProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaseUrl': obj.baseUrl,
    'SubscriptionName': obj.subscriptionName,
    'DryRun': obj.dryRun,
    'DeploymentType': obj.deploymentType,
    'PaymentMethod': obj.paymentMethod,
    'PaymentMethodId': obj.paymentMethodId,
    'MemoryStorage': obj.memoryStorage,
    'CloudProviders': obj.cloudProviders,
    'RedisVersion': obj.redisVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `Redis::CloudFormation::ProSubscription`
 *
 * @cloudformationResource Redis::CloudFormation::ProSubscription
 * @stability external
 * @link http://unknown-url
 */
export class CfnProSubscription extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Redis::CloudFormation::ProSubscription";

  /**
   * Resource props.
   */
  public readonly props: CfnProSubscriptionProps;

  /**
   * Attribute `Redis::CloudFormation::ProSubscription.SubscriptionID`
   * @link http://unknown-url
   */
  public readonly attrSubscriptionID: string;

  /**
   * Create a new `Redis::CloudFormation::ProSubscription`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnProSubscriptionProps) {
    super(scope, id, { type: CfnProSubscription.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnProSubscriptionProps(props)! });

    this.props = props;

    this.attrSubscriptionID = cdk.Token.asString(this.getAtt('SubscriptionID'));
  }
}