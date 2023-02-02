// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';


/**
 * A CloudFormation `AWSSamples::EksClusterLogging::Hook`
 *
 * @cloudformationResource AWSSamples::EksClusterLogging::Hook
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-samples/tree/main/hooks/python-hooks/eks-cluster-logging
 */
export class CfnHook extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "AWSSamples::EksClusterLogging::Hook";

  /**
   * Resource props.
   */
  public readonly props: CfnHookProps;


  /**
   * Create a new `AWSSamples::EksClusterLogging::Hook`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnHookProps) {
    super(scope, id, { type: CfnHook.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnHookProps(props)! });

    this.props = props;

  }
}