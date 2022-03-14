// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * The cluster resource provides access to your cluster configurations. The resource lets you create, edit and delete clusters. The resource requires your Project ID.
 *
 * @schema CfnClusterProps
 */
export interface CfnClusterProps {
  /**
   * @schema CfnClusterProps#ApiKeys
   */
  readonly apiKeys?: ApiKeyDefinition;

  /**
   * @schema CfnClusterProps#AutoScaling
   */
  readonly autoScaling?: AutoScaling;

  /**
   * Applicable only for M10+ clusters. Set to true to enable Atlas continuous backups for the cluster. Set to false to disable continuous backups for the cluster. Atlas deletes any stored snapshots. See the continuous backup Snapshot Schedule for more information. You cannot enable continuous backups if you have an existing cluster in the project with Cloud Provider Snapshots enabled. The default value is false.
   *
   * @schema CfnClusterProps#BackupEnabled
   */
  readonly backupEnabled?: boolean;

  /**
   * @schema CfnClusterProps#BiConnector
   */
  readonly biConnector?: CfnClusterPropsBiConnector;

  /**
   * Type of the cluster that you want to create.
   *
   * @schema CfnClusterProps#ClusterType
   */
  readonly clusterType?: string;

  /**
   * Set of connection strings that your applications use to connect to this cluster. Use the parameters in this object to connect your applications to this cluster. See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.
   *
   * @schema CfnClusterProps#ConnectionStrings
   */
  readonly connectionStrings?: ConnectionStrings;

  /**
   * Capacity, in gigabytes, of the hosts root volume. Increase this number to add capacity, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
   *
   * @schema CfnClusterProps#DiskSizeGB
   */
  readonly diskSizeGb?: number;

  /**
   * Set the Encryption at Rest parameter.
   *
   * @schema CfnClusterProps#EncryptionAtRestProvider
   */
  readonly encryptionAtRestProvider?: CfnClusterPropsEncryptionAtRestProvider;

  /**
   * Unique identifier of the project the cluster belongs to.
   *
   * @schema CfnClusterProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * Array containing key-value pairs that tag and categorize the cluster.
   *
   * @schema CfnClusterProps#Labels
   */
  readonly labels?: CfnClusterPropsLabels[];

  /**
   * Major version of the cluster to deploy.
   *
   * @schema CfnClusterProps#MongoDBMajorVersion
   */
  readonly mongoDbMajorVersion?: string;

  /**
   * Name of the cluster. Once the cluster is created, its name cannot be changed.
   *
   * @schema CfnClusterProps#Name
   */
  readonly name: string;

  /**
   * Positive integer that specifies the number of shards to deploy for a sharded cluster.
   *
   * @schema CfnClusterProps#NumShards
   */
  readonly numShards?: number;

  /**
   * Flag that indicates whether the cluster is paused or not.
   *
   * @schema CfnClusterProps#Paused
   */
  readonly paused?: boolean;

  /**
   * Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
   *
   * @schema CfnClusterProps#PitEnabled
   */
  readonly pitEnabled?: boolean;

  /**
   * Applicable only for M10+ clusters. Set to true to enable Atlas Cloud Provider Snapshots backups for the cluster. Set to false to disable Cloud Provider Snapshots backups for the cluster. You cannot enable Cloud Provider Snapshots if you have an existing cluster in the project with continuous backups enabled. Note that you must set this value to true for NVMe clusters. The default value is false.
   *
   * @schema CfnClusterProps#ProviderBackupEnabled
   */
  readonly providerBackupEnabled?: boolean;

  /**
   * @schema CfnClusterProps#ProviderSettings
   */
  readonly providerSettings?: CfnClusterPropsProviderSettings;

  /**
   * ReplicationFactor is deprecated. Use replicationSpecs.
   *
   * @schema CfnClusterProps#ReplicationFactor
   */
  readonly replicationFactor?: number;

  /**
   * Configuration for cluster regions.
   *
   * @schema CfnClusterProps#ReplicationSpecs
   */
  readonly replicationSpecs?: ReplicationSpec[];

}

/**
 * Converts an object of type 'CfnClusterProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterProps(obj: CfnClusterProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeys': toJson_ApiKeyDefinition(obj.apiKeys),
    'AutoScaling': toJson_AutoScaling(obj.autoScaling),
    'BackupEnabled': obj.backupEnabled,
    'BiConnector': toJson_CfnClusterPropsBiConnector(obj.biConnector),
    'ClusterType': obj.clusterType,
    'ConnectionStrings': toJson_ConnectionStrings(obj.connectionStrings),
    'DiskSizeGB': obj.diskSizeGb,
    'EncryptionAtRestProvider': obj.encryptionAtRestProvider,
    'ProjectId': obj.projectId,
    'Labels': obj.labels?.map(y => toJson_CfnClusterPropsLabels(y)),
    'MongoDBMajorVersion': obj.mongoDbMajorVersion,
    'Name': obj.name,
    'NumShards': obj.numShards,
    'Paused': obj.paused,
    'PitEnabled': obj.pitEnabled,
    'ProviderBackupEnabled': obj.providerBackupEnabled,
    'ProviderSettings': toJson_CfnClusterPropsProviderSettings(obj.providerSettings),
    'ReplicationFactor': obj.replicationFactor,
    'ReplicationSpecs': obj.replicationSpecs?.map(y => toJson_ReplicationSpec(y)),
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
   * @schema apiKeyDefinition#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema apiKeyDefinition#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * Converts an object of type 'ApiKeyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKeyDefinition(obj: ApiKeyDefinition | undefined): Record<string, any> | undefined {
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
 * @schema autoScaling
 */
export interface AutoScaling {
  /**
   * @schema autoScaling#DiskGBEnabled
   */
  readonly diskGbEnabled?: boolean;

  /**
   * @schema autoScaling#Compute
   */
  readonly compute?: Compute;

}

/**
 * Converts an object of type 'AutoScaling' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScaling(obj: AutoScaling | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiskGBEnabled': obj.diskGbEnabled,
    'Compute': toJson_Compute(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnClusterPropsBiConnector
 */
export interface CfnClusterPropsBiConnector {
  /**
   * @schema CfnClusterPropsBiConnector#ReadPreference
   */
  readonly readPreference?: string;

  /**
   * @schema CfnClusterPropsBiConnector#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'CfnClusterPropsBiConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterPropsBiConnector(obj: CfnClusterPropsBiConnector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadPreference': obj.readPreference,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema connectionStrings
 */
export interface ConnectionStrings {
  /**
   * @schema connectionStrings#Standard
   */
  readonly standard?: string;

  /**
   * @schema connectionStrings#StandardSrv
   */
  readonly standardSrv?: string;

  /**
   * @schema connectionStrings#Private
   */
  readonly private?: string;

  /**
   * @schema connectionStrings#PrivateSrv
   */
  readonly privateSrv?: string;

}

/**
 * Converts an object of type 'ConnectionStrings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectionStrings(obj: ConnectionStrings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Standard': obj.standard,
    'StandardSrv': obj.standardSrv,
    'Private': obj.private,
    'PrivateSrv': obj.privateSrv,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set the Encryption at Rest parameter.
 *
 * @schema CfnClusterPropsEncryptionAtRestProvider
 */
export enum CfnClusterPropsEncryptionAtRestProvider {
  /** AWS */
  AWS = 'AWS',
  /** GCP */
  GCP = 'GCP',
  /** AZURE */
  AZURE = 'AZURE',
  /** NONE */
  NONE = 'NONE',
}

/**
 * @schema CfnClusterPropsLabels
 */
export interface CfnClusterPropsLabels {
  /**
   * @schema CfnClusterPropsLabels#Key
   */
  readonly key?: string;

  /**
   * @schema CfnClusterPropsLabels#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CfnClusterPropsLabels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterPropsLabels(obj: CfnClusterPropsLabels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnClusterPropsProviderSettings
 */
export interface CfnClusterPropsProviderSettings {
  /**
   * @schema CfnClusterPropsProviderSettings#AutoScaling
   */
  readonly autoScaling?: AutoScaling;

  /**
   * @schema CfnClusterPropsProviderSettings#BackingProviderName
   */
  readonly backingProviderName?: string;

  /**
   * @schema CfnClusterPropsProviderSettings#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema CfnClusterPropsProviderSettings#DiskIOPS
   */
  readonly diskIops?: number;

  /**
   * @schema CfnClusterPropsProviderSettings#EncryptEBSVolume
   */
  readonly encryptEbsVolume?: boolean;

  /**
   * @schema CfnClusterPropsProviderSettings#InstanceSizeName
   */
  readonly instanceSizeName?: string;

  /**
   * @schema CfnClusterPropsProviderSettings#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema CfnClusterPropsProviderSettings#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * Converts an object of type 'CfnClusterPropsProviderSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterPropsProviderSettings(obj: CfnClusterPropsProviderSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScaling': toJson_AutoScaling(obj.autoScaling),
    'BackingProviderName': obj.backingProviderName,
    'ProviderName': obj.providerName,
    'DiskIOPS': obj.diskIops,
    'EncryptEBSVolume': obj.encryptEbsVolume,
    'InstanceSizeName': obj.instanceSizeName,
    'RegionName': obj.regionName,
    'VolumeType': obj.volumeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema replicationSpec
 */
export interface ReplicationSpec {
  /**
   * @schema replicationSpec#ID
   */
  readonly id?: string;

  /**
   * @schema replicationSpec#NumShards
   */
  readonly numShards?: number;

  /**
   * @schema replicationSpec#RegionsConfig
   */
  readonly regionsConfig?: RegionsConfig[];

  /**
   * @schema replicationSpec#ZoneName
   */
  readonly zoneName?: string;

}

/**
 * Converts an object of type 'ReplicationSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ReplicationSpec(obj: ReplicationSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ID': obj.id,
    'NumShards': obj.numShards,
    'RegionsConfig': obj.regionsConfig?.map(y => toJson_RegionsConfig(y)),
    'ZoneName': obj.zoneName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema compute
 */
export interface Compute {
  /**
   * @schema compute#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema compute#ScaleDownEnabled
   */
  readonly scaleDownEnabled?: boolean;

  /**
   * @schema compute#MinInstanceSize
   */
  readonly minInstanceSize?: string;

  /**
   * @schema compute#MaxInstanceSize
   */
  readonly maxInstanceSize?: string;

}

/**
 * Converts an object of type 'Compute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Compute(obj: Compute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'ScaleDownEnabled': obj.scaleDownEnabled,
    'MinInstanceSize': obj.minInstanceSize,
    'MaxInstanceSize': obj.maxInstanceSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema regionsConfig
 */
export interface RegionsConfig {
  /**
   * @schema regionsConfig#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema regionsConfig#AnalyticsNodes
   */
  readonly analyticsNodes?: number;

  /**
   * @schema regionsConfig#ElectableNodes
   */
  readonly electableNodes?: number;

  /**
   * @schema regionsConfig#Priority
   */
  readonly priority?: number;

  /**
   * @schema regionsConfig#ReadOnlyNodes
   */
  readonly readOnlyNodes?: number;

}

/**
 * Converts an object of type 'RegionsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RegionsConfig(obj: RegionsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionName': obj.regionName,
    'AnalyticsNodes': obj.analyticsNodes,
    'ElectableNodes': obj.electableNodes,
    'Priority': obj.priority,
    'ReadOnlyNodes': obj.readOnlyNodes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `MongoDB::Atlas::Cluster`
 *
 * @cloudformationResource MongoDB::Atlas::Cluster
 * @stability external
 * @link http://unknown-url
 */
export class CfnCluster extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::Cluster";

  /**
   * Resource props.
   */
  public readonly props: CfnClusterProps;

  /**
   * Attribute `MongoDB::Atlas::Cluster.StateName`
   * @link http://unknown-url
   */
  public readonly attrStateName: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.SrvAddress`
   * @link http://unknown-url
   */
  public readonly attrSrvAddress: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`
   * @link http://unknown-url
   */
  public readonly attrMongoDBVersion: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.MongoURI`
   * @link http://unknown-url
   */
  public readonly attrMongoURI: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.MongoURIUpdated`
   * @link http://unknown-url
   */
  public readonly attrMongoURIUpdated: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.MongoURIWithOptions`
   * @link http://unknown-url
   */
  public readonly attrMongoURIWithOptions: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.Id`
   * @link http://unknown-url
   */
  public readonly attrId: string;

  /**
   * Create a new `MongoDB::Atlas::Cluster`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnClusterProps) {
    super(scope, id, { type: CfnCluster.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnClusterProps(props)! });

    this.props = props;

    this.attrStateName = cdk.Token.asString(this.getAtt('StateName'));
    this.attrSrvAddress = cdk.Token.asString(this.getAtt('SrvAddress'));
    this.attrMongoDBVersion = cdk.Token.asString(this.getAtt('MongoDBVersion'));
    this.attrMongoURI = cdk.Token.asString(this.getAtt('MongoURI'));
    this.attrMongoURIUpdated = cdk.Token.asString(this.getAtt('MongoURIUpdated'));
    this.attrMongoURIWithOptions = cdk.Token.asString(this.getAtt('MongoURIWithOptions'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}