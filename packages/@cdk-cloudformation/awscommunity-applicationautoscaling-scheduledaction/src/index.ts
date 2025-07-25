// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Application Autoscaling Scheduled Action.
 *
 * @schema CfnScheduledActionProps
 */
export interface CfnScheduledActionProps {
  /**
   * @schema CfnScheduledActionProps#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CfnScheduledActionProps#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CfnScheduledActionProps#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema CfnScheduledActionProps#ScalableTargetAction
   */
  readonly scalableTargetAction: CfnScheduledActionPropsScalableTargetAction;

  /**
   * @schema CfnScheduledActionProps#Schedule
   */
  readonly schedule: string;

  /**
   * @schema CfnScheduledActionProps#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema CfnScheduledActionProps#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema CfnScheduledActionProps#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CfnScheduledActionProps#Timezone
   */
  readonly timezone?: string;
}

/**
 * Converts an object of type 'CfnScheduledActionProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnScheduledActionProps(obj: CfnScheduledActionProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndTime': obj.endTime,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'ScalableTargetAction': toJson_CfnScheduledActionPropsScalableTargetAction(obj.scalableTargetAction),
    'Schedule': obj.schedule,
    'ScheduledActionName': obj.scheduledActionName,
    'ServiceNamespace': obj.serviceNamespace,
    'StartTime': obj.startTime,
    'Timezone': obj.timezone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema CfnScheduledActionPropsScalableTargetAction
 */
export interface CfnScheduledActionPropsScalableTargetAction {
  /**
   * @schema CfnScheduledActionPropsScalableTargetAction#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema CfnScheduledActionPropsScalableTargetAction#MinCapacity
   */
  readonly minCapacity?: number;
}

/**
 * Converts an object of type 'CfnScheduledActionPropsScalableTargetAction' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnScheduledActionPropsScalableTargetAction(obj: CfnScheduledActionPropsScalableTargetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxCapacity': obj.maxCapacity,
    'MinCapacity': obj.minCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `AwsCommunity::ApplicationAutoscaling::ScheduledAction`
 *
 * @cloudformationResource AwsCommunity::ApplicationAutoscaling::ScheduledAction
 * @stability external
 * @link https://github.com/aws-cloudformation/community-registry-extensions
 */
export class CfnScheduledAction extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "AwsCommunity::ApplicationAutoscaling::ScheduledAction";

  /**
   * Resource props.
   */
  public readonly props: CfnScheduledActionProps;

  /**
   * Attribute `AwsCommunity::ApplicationAutoscaling::ScheduledAction.ScheduledActionARN`
   * @link https://github.com/aws-cloudformation/community-registry-extensions
   */
  public readonly attrScheduledActionARN: string;

  /**
   * Create a new `AwsCommunity::ApplicationAutoscaling::ScheduledAction`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnScheduledActionProps) {
    super(scope, id, { type: CfnScheduledAction.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnScheduledActionProps(props)! });

    this.props = props;

    this.attrScheduledActionARN = cdk.Token.asString(this.getAtt('ScheduledActionARN'));
  }
}