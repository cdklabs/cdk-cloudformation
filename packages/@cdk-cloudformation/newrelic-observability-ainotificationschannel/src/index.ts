// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * CRUD operations for New Relic AI Notifications Channels via the NerdGraph API
 *
 * @schema CfnAiNotificationsChannelProps
 */
export interface CfnAiNotificationsChannelProps {
  /**
   * @schema CfnAiNotificationsChannelProps#Channel
   */
  readonly channel: string;

  /**
   * @schema CfnAiNotificationsChannelProps#ListQueryFilter
   */
  readonly listQueryFilter?: string;

  /**
   * @schema CfnAiNotificationsChannelProps#ListQuerySorter
   */
  readonly listQuerySorter?: string;

  /**
   * @schema CfnAiNotificationsChannelProps#Variables
   */
  readonly variables?: any;
}

/**
 * Converts an object of type 'CfnAiNotificationsChannelProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnAiNotificationsChannelProps(obj: CfnAiNotificationsChannelProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': obj.channel,
    'ListQueryFilter': obj.listQueryFilter,
    'ListQuerySorter': obj.listQuerySorter,
    'Variables': obj.variables,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `NewRelic::Observability::AINotificationsChannel`
 *
 * @cloudformationResource NewRelic::Observability::AINotificationsChannel
 * @stability external
 * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-ainotificationschannel.git
 */
export class CfnAiNotificationsChannel extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NewRelic::Observability::AINotificationsChannel";

  /**
   * Resource props.
   */
  public readonly props: CfnAiNotificationsChannelProps;

  /**
   * Attribute `NewRelic::Observability::AINotificationsChannel.Id`
   * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-ainotificationschannel.git
   */
  public readonly attrId: string;

  /**
   * Create a new `NewRelic::Observability::AINotificationsChannel`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnAiNotificationsChannelProps) {
    super(scope, id, { type: CfnAiNotificationsChannel.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAiNotificationsChannelProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}