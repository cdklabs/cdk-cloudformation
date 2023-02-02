// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * The maintenanceWindow resource provides access to retrieve or update the current Atlas project maintenance window.
 *
 * @schema CfnMaintenanceWindowProps
 */
export interface CfnMaintenanceWindowProps {
  /**
   * @schema CfnMaintenanceWindowProps#ApiKeys
   */
  readonly apiKeys?: ApiKeyDefinition;

  /**
   * Flag that indicates whether MongoDB Cloud should defer all maintenance windows for one week after you enable them.
   *
   * @schema CfnMaintenanceWindowProps#AutoDeferOnceEnabled
   */
  readonly autoDeferOnceEnabled?: boolean;

  /**
   * One-based integer that represents the day of the week that the maintenance window starts.
   *
   * | Value | Day of Week |
   * |---|---|
   * | `1` | Sunday |
   * | `2` | Monday |
   * | `3` | Tuesday |
   * | `4` | Wednesday |
   * | `5` | Thursday |
   * | `6` | Friday |
   * | `7` | Saturday |
   *
   *
   * @schema CfnMaintenanceWindowProps#DayOfWeek
   */
  readonly dayOfWeek?: number;

  /**
   * Zero-based integer that represents the hour of the of the day that the maintenance window starts according to a 24-hour clock. Use `0` for midnight and `12` for noon.
   *
   * @schema CfnMaintenanceWindowProps#HourOfDay
   */
  readonly hourOfDay: number;

  /**
   * Flag that indicates whether MongoDB Cloud starts the maintenance window immediately upon receiving this request. To start the maintenance window immediately for your project, MongoDB Cloud must have maintenance scheduled and you must set a maintenance window. This flag resets to `false` after MongoDB Cloud completes maintenance.
   *
   * @schema CfnMaintenanceWindowProps#StartASAP
   */
  readonly startAsap?: boolean;

}

/**
 * Converts an object of type 'CfnMaintenanceWindowProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnMaintenanceWindowProps(obj: CfnMaintenanceWindowProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeys': toJson_ApiKeyDefinition(obj.apiKeys),
    'AutoDeferOnceEnabled': obj.autoDeferOnceEnabled,
    'DayOfWeek': obj.dayOfWeek,
    'HourOfDay': obj.hourOfDay,
    'StartASAP': obj.startAsap,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema apiKeyDefinition
 */
export interface ApiKeyDefinition {
  /**
   * @schema apiKeyDefinition#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema apiKeyDefinition#PublicKey
   */
  readonly publicKey?: string;

}

/**
 * Converts an object of type 'ApiKeyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKeyDefinition(obj: ApiKeyDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateKey': obj.privateKey,
    'PublicKey': obj.publicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `MongoDB::Atlas::MaintenanceWindow`
 *
 * @cloudformationResource MongoDB::Atlas::MaintenanceWindow
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
 */
export class CfnMaintenanceWindow extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::MaintenanceWindow";

  /**
   * Resource props.
   */
  public readonly props: CfnMaintenanceWindowProps;

  /**
   * Attribute `MongoDB::Atlas::MaintenanceWindow.GroupId`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrGroupId: string;

  /**
   * Create a new `MongoDB::Atlas::MaintenanceWindow`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnMaintenanceWindowProps) {
    super(scope, id, { type: CfnMaintenanceWindow.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnMaintenanceWindowProps(props)! });

    this.props = props;

    this.attrGroupId = cdk.Token.asString(this.getAtt('GroupId'));
  }
}