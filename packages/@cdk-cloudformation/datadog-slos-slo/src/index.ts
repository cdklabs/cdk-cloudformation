// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Datadog SLO 1.0.0
 *
 * @schema CfnSloProps
 */
export interface CfnSloProps {
  /**
   * @schema CfnSloProps#Creator
   */
  readonly creator?: Creator;

  /**
   * Description of the slo
   *
   * @schema CfnSloProps#Description
   */
  readonly description?: string;

  /**
   * A list of (up to 20) monitor groups that narrow the scope of a monitor service level objective.
   *
   * @schema CfnSloProps#Groups
   */
  readonly groups?: string[];

  /**
   * A list of monitor ids that defines the scope of a monitor service level objective. Required if type is monitor.
   *
   * @schema CfnSloProps#MonitorIds
   */
  readonly monitorIds?: number[];

  /**
   * Name of the slo
   *
   * @schema CfnSloProps#Name
   */
  readonly name: string;

  /**
   * @schema CfnSloProps#Query
   */
  readonly query?: Query;

  /**
   * Tags associated with the slo
   *
   * @schema CfnSloProps#Tags
   */
  readonly tags?: string[];

  /**
   * @schema CfnSloProps#Thresholds
   */
  readonly thresholds: Threshold[];

  /**
   * The type of the slo
   *
   * @schema CfnSloProps#Type
   */
  readonly type: CfnSloPropsType;

}

/**
 * Converts an object of type 'CfnSloProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSloProps(obj: CfnSloProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Creator': toJson_Creator(obj.creator),
    'Description': obj.description,
    'Groups': obj.groups?.map(y => y),
    'MonitorIds': obj.monitorIds?.map(y => y),
    'Name': obj.name,
    'Query': toJson_Query(obj.query),
    'Tags': obj.tags?.map(y => y),
    'Thresholds': obj.thresholds?.map(y => toJson_Threshold(y)),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Creator
 */
export interface Creator {
  /**
   * Name of the creator of the slo
   *
   * @schema Creator#Name
   */
  readonly name?: string;

  /**
   * Handle of the creator of the slo
   *
   * @schema Creator#Handle
   */
  readonly handle?: string;

  /**
   * Email of the creator of the slo
   *
   * @schema Creator#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'Creator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Creator(obj: Creator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Handle': obj.handle,
    'Email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Query
 */
export interface Query {
  /**
   * A Datadog metric query for total (valid) events.
   *
   * @schema Query#Numerator
   */
  readonly numerator?: string;

  /**
   * A Datadog metric query for good events.
   *
   * @schema Query#Denominator
   */
  readonly denominator?: string;

}

/**
 * Converts an object of type 'Query' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Query(obj: Query | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Numerator': obj.numerator,
    'Denominator': obj.denominator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Threshold
 */
export interface Threshold {
  /**
   * The target value for the service level indicator within the corresponding timeframe.
   *
   * @schema Threshold#Target
   */
  readonly target?: number;

  /**
   * A string representation of the target that indicates its precision.(e.g. 98.00)
   *
   * @schema Threshold#TargetDisplay
   */
  readonly targetDisplay?: string;

  /**
   * The SLO time window options. Allowed enum values: 7d,30d,90d
   *
   * @schema Threshold#Timeframe
   */
  readonly timeframe?: ThresholdTimeframe;

  /**
   * The warning value for the service level objective.
   *
   * @schema Threshold#Warning
   */
  readonly warning?: number;

  /**
   * A string representation of the warning target.(e.g. 98.00)
   *
   * @schema Threshold#WarningDisplay
   */
  readonly warningDisplay?: string;

}

/**
 * Converts an object of type 'Threshold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Threshold(obj: Threshold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': obj.target,
    'TargetDisplay': obj.targetDisplay,
    'Timeframe': obj.timeframe,
    'Warning': obj.warning,
    'WarningDisplay': obj.warningDisplay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The type of the slo
 *
 * @schema CfnSloPropsType
 */
export enum CfnSloPropsType {
  /** monitor */
  MONITOR = 'monitor',
  /** metric */
  METRIC = 'metric',
}

/**
 * The SLO time window options. Allowed enum values: 7d,30d,90d
 *
 * @schema ThresholdTimeframe
 */
export enum ThresholdTimeframe {
  /** 7d */
  VALUE_7D = '7d',
  /** 30d */
  VALUE_30D = '30d',
  /** 90d */
  VALUE_90D = '90d',
}


/**
 * A CloudFormation `Datadog::SLOs::SLO`
 *
 * @cloudformationResource Datadog::SLOs::SLO
 * @stability external
 * @link http://unknown-url
 */
export class CfnSlo extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Datadog::SLOs::SLO";

  /**
   * Resource props.
   */
  public readonly props: CfnSloProps;

  /**
   * Attribute `Datadog::SLOs::SLO.Modified`
   * @link http://unknown-url
   */
  public readonly attrModified: string;
  /**
   * Attribute `Datadog::SLOs::SLO.Id`
   * @link http://unknown-url
   */
  public readonly attrId: string;
  /**
   * Attribute `Datadog::SLOs::SLO.Deleted`
   * @link http://unknown-url
   */
  public readonly attrDeleted: string;
  /**
   * Attribute `Datadog::SLOs::SLO.Created`
   * @link http://unknown-url
   */
  public readonly attrCreated: string;

  /**
   * Create a new `Datadog::SLOs::SLO`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnSloProps) {
    super(scope, id, { type: CfnSlo.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnSloProps(props)! });

    this.props = props;

    this.attrModified = cdk.Token.asString(this.getAtt('Modified'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrDeleted = cdk.Token.asString(this.getAtt('Deleted'));
    this.attrCreated = cdk.Token.asString(this.getAtt('Created'));
  }
}