// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Schema for Module Fragment of type Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE
 *
 * @schema CfnModuleProps
 */
export interface CfnModuleProps {
  /**
   * @schema CfnModuleProps#Resources
   */
  readonly resources?: CfnModulePropsResources;

}

/**
 * Converts an object of type 'CfnModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModuleProps(obj: CfnModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': toJson_CfnModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnModulePropsResources
 */
export interface CfnModulePropsResources {
  /**
   * @schema CfnModulePropsResources#Bucket
   */
  readonly bucket?: CfnModulePropsResourcesBucket;

}

/**
 * Converts an object of type 'CfnModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResources(obj: CfnModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': toJson_CfnModulePropsResourcesBucket(obj.bucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnModulePropsResourcesBucket
 */
export interface CfnModulePropsResourcesBucket {
  /**
   * @schema CfnModulePropsResourcesBucket#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesBucket#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesBucket(obj: CfnModulePropsResourcesBucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Properties': obj.properties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE`
 *
 * @cloudformationResource Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE";

  /**
   * `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE.Resources`
   * @link http://unknown-url
   */
  public readonly resources: any;

  /**
   * Create a new `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnModuleProps) {
    super(scope, id, { type: CfnModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnModuleProps(props)! });

    this.resources = props.resources;
  }
}