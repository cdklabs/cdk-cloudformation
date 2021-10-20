// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * A resource provider for managing helm.
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
   * Repository url. Defaults to kubernetes-charts.storage.googleapis.com
   *
   * @default kubernetes-charts.storage.googleapis.com
   * @schema CfnHelmProps#Repository
   */
  readonly repository?: string;

  /**
   * Extra options for repository
   *
   * @schema CfnHelmProps#RepositoryOptions
   */
  readonly repositoryOptions?: CfnHelmPropsRepositoryOptions;

  /**
   * Chart name
   *
   * @schema CfnHelmProps#Chart
   */
  readonly chart: string;

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
   * Resources from the helm charts
   *
   * @schema CfnHelmProps#Resources
   */
  readonly resources?: any;

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
    'Repository': obj.repository,
    'RepositoryOptions': toJson_CfnHelmPropsRepositoryOptions(obj.repositoryOptions),
    'Chart': obj.chart,
    'Namespace': obj.namespace,
    'Name': obj.name,
    'Values': obj.values,
    'ValueYaml': obj.valueYaml,
    'Version': obj.version,
    'ValueOverrideURL': obj.valueOverrideUrl,
    'Resources': obj.resources,
    'TimeOut': obj.timeOut,
    'VPCConfiguration': toJson_CfnHelmPropsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Extra options for repository
 *
 * @schema CfnHelmPropsRepositoryOptions
 */
export interface CfnHelmPropsRepositoryOptions {
  /**
   * Chart repository username
   *
   * @schema CfnHelmPropsRepositoryOptions#Username
   */
  readonly username?: string;

  /**
   * Chart repository password
   *
   * @schema CfnHelmPropsRepositoryOptions#Password
   */
  readonly password?: string;

  /**
   * Verify certificates of HTTPS-enabled servers using this CA bundle from S3
   *
   * @schema CfnHelmPropsRepositoryOptions#CAFile
   */
  readonly caFile?: string;

  /**
   * Skip TLS certificate checks for the repository
   *
   * @schema CfnHelmPropsRepositoryOptions#InsecureSkipTLSVerify
   */
  readonly insecureSkipTlsVerify?: boolean;

}

/**
 * Converts an object of type 'CfnHelmPropsRepositoryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnHelmPropsRepositoryOptions(obj: CfnHelmPropsRepositoryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'CAFile': obj.caFile,
    'InsecureSkipTLSVerify': obj.insecureSkipTlsVerify,
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
 * A CloudFormation `AWSQS::Kubernetes::Helm`
 *
 * @cloudformationResource AWSQS::Kubernetes::Helm
 * @stability external
 * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
 */
export class CfnHelm extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "AWSQS::Kubernetes::Helm";

  /**
   * `AWSQS::Kubernetes::Helm.ClusterID`
   * EKS cluster name
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly clusterID: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.KubeConfig`
   * Secrets Manager ARN for kubeconfig file
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly kubeConfig: Arn | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.RoleArn`
   * IAM to use with EKS cluster authentication, if not resource execution role will be used
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly roleArn: Arn | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.Repository`
   * Repository url. Defaults to kubernetes-charts.storage.googleapis.com
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly repository: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.RepositoryOptions`
   * Extra options for repository
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly repositoryOptions: any | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.Chart`
   * Chart name
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly chart: string;
  /**
   * `AWSQS::Kubernetes::Helm.Namespace`
   * Namespace to use with helm. Created if doesn't exist and default will be used if not provided
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly namespace: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.Name`
   * Name for the helm release
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly name: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.Values`
   * Custom Values can optionally be specified
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly values: any | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.ValueYaml`
   * String representation of a values.yaml file
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly valueYaml: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.Version`
   * Version can be specified, if not latest will be used
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly version: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.ValueOverrideURL`
   * Custom Value Yaml file can optionally be specified
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly valueOverrideURL: string | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.TimeOut`
   * Timeout for resource provider. Default 60 mins
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly timeOut: number | undefined;
  /**
   * `AWSQS::Kubernetes::Helm.VPCConfiguration`
   * For network connectivity to Cluster inside VPC
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly vPCConfiguration: any | undefined;
  /**
   * Attribute `AWSQS::Kubernetes::Helm.ID`
   * @link https://github.com/aws-quickstart/quickstart-helm-resource-provider.git
   */
  public readonly attrId: string;

  /**
   * Create a new `AWSQS::Kubernetes::Helm`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnHelmProps) {
    super(scope, id, { type: CfnHelm.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnHelmProps(props)! });

    this.clusterID = props.clusterID;
    this.kubeConfig = props.kubeConfig;
    this.roleArn = props.roleArn;
    this.repository = props.repository;
    this.repositoryOptions = props.repositoryOptions;
    this.chart = props.chart;
    this.namespace = props.namespace;
    this.name = props.name;
    this.values = props.values;
    this.valueYaml = props.valueYaml;
    this.version = props.version;
    this.valueOverrideURL = props.valueOverrideURL;
    this.timeOut = props.timeOut;
    this.vPCConfiguration = props.vPCConfiguration;
    this.attrId = cdk.Token.asString(this.getAtt('ID'));
  }
}