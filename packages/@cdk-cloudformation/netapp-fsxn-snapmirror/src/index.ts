// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * FSx for ONTAP provides SnapMirror, an embedded data replication technology that allows for the efficient transfer of data between two file systems. SnapMirror replicates data by creating point-in-time copies of the data. It is used for data protection, disaster recovery, and business continuity by ensuring that up-to-date copies of data are available at remote locations. To use SnapMirror, you must set up cluster peering and SVM peering between the source and target FSx for ONTAP file systems. Once activated, you will need a preview key to consume this resource. Please reach out to Ng-fsx-cloudformation@netapp.com to get the key. To use this resource, you would need to first create the Link module.
 *
 * @schema CfnSnapMirrorProps
 */
export interface CfnSnapMirrorProps {
  /**
   * The password source for the FSx admin user.
   *
   * @schema CfnSnapMirrorProps#FsxAdminPasswordSource
   */
  readonly fsxAdminPasswordSource: PasswordSource;

  /**
   * The file system ID of the Amazon FSx for NetApp ONTAP file system in which the resource is created.
   *
   * @schema CfnSnapMirrorProps#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * The ARN of the AWS Lambda function that will be invoked to manage the resource.
   *
   * @schema CfnSnapMirrorProps#LinkArn
   */
  readonly linkArn: string;

  /**
   * The destination information for the Cluster Peer relationship.
   *
   * @schema CfnSnapMirrorProps#FsxnDestinationInfo
   */
  readonly fsxnDestinationInfo: FsxnDestination;

  /**
   * Source endpoint of a SnapMirror relationship.
   *
   * @schema CfnSnapMirrorProps#SnapMirrorSourceEndpoint
   */
  readonly snapMirrorSourceEndpoint: Endpoint;

  /**
   * Destination endpoint of a SnapMirror relationship.
   *
   * @schema CfnSnapMirrorProps#SnapMirrorEndpoint
   */
  readonly snapMirrorEndpoint: Endpoint;

  /**
   * Use this object to provision the destination endpoint when establishing a SnapMirror relationship for a volume. For FlexGroup SnapMirror relationships, the source and destination FlexGroups must be spread over the same number of aggregates with the same number of constituents per aggregate.
   *
   * @schema CfnSnapMirrorProps#SnapMirrorDestinationCreation
   */
  readonly snapMirrorDestinationCreation?: SnapMirrorDestinationCreation;

  /**
   * The SnapMirror policy to be used for the SnapMirror relationship.
   *
   * @schema CfnSnapMirrorProps#Policy
   */
  readonly policy: string;

  /**
   * Throttle, in KBs per second. This 'throttle' overrides the 'throttle' set on the SnapMirror relationship's policy. If neither of these are set, the throttle defaults to 0, which is interpreted as unlimited.
   *
   * @schema CfnSnapMirrorProps#Throttle
   */
  readonly throttle?: number;

  /**
   * Schedule used to update asynchronous relationships. This 'transfer_schedule' overrides the 'transfer_schedule' set on the SnapMirror relationship's policy. Remove the property to revert. Only cron schedules are supported for SnapMirror.
   *
   * @schema CfnSnapMirrorProps#TransferSchedule
   */
  readonly transferSchedule?: string;

  /**
   * Setting state of the relationship. Can be set during modify only.
   *
   * @schema CfnSnapMirrorProps#StateAction
   */
  readonly stateAction?: CfnSnapMirrorPropsStateAction;

  /**
   * Reverse the direction of relationship by making the source endpoint as the new destination endpoint and making the destination endpoint as the new source endpoint. Can be set during modify only.
   *
   * @schema CfnSnapMirrorProps#Reverse
   */
  readonly reverse?: boolean;

  /**
   * The health status of the SnapMirror relationship.
   *
   * @schema CfnSnapMirrorProps#HealthyStatus
   */
  readonly healthyStatus?: HealthyStatus;

}

/**
 * Converts an object of type 'CfnSnapMirrorProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSnapMirrorProps(obj: CfnSnapMirrorProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FsxAdminPasswordSource': toJson_PasswordSource(obj.fsxAdminPasswordSource),
    'FileSystemId': obj.fileSystemId,
    'LinkArn': obj.linkArn,
    'FsxnDestinationInfo': toJson_FsxnDestination(obj.fsxnDestinationInfo),
    'SnapMirrorSourceEndpoint': toJson_Endpoint(obj.snapMirrorSourceEndpoint),
    'SnapMirrorEndpoint': toJson_Endpoint(obj.snapMirrorEndpoint),
    'SnapMirrorDestinationCreation': toJson_SnapMirrorDestinationCreation(obj.snapMirrorDestinationCreation),
    'Policy': obj.policy,
    'Throttle': obj.throttle,
    'TransferSchedule': obj.transferSchedule,
    'StateAction': obj.stateAction,
    'Reverse': obj.reverse,
    'HealthyStatus': toJson_HealthyStatus(obj.healthyStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PasswordSource
 */
export interface PasswordSource {
  /**
   * A reference to the source of the password, typically an AWS Secrets Manager secret.
   *
   * @schema PasswordSource#Secret
   */
  readonly secret: SecretSource;

}

/**
 * Converts an object of type 'PasswordSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PasswordSource(obj: PasswordSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Secret': toJson_SecretSource(obj.secret),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FsxnDestination
 */
export interface FsxnDestination {
  /**
   * The password source for the FSx admin user.
   *
   * @schema FsxnDestination#FsxAdminPasswordSource
   */
  readonly fsxAdminPasswordSource: PasswordSource;

  /**
   * The file system ID of the Amazon FSx for NetApp ONTAP file system in which the resource is created.
   *
   * @schema FsxnDestination#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * The ARN of the AWS Lambda function that will be invoked to manage the resource.
   *
   * @schema FsxnDestination#LinkArn
   */
  readonly linkArn: string;

}

/**
 * Converts an object of type 'FsxnDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FsxnDestination(obj: FsxnDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FsxAdminPasswordSource': toJson_PasswordSource(obj.fsxAdminPasswordSource),
    'FileSystemId': obj.fileSystemId,
    'LinkArn': obj.linkArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * The SVM identifier.
   *
   * @schema Endpoint#SVM
   */
  readonly svm: NameWithUuidRef;

  /**
   * The volume name within the SVM.
   *
   * @schema Endpoint#Volume
   */
  readonly volume: string;

}

/**
 * Converts an object of type 'Endpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Endpoint(obj: Endpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SVM': toJson_NameWithUuidRef(obj.svm),
    'Volume': obj.volume,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnapMirrorDestinationCreation
 */
export interface SnapMirrorDestinationCreation {
  /**
   * List of aggregate names that host the volume.
   *
   * @schema SnapMirrorDestinationCreation#Aggregates
   */
  readonly aggregates: string[];

}

/**
 * Converts an object of type 'SnapMirrorDestinationCreation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnapMirrorDestinationCreation(obj: SnapMirrorDestinationCreation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aggregates': obj.aggregates?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Setting state of the relationship. Can be set during modify only.
 *
 * @schema CfnSnapMirrorPropsStateAction
 */
export enum CfnSnapMirrorPropsStateAction {
  /** broken_off */
  BROKEN_UNDERSCORE_OFF = "broken_off",
  /** paused */
  PAUSED = "paused",
  /** snapmirrored */
  SNAPMIRRORED = "snapmirrored",
  /** in_sync */
  IN_UNDERSCORE_SYNC = "in_sync",
}

/**
 * @schema HealthyStatus
 */
export interface HealthyStatus {
  /**
   * Indicates whether the relationship is healthy.
   *
   * @schema HealthyStatus#Healthy
   */
  readonly healthy?: boolean;

  /**
   * Reason the relationship is not healthy.
   *
   * @schema HealthyStatus#UnhealthyReason
   */
  readonly unhealthyReason?: string[];

}

/**
 * Converts an object of type 'HealthyStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HealthyStatus(obj: HealthyStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Healthy': obj.healthy,
    'UnhealthyReason': obj.unhealthyReason?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretSource
 */
export interface SecretSource {
  /**
   * The ARN of the secret stored in AWS Secrets Manager.
   *
   * @schema SecretSource#SecretArn
   */
  readonly secretArn: string;

  /**
   * Reference for the SecretKey. The actual password is stored in AWS Secret Manager.
   *
   * @schema SecretSource#SecretKey
   */
  readonly secretKey: string;

}

/**
 * Converts an object of type 'SecretSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretSource(obj: SecretSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretArn': obj.secretArn,
    'SecretKey': obj.secretKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NameWithUuidRef
 */
export interface NameWithUuidRef {
  /**
   * The name part of the reference, which can be used to identify resources such as SVM.
   *
   * @schema NameWithUuidRef#Name
   */
  readonly name?: string;

  /**
   * The UUID part of the reference, which can be used to identify resources such as SVM.
   *
   * @schema NameWithUuidRef#UUID
   */
  readonly uuid?: string;

}

/**
 * Converts an object of type 'NameWithUuidRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NameWithUuidRef(obj: NameWithUuidRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'UUID': obj.uuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `NetApp::FSxN::SnapMirror`
 *
 * @cloudformationResource NetApp::FSxN::SnapMirror
 * @stability external
 * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
 */
export class CfnSnapMirror extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NetApp::FSxN::SnapMirror";

  /**
   * Resource props.
   */
  public readonly props: CfnSnapMirrorProps;

  /**
   * Attribute `NetApp::FSxN::SnapMirror.ID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrId: string;
  /**
   * Attribute `NetApp::FSxN::SnapMirror.UUID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrUuid: string;
  /**
   * Attribute `NetApp::FSxN::SnapMirror.SourcePath`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrSourcePath: string;
  /**
   * Attribute `NetApp::FSxN::SnapMirror.DestinationPath`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrDestinationPath: string;
  /**
   * Attribute `NetApp::FSxN::SnapMirror.State`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrState: string;

  /**
   * Create a new `NetApp::FSxN::SnapMirror`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnSnapMirrorProps) {
    super(scope, id, { type: CfnSnapMirror.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnSnapMirrorProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('ID'));
    this.attrUuid = cdk.Token.asString(this.getAtt('UUID'));
    this.attrSourcePath = cdk.Token.asString(this.getAtt('SourcePath'));
    this.attrDestinationPath = cdk.Token.asString(this.getAtt('DestinationPath'));
    this.attrState = cdk.Token.asString(this.getAtt('State'));
  }
}