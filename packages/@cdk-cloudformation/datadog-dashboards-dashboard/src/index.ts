// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Datadog Dashboard 2.1.0
 *
 * @schema CfnDashboardProps
 */
export interface CfnDashboardProps {
  /**
   * JSON string of the dashboard definition
   *
   * @schema CfnDashboardProps#DashboardDefinition
   */
  readonly dashboardDefinition: string;

}

/**
 * Converts an object of type 'CfnDashboardProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnDashboardProps(obj: CfnDashboardProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardDefinition': obj.dashboardDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Datadog::Dashboards::Dashboard`
 *
 * @cloudformationResource Datadog::Dashboards::Dashboard
 * @stability external
 * @link http://unknown-url
 */
export class CfnDashboard extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Datadog::Dashboards::Dashboard";

  /**
   * Resource props.
   */
  public readonly props: CfnDashboardProps;

  /**
   * Attribute `Datadog::Dashboards::Dashboard.Id`
   * @link http://unknown-url
   */
  public readonly attrId: string;
  /**
   * Attribute `Datadog::Dashboards::Dashboard.Url`
   * @link http://unknown-url
   */
  public readonly attrUrl: string;

  /**
   * Create a new `Datadog::Dashboards::Dashboard`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnDashboardProps) {
    super(scope, id, { type: CfnDashboard.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnDashboardProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrUrl = cdk.Token.asString(this.getAtt('Url'));
  }
}