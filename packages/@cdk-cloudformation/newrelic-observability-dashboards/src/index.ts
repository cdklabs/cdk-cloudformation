// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * CRUD operations for New Relic Dashboards via the NerdGraph API
 *
 * @schema CfnDashboardsProps
 */
export interface CfnDashboardsProps {
  /**
   * @schema CfnDashboardsProps#Dashboard
   */
  readonly dashboard?: string;

  /**
   * @schema CfnDashboardsProps#ListQueryFilter
   */
  readonly listQueryFilter?: string;

  /**
   * @schema CfnDashboardsProps#Variables
   */
  readonly variables?: any;

  /**
   * @schema CfnDashboardsProps#Tags
   */
  readonly tags?: any;

}

/**
 * Converts an object of type 'CfnDashboardsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnDashboardsProps(obj: CfnDashboardsProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dashboard': obj.dashboard,
    'ListQueryFilter': obj.listQueryFilter,
    'Variables': obj.variables,
    'Tags': obj.tags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `NewRelic::Observability::Dashboards`
 *
 * @cloudformationResource NewRelic::Observability::Dashboards
 * @stability external
 * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-dashboards
 */
export class CfnDashboards extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NewRelic::Observability::Dashboards";

  /**
   * Resource props.
   */
  public readonly props: CfnDashboardsProps;

  /**
   * Attribute `NewRelic::Observability::Dashboards.Guid`
   * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-dashboards
   */
  public readonly attrGuid: string;

  /**
   * Create a new `NewRelic::Observability::Dashboards`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnDashboardsProps) {
    super(scope, id, { type: CfnDashboards.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnDashboardsProps(props)! });

    this.props = props;

    this.attrGuid = cdk.Token.asString(this.getAtt('Guid'));
  }
}