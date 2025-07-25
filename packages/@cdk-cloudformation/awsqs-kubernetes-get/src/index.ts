// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Fetches data from a kubernetes cluster using jsonpath expressions.
 *
 * @schema CfnGetProps
 */
export interface CfnGetProps {
  /**
   * Name of the EKS cluster to query
   *
   * @schema CfnGetProps#ClusterName
   */
  readonly clusterName: string;

  /**
   * Name of the kubernetes resource to query, should contain kind. Eg.: pod/nginx
   *
   * @schema CfnGetProps#Name
   */
  readonly name: string;

  /**
   * Kubernetes namespace containing the resource
   *
   * @schema CfnGetProps#Namespace
   */
  readonly namespace: string;

  /**
   * Jsonpath expression to filter the output
   *
   * @schema CfnGetProps#JsonPath
   */
  readonly jsonPath: string;

  /**
   * How many times to retry a request. This provides a mechanism to wait for resources to be created before proceeding. Interval between retries is 60 seconds.
   *
   * @schema CfnGetProps#Retries
   */
  readonly retries?: number;
}

/**
 * Converts an object of type 'CfnGetProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnGetProps(obj: CfnGetProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'Name': obj.name,
    'Namespace': obj.namespace,
    'JsonPath': obj.jsonPath,
    'Retries': obj.retries,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `AWSQS::Kubernetes::Get`
 *
 * @cloudformationResource AWSQS::Kubernetes::Get
 * @stability external
 * @link https://github.com/aws-quickstart/quickstart-amazon-eks.git
 */
export class CfnGet extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "AWSQS::Kubernetes::Get";

  /**
   * Resource props.
   */
  public readonly props: CfnGetProps;

  /**
   * Attribute `AWSQS::Kubernetes::Get.Response`
   * @link https://github.com/aws-quickstart/quickstart-amazon-eks.git
   */
  public readonly attrResponse: string;
  /**
   * Attribute `AWSQS::Kubernetes::Get.Id`
   * @link https://github.com/aws-quickstart/quickstart-amazon-eks.git
   */
  public readonly attrId: string;

  /**
   * Create a new `AWSQS::Kubernetes::Get`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnGetProps) {
    super(scope, id, { type: CfnGet.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnGetProps(props)! });

    this.props = props;

    this.attrResponse = cdk.Token.asString(this.getAtt('Response'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}