// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * CRUD operations for New Relic Alerts Policies via the NerdGraph API
 *
 * @schema CfnAlertsPolicyProps
 */
export interface CfnAlertsPolicyProps {
  /**
   * @schema CfnAlertsPolicyProps#Name
   */
  readonly name: string;

  /**
   * @schema CfnAlertsPolicyProps#IncidentPreference
   */
  readonly incidentPreference: IncidentPreferenceEnum;

  /**
   * @schema CfnAlertsPolicyProps#ListQueryFilter
   */
  readonly listQueryFilter?: string;

  /**
   * @schema CfnAlertsPolicyProps#Variables
   */
  readonly variables?: any;

}

/**
 * Converts an object of type 'CfnAlertsPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnAlertsPolicyProps(obj: CfnAlertsPolicyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'IncidentPreference': obj.incidentPreference,
    'ListQueryFilter': obj.listQueryFilter,
    'Variables': obj.variables,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema incidentPreferenceEnum
 */
export enum IncidentPreferenceEnum {
  /** PER_CONDITION */
  PER_CONDITION = "PER_CONDITION",
  /** PER_CONDITION_AND_TARGET */
  PER_CONDITION_AND_TARGET = "PER_CONDITION_AND_TARGET",
  /** PER_POLICY */
  PER_POLICY = "PER_POLICY",
}


/**
 * A CloudFormation `NewRelic::Observability::AlertsPolicy`
 *
 * @cloudformationResource NewRelic::Observability::AlertsPolicy
 * @stability external
 * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-alertspolicy.git
 */
export class CfnAlertsPolicy extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NewRelic::Observability::AlertsPolicy";

  /**
   * Resource props.
   */
  public readonly props: CfnAlertsPolicyProps;

  /**
   * Attribute `NewRelic::Observability::AlertsPolicy.Id`
   * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-alertspolicy.git
   */
  public readonly attrId: string;

  /**
   * Create a new `NewRelic::Observability::AlertsPolicy`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnAlertsPolicyProps) {
    super(scope, id, { type: CfnAlertsPolicy.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAlertsPolicyProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}