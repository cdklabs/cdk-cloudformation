// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 *
 * @schema CfnPrivateEndPointRegionalModeProps
 */
export interface CfnPrivateEndPointRegionalModeProps {
  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnPrivateEndPointRegionalModeProps#ProjectId
   */
  readonly projectId: string;

  /**
   * @schema CfnPrivateEndPointRegionalModeProps#ApiKeys
   */
  readonly apiKeys?: ApiKey;

}

/**
 * Converts an object of type 'CfnPrivateEndPointRegionalModeProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnPrivateEndPointRegionalModeProps(obj: CfnPrivateEndPointRegionalModeProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectId': obj.projectId,
    'ApiKeys': toJson_ApiKey(obj.apiKeys),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiKey
 */
export interface ApiKey {
  /**
   * @schema ApiKey#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema ApiKey#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * Converts an object of type 'ApiKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKey(obj: ApiKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKey': obj.publicKey,
    'PrivateKey': obj.privateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `MongoDB::Atlas::PrivateEndPointRegionalMode`
 *
 * @cloudformationResource MongoDB::Atlas::PrivateEndPointRegionalMode
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
 */
export class CfnPrivateEndPointRegionalMode extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::PrivateEndPointRegionalMode";

  /**
   * Resource props.
   */
  public readonly props: CfnPrivateEndPointRegionalModeProps;

  /**
   * Attribute `MongoDB::Atlas::PrivateEndPointRegionalMode.Enabled`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrEnabled: cdk.IResolvable;

  /**
   * Create a new `MongoDB::Atlas::PrivateEndPointRegionalMode`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnPrivateEndPointRegionalModeProps) {
    super(scope, id, { type: CfnPrivateEndPointRegionalMode.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnPrivateEndPointRegionalModeProps(props)! });

    this.props = props;

    this.attrEnabled = this.getAtt('Enabled');
  }
}