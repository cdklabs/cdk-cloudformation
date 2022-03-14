// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Schema for Module Fragment of type Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE
 *
 * @schema CfnCloudFormationArtifactsBucketModuleProps
 */
export interface CfnCloudFormationArtifactsBucketModuleProps {
  /**
   * @schema CfnCloudFormationArtifactsBucketModuleProps#Resources
   */
  readonly resources?: CfnCloudFormationArtifactsBucketModulePropsResources;

}

/**
 * Converts an object of type 'CfnCloudFormationArtifactsBucketModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudFormationArtifactsBucketModuleProps(obj: CfnCloudFormationArtifactsBucketModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': toJson_CfnCloudFormationArtifactsBucketModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnCloudFormationArtifactsBucketModulePropsResources
 */
export interface CfnCloudFormationArtifactsBucketModulePropsResources {
  /**
   * @schema CfnCloudFormationArtifactsBucketModulePropsResources#Bucket
   */
  readonly bucket?: CfnCloudFormationArtifactsBucketModulePropsResourcesBucket;

}

/**
 * Converts an object of type 'CfnCloudFormationArtifactsBucketModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudFormationArtifactsBucketModulePropsResources(obj: CfnCloudFormationArtifactsBucketModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': toJson_CfnCloudFormationArtifactsBucketModulePropsResourcesBucket(obj.bucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnCloudFormationArtifactsBucketModulePropsResourcesBucket
 */
export interface CfnCloudFormationArtifactsBucketModulePropsResourcesBucket {
  /**
   * @schema CfnCloudFormationArtifactsBucketModulePropsResourcesBucket#Type
   */
  readonly type?: string;

  /**
   * @schema CfnCloudFormationArtifactsBucketModulePropsResourcesBucket#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnCloudFormationArtifactsBucketModulePropsResourcesBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudFormationArtifactsBucketModulePropsResourcesBucket(obj: CfnCloudFormationArtifactsBucketModulePropsResourcesBucket | undefined): Record<string, any> | undefined {
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
export class CfnCloudFormationArtifactsBucketModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnCloudFormationArtifactsBucketModuleProps;


  /**
   * Create a new `Symphonia::OpenSource::CloudFormationArtifactsBucket::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnCloudFormationArtifactsBucketModuleProps) {
    super(scope, id, { type: CfnCloudFormationArtifactsBucketModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnCloudFormationArtifactsBucketModuleProps(props)! });

    this.props = props;

  }
}