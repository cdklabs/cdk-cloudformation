// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * The exportBuckets resource allows you to grant Atlas access to the specified bucket for exporting backup snapshots.
 *
 * @schema CfnCloudBackupSnapshotExportBucketProps
 */
export interface CfnCloudBackupSnapshotExportBucketProps {
  /**
   * @schema CfnCloudBackupSnapshotExportBucketProps#ApiKeys
   */
  readonly apiKeys: ApiKeyDefinition;

  /**
   * Human-readable label that identifies the AWS bucket that the role is authorized to access.
   *
   * @schema CfnCloudBackupSnapshotExportBucketProps#BucketName
   */
  readonly bucketName: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnCloudBackupSnapshotExportBucketProps#GroupId
   */
  readonly groupId: string;

  /**
   * Unique 24-hexadecimal character string that identifies the AWS IAM role that MongoDB Cloud uses to access the AWS S3 bucket.
   *
   * @schema CfnCloudBackupSnapshotExportBucketProps#IamRoleID
   */
  readonly iamRoleId: string;

}

/**
 * Converts an object of type 'CfnCloudBackupSnapshotExportBucketProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudBackupSnapshotExportBucketProps(obj: CfnCloudBackupSnapshotExportBucketProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeys': toJson_ApiKeyDefinition(obj.apiKeys),
    'BucketName': obj.bucketName,
    'GroupId': obj.groupId,
    'IamRoleID': obj.iamRoleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema apiKeyDefinition
 */
export interface ApiKeyDefinition {
  /**
   * @schema apiKeyDefinition#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema apiKeyDefinition#PublicKey
   */
  readonly publicKey?: string;

}

/**
 * Converts an object of type 'ApiKeyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKeyDefinition(obj: ApiKeyDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateKey': obj.privateKey,
    'PublicKey': obj.publicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `MongoDB::Atlas::CloudBackupSnapshotExportBucket`
 *
 * @cloudformationResource MongoDB::Atlas::CloudBackupSnapshotExportBucket
 * @stability external
 * @link http://unknown-url
 */
export class CfnCloudBackupSnapshotExportBucket extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::CloudBackupSnapshotExportBucket";

  /**
   * Resource props.
   */
  public readonly props: CfnCloudBackupSnapshotExportBucketProps;

  /**
   * Attribute `MongoDB::Atlas::CloudBackupSnapshotExportBucket.Id`
   * @link http://unknown-url
   */
  public readonly attrId: string;

  /**
   * Create a new `MongoDB::Atlas::CloudBackupSnapshotExportBucket`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnCloudBackupSnapshotExportBucketProps) {
    super(scope, id, { type: CfnCloudBackupSnapshotExportBucket.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnCloudBackupSnapshotExportBucketProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}