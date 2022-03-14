// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Schema for Module Fragment of type REGISTRY::TEST::RESOURCE::MODULE
 *
 * @schema CfnResource1ModuleProps
 */
export interface CfnResource1ModuleProps {
  /**
   * @schema CfnResource1ModuleProps#Parameters
   */
  readonly parameters?: CfnResource1ModulePropsParameters;

  /**
   * @schema CfnResource1ModuleProps#Resources
   */
  readonly resources?: CfnResource1ModulePropsResources;

}

/**
 * Converts an object of type 'CfnResource1ModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResource1ModuleProps(obj: CfnResource1ModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': toJson_CfnResource1ModulePropsParameters(obj.parameters),
    'Resources': toJson_CfnResource1ModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnResource1ModulePropsParameters
 */
export interface CfnResource1ModulePropsParameters {
  /**
   * Name for the bucket
   *
   * @schema CfnResource1ModulePropsParameters#BucketName
   */
  readonly bucketName?: CfnResource1ModulePropsParametersBucketName;

}

/**
 * Converts an object of type 'CfnResource1ModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResource1ModulePropsParameters(obj: CfnResource1ModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': toJson_CfnResource1ModulePropsParametersBucketName(obj.bucketName),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnResource1ModulePropsResources
 */
export interface CfnResource1ModulePropsResources {
  /**
   * @schema CfnResource1ModulePropsResources#S3Bucket
   */
  readonly s3Bucket?: CfnResource1ModulePropsResourcesS3Bucket;

}

/**
 * Converts an object of type 'CfnResource1ModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResource1ModulePropsResources(obj: CfnResource1ModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': toJson_CfnResource1ModulePropsResourcesS3Bucket(obj.s3Bucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Name for the bucket
 *
 * @schema CfnResource1ModulePropsParametersBucketName
 */
export interface CfnResource1ModulePropsParametersBucketName {
  /**
   * @schema CfnResource1ModulePropsParametersBucketName#Type
   */
  readonly type: string;

  /**
   * @schema CfnResource1ModulePropsParametersBucketName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnResource1ModulePropsParametersBucketName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResource1ModulePropsParametersBucketName(obj: CfnResource1ModulePropsParametersBucketName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnResource1ModulePropsResourcesS3Bucket
 */
export interface CfnResource1ModulePropsResourcesS3Bucket {
  /**
   * @schema CfnResource1ModulePropsResourcesS3Bucket#Type
   */
  readonly type?: string;

  /**
   * @schema CfnResource1ModulePropsResourcesS3Bucket#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnResource1ModulePropsResourcesS3Bucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResource1ModulePropsResourcesS3Bucket(obj: CfnResource1ModulePropsResourcesS3Bucket | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `REGISTRY::TEST::RESOURCE1::MODULE`
 *
 * @cloudformationResource REGISTRY::TEST::RESOURCE1::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnResource1Module extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "REGISTRY::TEST::RESOURCE1::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnResource1ModuleProps;


  /**
   * Create a new `REGISTRY::TEST::RESOURCE1::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnResource1ModuleProps) {
    super(scope, id, { type: CfnResource1Module.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnResource1ModuleProps(props)! });

    this.props = props;

  }
}