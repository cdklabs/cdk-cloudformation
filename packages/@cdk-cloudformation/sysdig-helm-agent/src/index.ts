// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Sysdig Agent EKS cluster deployment.
 *
 * @schema CfnAgentProps
 */
export interface CfnAgentProps {
  /**
   * EKS cluster name
   *
   * @schema CfnAgentProps#ClusterID
   */
  readonly clusterId?: string;

  /**
   * Secrets Manager ARN for kubeconfig file
   *
   * @schema CfnAgentProps#KubeConfig
   */
  readonly kubeConfig?: string;

  /**
   * IAM to use with EKS cluster authentication, if not resource execution role will be used
   *
   * @schema CfnAgentProps#RoleArn
   */
  readonly roleArn?: string;

  /**
   * Namespace to use with helm. Created if doesn't exist and default will be used if not provided
   *
   * @schema CfnAgentProps#Namespace
   */
  readonly namespace?: string;

  /**
   * Name for the helm release
   *
   * @schema CfnAgentProps#Name
   */
  readonly name?: string;

  /**
   * Custom Values can optionally be specified
   *
   * @schema CfnAgentProps#Values
   */
  readonly values?: any;

  /**
   * String representation of a values.yaml file
   *
   * @schema CfnAgentProps#ValueYaml
   */
  readonly valueYaml?: string;

  /**
   * Version can be specified, if not latest will be used
   *
   * @schema CfnAgentProps#Version
   */
  readonly version?: string;

  /**
   * Custom Value Yaml file can optionally be specified
   *
   * @schema CfnAgentProps#ValueOverrideURL
   */
  readonly valueOverrideUrl?: string;

  /**
   * Timeout for resource provider. Default 60 mins
   *
   * @schema CfnAgentProps#TimeOut
   */
  readonly timeOut?: number;

  /**
   * For network connectivity to Cluster inside VPC
   *
   * @schema CfnAgentProps#VPCConfiguration
   */
  readonly vpcConfiguration?: CfnAgentPropsVpcConfiguration;
}

/**
 * Converts an object of type 'CfnAgentProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnAgentProps(obj: CfnAgentProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterID': obj.clusterId,
    'KubeConfig': obj.kubeConfig,
    'RoleArn': obj.roleArn,
    'Namespace': obj.namespace,
    'Name': obj.name,
    'Values': obj.values,
    'ValueYaml': obj.valueYaml,
    'Version': obj.version,
    'ValueOverrideURL': obj.valueOverrideUrl,
    'TimeOut': obj.timeOut,
    'VPCConfiguration': toJson_CfnAgentPropsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * For network connectivity to Cluster inside VPC
 *
 * @schema CfnAgentPropsVpcConfiguration
 */
export interface CfnAgentPropsVpcConfiguration {
  /**
   * Specify one or more security groups
   *
   * @schema CfnAgentPropsVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * Specify one or more subnets
   *
   * @schema CfnAgentPropsVpcConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];
}

/**
 * Converts an object of type 'CfnAgentPropsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnAgentPropsVpcConfiguration(obj: CfnAgentPropsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `Sysdig::Helm::Agent`
 *
 * @cloudformationResource Sysdig::Helm::Agent
 * @stability external
 * @link https://github.com/sysdiglabs/cloudformation-resource-providers.git
 */
export class CfnAgent extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Sysdig::Helm::Agent";

  /**
   * Resource props.
   */
  public readonly props: CfnAgentProps;

  /**
   * Attribute `Sysdig::Helm::Agent.ID`
   * @link https://github.com/sysdiglabs/cloudformation-resource-providers.git
   */
  public readonly attrId: string;

  /**
   * Create a new `Sysdig::Helm::Agent`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnAgentProps) {
    super(scope, id, { type: CfnAgent.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAgentProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('ID'));
  }
}