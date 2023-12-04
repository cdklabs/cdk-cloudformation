// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * CRUD operations for New Relic Workloads via the NerdGraph API
 *
 * @schema CfnWorkloadsProps
 */
export interface CfnWorkloadsProps {
  /**
   * @schema CfnWorkloadsProps#Workload
   */
  readonly workload?: string;

  /**
   * @schema CfnWorkloadsProps#ListQueryFilter
   */
  readonly listQueryFilter?: string;

  /**
   * @schema CfnWorkloadsProps#Variables
   */
  readonly variables?: any;

  /**
   * @schema CfnWorkloadsProps#Tags
   */
  readonly tags?: any;

}

/**
 * Converts an object of type 'CfnWorkloadsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnWorkloadsProps(obj: CfnWorkloadsProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workload': obj.workload,
    'ListQueryFilter': obj.listQueryFilter,
    'Variables': obj.variables,
    'Tags': obj.tags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `NewRelic::Observability::Workloads`
 *
 * @cloudformationResource NewRelic::Observability::Workloads
 * @stability external
 * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-workloads
 */
export class CfnWorkloads extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NewRelic::Observability::Workloads";

  /**
   * Resource props.
   */
  public readonly props: CfnWorkloadsProps;

  /**
   * Attribute `NewRelic::Observability::Workloads.Guid`
   * @link https://github.com/newrelic/newrelic-cloudformation-resource-providers-workloads
   */
  public readonly attrGuid: string;

  /**
   * Create a new `NewRelic::Observability::Workloads`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnWorkloadsProps) {
    super(scope, id, { type: CfnWorkloads.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnWorkloadsProps(props)! });

    this.props = props;

    this.attrGuid = cdk.Token.asString(this.getAtt('Guid'));
  }
}