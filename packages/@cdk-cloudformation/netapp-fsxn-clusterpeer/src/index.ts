// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * A cluster peer establishes a trusted network relationship between two FSx for ONTAP file systems, allowing them to securely communicate and replicate encrypted, authenticated data. It is used for disaster recovery across clusters in different regions, providing flexibility for data protection and high availability. Once activated, you need a preview key to consume this resource. Please reach out to Ng-fsx-cloudformation@netapp.com to get the key. To use this resource, you must first create the Link module.
 *
 * @schema CfnClusterPeerProps
 */
export interface CfnClusterPeerProps {
  /**
   * The password source for the FSx admin user.
   *
   * @schema CfnClusterPeerProps#FsxAdminPasswordSource
   */
  readonly fsxAdminPasswordSource: PasswordSource;

  /**
   * The file system ID of the Amazon FSx for NetApp ONTAP file system in which the resource is created.
   *
   * @schema CfnClusterPeerProps#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * The ARN of the AWS Lambda function that will be invoked to manage the resource.
   *
   * @schema CfnClusterPeerProps#LinkArn
   */
  readonly linkArn: string;

  /**
   * The destination information for the Cluster Peer relationship.
   *
   * @schema CfnClusterPeerProps#FsxnDestinationInfo
   */
  readonly fsxnDestinationInfo: FsxnDestination;

  /**
   * Information about the source cluster peer, including name and IP addresses.
   *
   * @schema CfnClusterPeerProps#SourceClusterPeer
   */
  readonly sourceClusterPeer?: ClusterPeerInfo;

  /**
   * Information about the destination cluster peer, including name and IP addresses.
   *
   * @schema CfnClusterPeerProps#DestinationClusterPeer
   */
  readonly destinationClusterPeer?: ClusterPeerInfo;

  /**
   * Encryption mechanism of the communication channel between the two peers.
   *
   * @schema CfnClusterPeerProps#Encryption
   */
  readonly encryption?: CfnClusterPeerPropsEncryption;
}

/**
 * Converts an object of type 'CfnClusterPeerProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnClusterPeerProps(obj: CfnClusterPeerProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FsxAdminPasswordSource': toJson_PasswordSource(obj.fsxAdminPasswordSource),
    'FileSystemId': obj.fileSystemId,
    'LinkArn': obj.linkArn,
    'FsxnDestinationInfo': toJson_FsxnDestination(obj.fsxnDestinationInfo),
    'SourceClusterPeer': toJson_ClusterPeerInfo(obj.sourceClusterPeer),
    'DestinationClusterPeer': toJson_ClusterPeerInfo(obj.destinationClusterPeer),
    'Encryption': obj.encryption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

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
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PasswordSource(obj: PasswordSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Secret': toJson_SecretSource(obj.secret),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

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
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
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
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema ClusterPeerInfo
 */
export interface ClusterPeerInfo {
  /**
   * Optional name for the cluster peer relationship. By default, it is the name of the remote cluster.
   *
   * @schema ClusterPeerInfo#Name
   */
  readonly name?: string;

  /**
   * Addresses of the remote peers. Assumes existing intercluster LIFs of remote cluster if not provided.
   *
   * @schema ClusterPeerInfo#RemoteIpAddresses
   */
  readonly remoteIpAddresses?: string[];

  /**
   * IPspace name of the local intercluster LIFs. Assumes Default IPspace if not provided.
   *
   * @schema ClusterPeerInfo#IpSpace
   */
  readonly ipSpace?: string;

  /**
   * Status of the cluster peer relationship.
   *
   * @schema ClusterPeerInfo#StatusInfo
   */
  readonly statusInfo?: ClusterPeerStatus;
}

/**
 * Converts an object of type 'ClusterPeerInfo' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ClusterPeerInfo(obj: ClusterPeerInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RemoteIpAddresses': obj.remoteIpAddresses?.map(y => y),
    'IpSpace': obj.ipSpace,
    'StatusInfo': toJson_ClusterPeerStatus(obj.statusInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Encryption mechanism of the communication channel between the two peers.
 *
 * @schema CfnClusterPeerPropsEncryption
 */
export enum CfnClusterPeerPropsEncryption {
  /** none */
  NONE = "none",
  /** tls_psk */
  TLS_UNDERSCORE_PSK = "tls_psk",
}

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
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_SecretSource(obj: SecretSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretArn': obj.secretArn,
    'SecretKey': obj.secretKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema ClusterPeerStatus
 */
export interface ClusterPeerStatus {
  /**
   * The current state of the cluster peer relationship. Possible values are 'available', 'partial', 'unavailable', 'pending' and 'unidentified'.
   *
   * @schema ClusterPeerStatus#State
   */
  readonly state?: ClusterPeerStatusState;

  /**
   * The last time the status of the peer cluster was updated.
   *
   * @schema ClusterPeerStatus#UpdateTime
   */
  readonly updateTime?: string;
}

/**
 * Converts an object of type 'ClusterPeerStatus' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ClusterPeerStatus(obj: ClusterPeerStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * The current state of the cluster peer relationship. Possible values are 'available', 'partial', 'unavailable', 'pending' and 'unidentified'.
 *
 * @schema ClusterPeerStatusState
 */
export enum ClusterPeerStatusState {
  /** available */
  AVAILABLE = "available",
  /** partial */
  PARTIAL = "partial",
  /** unavailable */
  UNAVAILABLE = "unavailable",
  /** pending */
  PENDING = "pending",
  /** unidentified */
  UNIDENTIFIED = "unidentified",
}


/**
 * A CloudFormation `NetApp::FSxN::ClusterPeer`
 *
 * @cloudformationResource NetApp::FSxN::ClusterPeer
 * @stability external
 * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
 */
export class CfnClusterPeer extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NetApp::FSxN::ClusterPeer";

  /**
   * Resource props.
   */
  public readonly props: CfnClusterPeerProps;

  /**
   * Attribute `NetApp::FSxN::ClusterPeer.SourceClusterPeerUUID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrSourceClusterPeerUUID: string;
  /**
   * Attribute `NetApp::FSxN::ClusterPeer.DestinationClusterPeerUUID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrDestinationClusterPeerUUID: string;

  /**
   * Create a new `NetApp::FSxN::ClusterPeer`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnClusterPeerProps) {
    super(scope, id, { type: CfnClusterPeer.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnClusterPeerProps(props)! });

    this.props = props;

    this.attrSourceClusterPeerUUID = cdk.Token.asString(this.getAtt('SourceClusterPeerUUID'));
    this.attrDestinationClusterPeerUUID = cdk.Token.asString(this.getAtt('DestinationClusterPeerUUID'));
  }
}