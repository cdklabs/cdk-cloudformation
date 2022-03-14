// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Snyk integrates with Amazon EKS, enabling you to import and test your running workloads and identify vulnerabilities in their associated images and configurations that might make those workloads less secure. Once imported, Snyk continues to monitor those workloads, identifying additional security issues as new images are deployed and the workload configuration changes.
 *
 * @schema CfnHelmProps
 */
export interface CfnHelmProps {
  /**
   * EKS cluster name
   *
   * @schema CfnHelmProps#ClusterID
   */
  readonly clusterId?: string;

  /**
   * Secrets Manager ARN for kubeconfig file
   *
   * @schema CfnHelmProps#KubeConfig
   */
  readonly kubeConfig?: string;

  /**
   * IAM to use with EKS cluster authentication, if not resource execution role will be used
   *
   * @schema CfnHelmProps#RoleArn
   */
  readonly roleArn?: string;

  /**
   * Namespace to use with helm. Created if doesn't exist and default will be used if not provided
   *
   * @schema CfnHelmProps#Namespace
   */
  readonly namespace?: string;

  /**
   * Name for the helm release
   *
   * @schema CfnHelmProps#Name
   */
  readonly name?: string;

  /**
   * Custom Values can optionally be specified
   *
   * @schema CfnHelmProps#Values
   */
  readonly values?: any;

  /**
   * String representation of a values.yaml file
   *
   * @schema CfnHelmProps#ValueYaml
   */
  readonly valueYaml?: string;

  /**
   * Version can be specified, if not latest will be used
   *
   * @schema CfnHelmProps#Version
   */
  readonly version?: string;

  /**
   * Custom Value Yaml file can optionally be specified
   *
   * @schema CfnHelmProps#ValueOverrideURL
   */
  readonly valueOverrideUrl?: string;

  /**
   * Timeout for resource provider. Default 60 mins
   *
   * @schema CfnHelmProps#TimeOut
   */
  readonly timeOut?: number;

  /**
   * For network connectivity to Cluster inside VPC
   *
   * @schema CfnHelmProps#VPCConfiguration
   */
  readonly vpcConfiguration?: CfnHelmPropsVpcConfiguration;

}

/**
 * Converts an object of type 'CfnHelmProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnHelmProps(obj: CfnHelmProps | undefined): Record<string, any> | undefined {
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
    'VPCConfiguration': toJson_CfnHelmPropsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * For network connectivity to Cluster inside VPC
 *
 * @schema CfnHelmPropsVpcConfiguration
 */
export interface CfnHelmPropsVpcConfiguration {
  /**
   * Specify one or more security groups
   *
   * @schema CfnHelmPropsVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * Specify one or more subnets
   *
   * @schema CfnHelmPropsVpcConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'CfnHelmPropsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnHelmPropsVpcConfiguration(obj: CfnHelmPropsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Snyk::Container::Helm`
 *
 * @cloudformationResource Snyk::Container::Helm
 * @stability external
 * @link https://github.com/snyk/aws-cloudformation-resource-providers.git
 */
export class CfnHelm extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Snyk::Container::Helm";

  /**
   * Resource props.
   */
  public readonly props: CfnHelmProps;

  /**
   * Attribute `Snyk::Container::Helm.ID`
   * @link https://github.com/snyk/aws-cloudformation-resource-providers.git
   */
  public readonly attrId: string;

  /**
   * Create a new `Snyk::Container::Helm`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnHelmProps) {
    super(scope, id, { type: CfnHelm.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnHelmProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('ID'));
  }
}