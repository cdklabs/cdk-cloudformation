// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * An example resource that creates an Azure Storage account along with a Blob container.
 *
 * @schema CfnBlobStorageProps
 */
export interface CfnBlobStorageProps {
  /**
   * Subscription ID of the Azure Account.
   *
   * @schema CfnBlobStorageProps#AzureSubscriptionId
   */
  readonly azureSubscriptionId: string;

  /**
   * App ID CloudFormation will use to access Azure.
   *
   * @schema CfnBlobStorageProps#AzureClientId
   */
  readonly azureClientId: string;

  /**
   * Directory ID CloudFormation will use to access Azure.
   *
   * @schema CfnBlobStorageProps#AzureTenantId
   */
  readonly azureTenantId: string;

  /**
   * Client credentials CloudFormation will use to authenticate to Azure and access services.
   *
   * @schema CfnBlobStorageProps#AzureClientSecret
   */
  readonly azureClientSecret: string;

}

/**
 * Converts an object of type 'CfnBlobStorageProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnBlobStorageProps(obj: CfnBlobStorageProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AzureSubscriptionId': obj.azureSubscriptionId,
    'AzureClientId': obj.azureClientId,
    'AzureTenantId': obj.azureTenantId,
    'AzureClientSecret': obj.azureClientSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `POC::Azure::BlobStorage`
 *
 * @cloudformationResource POC::Azure::BlobStorage
 * @stability external
 * @link http://unknown-url
 */
export class CfnBlobStorage extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "POC::Azure::BlobStorage";

  /**
   * Resource props.
   */
  public readonly props: CfnBlobStorageProps;

  /**
   * Attribute `POC::Azure::BlobStorage.AzureBlobStorageAccountName`
   * @link http://unknown-url
   */
  public readonly attrAzureBlobStorageAccountName: string;
  /**
   * Attribute `POC::Azure::BlobStorage.AzureBlobContainerUrl`
   * @link http://unknown-url
   */
  public readonly attrAzureBlobContainerUrl: string;
  /**
   * Attribute `POC::Azure::BlobStorage.AzureResourceGroup`
   * @link http://unknown-url
   */
  public readonly attrAzureResourceGroup: string;

  /**
   * Create a new `POC::Azure::BlobStorage`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnBlobStorageProps) {
    super(scope, id, { type: CfnBlobStorage.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnBlobStorageProps(props)! });

    this.props = props;

    this.attrAzureBlobStorageAccountName = cdk.Token.asString(this.getAtt('AzureBlobStorageAccountName'));
    this.attrAzureBlobContainerUrl = cdk.Token.asString(this.getAtt('AzureBlobContainerUrl'));
    this.attrAzureResourceGroup = cdk.Token.asString(this.getAtt('AzureResourceGroup'));
  }
}