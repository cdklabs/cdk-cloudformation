// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Schema for Module Fragment of type JFrog::Xray::EC2Instance::MODULE
 *
 * @schema CfnEc2InstanceModuleProps
 */
export interface CfnEc2InstanceModuleProps {
  /**
   * @schema CfnEc2InstanceModuleProps#Parameters
   */
  readonly parameters?: CfnEc2InstanceModulePropsParameters;

  /**
   * @schema CfnEc2InstanceModuleProps#Resources
   */
  readonly resources?: CfnEc2InstanceModulePropsResources;

}

/**
 * Converts an object of type 'CfnEc2InstanceModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModuleProps(obj: CfnEc2InstanceModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': toJson_CfnEc2InstanceModulePropsParameters(obj.parameters),
    'Resources': toJson_CfnEc2InstanceModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParameters
 */
export interface CfnEc2InstanceModulePropsParameters {
  /**
   * Logical Id of the MODULE
   *
   * @schema CfnEc2InstanceModulePropsParameters#LogicalId
   */
  readonly logicalId?: CfnEc2InstanceModulePropsParametersLogicalId;

  /**
   * ID of the private subnet in Availability Zone 2 of your existing VPC (e.g., subnet-z0376dab).
   *
   * @schema CfnEc2InstanceModulePropsParameters#PrivateSubnet2Id
   */
  readonly privateSubnet2Id?: CfnEc2InstanceModulePropsParametersPrivateSubnet2Id;

  /**
   * ID of the private subnet in Availability Zone 1 of your existing VPC (e.g., subnet-z0376dab).
   *
   * @schema CfnEc2InstanceModulePropsParameters#PrivateSubnet1Id
   */
  readonly privateSubnet1Id?: CfnEc2InstanceModulePropsParametersPrivateSubnet1Id;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#KeyPairName
   */
  readonly keyPairName?: CfnEc2InstanceModulePropsParametersKeyPairName;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#MinScalingNodes
   */
  readonly minScalingNodes?: CfnEc2InstanceModulePropsParametersMinScalingNodes;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#MaxScalingNodes
   */
  readonly maxScalingNodes?: CfnEc2InstanceModulePropsParametersMaxScalingNodes;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#DeploymentTag
   */
  readonly deploymentTag?: CfnEc2InstanceModulePropsParametersDeploymentTag;

  /**
   * JFrog Artifactory product you want to install into an AMI.
   *
   * @schema CfnEc2InstanceModulePropsParameters#ArtifactoryProduct
   */
  readonly artifactoryProduct?: CfnEc2InstanceModulePropsParametersArtifactoryProduct;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#QsS3BucketName
   */
  readonly qsS3BucketName?: CfnEc2InstanceModulePropsParametersQsS3BucketName;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#QsS3KeyPrefix
   */
  readonly qsS3KeyPrefix?: CfnEc2InstanceModulePropsParametersQsS3KeyPrefix;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#QsS3Uri
   */
  readonly qsS3Uri?: CfnEc2InstanceModulePropsParametersQsS3Uri;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#DatabaseDriver
   */
  readonly databaseDriver?: CfnEc2InstanceModulePropsParametersDatabaseDriver;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#DatabaseType
   */
  readonly databaseType?: CfnEc2InstanceModulePropsParametersDatabaseType;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#DatabaseUser
   */
  readonly databaseUser?: CfnEc2InstanceModulePropsParametersDatabaseUser;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#DatabasePassword
   */
  readonly databasePassword?: CfnEc2InstanceModulePropsParametersDatabasePassword;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#MasterKey
   */
  readonly masterKey?: CfnEc2InstanceModulePropsParametersMasterKey;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#ExtraJavaOptions
   */
  readonly extraJavaOptions?: CfnEc2InstanceModulePropsParametersExtraJavaOptions;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#SecurityGroups
   */
  readonly securityGroups?: CfnEc2InstanceModulePropsParametersSecurityGroups;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayHostProfile
   */
  readonly xrayHostProfile?: CfnEc2InstanceModulePropsParametersXrayHostProfile;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayHostRole
   */
  readonly xrayHostRole?: CfnEc2InstanceModulePropsParametersXrayHostRole;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayInstanceType
   */
  readonly xrayInstanceType?: CfnEc2InstanceModulePropsParametersXrayInstanceType;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#JfrogInternalUrl
   */
  readonly jfrogInternalUrl?: CfnEc2InstanceModulePropsParametersJfrogInternalUrl;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#VolumeSize
   */
  readonly volumeSize?: CfnEc2InstanceModulePropsParametersVolumeSize;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayDatabaseUser
   */
  readonly xrayDatabaseUser?: CfnEc2InstanceModulePropsParametersXrayDatabaseUser;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayDatabasePassword
   */
  readonly xrayDatabasePassword?: CfnEc2InstanceModulePropsParametersXrayDatabasePassword;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayMasterDatabaseUrl
   */
  readonly xrayMasterDatabaseUrl?: CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayDatabaseUrl
   */
  readonly xrayDatabaseUrl?: CfnEc2InstanceModulePropsParametersXrayDatabaseUrl;

  /**
   * @schema CfnEc2InstanceModulePropsParameters#XrayVersion
   */
  readonly xrayVersion?: CfnEc2InstanceModulePropsParametersXrayVersion;

  /**
   * Directory to store Artifactory data. Can be used to store data (via symlink) in detachable volume
   *
   * @schema CfnEc2InstanceModulePropsParameters#UserDataDirectory
   */
  readonly userDataDirectory?: CfnEc2InstanceModulePropsParametersUserDataDirectory;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParameters(obj: CfnEc2InstanceModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogicalId': toJson_CfnEc2InstanceModulePropsParametersLogicalId(obj.logicalId),
    'PrivateSubnet2Id': toJson_CfnEc2InstanceModulePropsParametersPrivateSubnet2Id(obj.privateSubnet2Id),
    'PrivateSubnet1Id': toJson_CfnEc2InstanceModulePropsParametersPrivateSubnet1Id(obj.privateSubnet1Id),
    'KeyPairName': toJson_CfnEc2InstanceModulePropsParametersKeyPairName(obj.keyPairName),
    'MinScalingNodes': toJson_CfnEc2InstanceModulePropsParametersMinScalingNodes(obj.minScalingNodes),
    'MaxScalingNodes': toJson_CfnEc2InstanceModulePropsParametersMaxScalingNodes(obj.maxScalingNodes),
    'DeploymentTag': toJson_CfnEc2InstanceModulePropsParametersDeploymentTag(obj.deploymentTag),
    'ArtifactoryProduct': toJson_CfnEc2InstanceModulePropsParametersArtifactoryProduct(obj.artifactoryProduct),
    'QsS3BucketName': toJson_CfnEc2InstanceModulePropsParametersQsS3BucketName(obj.qsS3BucketName),
    'QsS3KeyPrefix': toJson_CfnEc2InstanceModulePropsParametersQsS3KeyPrefix(obj.qsS3KeyPrefix),
    'QsS3Uri': toJson_CfnEc2InstanceModulePropsParametersQsS3Uri(obj.qsS3Uri),
    'DatabaseDriver': toJson_CfnEc2InstanceModulePropsParametersDatabaseDriver(obj.databaseDriver),
    'DatabaseType': toJson_CfnEc2InstanceModulePropsParametersDatabaseType(obj.databaseType),
    'DatabaseUser': toJson_CfnEc2InstanceModulePropsParametersDatabaseUser(obj.databaseUser),
    'DatabasePassword': toJson_CfnEc2InstanceModulePropsParametersDatabasePassword(obj.databasePassword),
    'MasterKey': toJson_CfnEc2InstanceModulePropsParametersMasterKey(obj.masterKey),
    'ExtraJavaOptions': toJson_CfnEc2InstanceModulePropsParametersExtraJavaOptions(obj.extraJavaOptions),
    'SecurityGroups': toJson_CfnEc2InstanceModulePropsParametersSecurityGroups(obj.securityGroups),
    'XrayHostProfile': toJson_CfnEc2InstanceModulePropsParametersXrayHostProfile(obj.xrayHostProfile),
    'XrayHostRole': toJson_CfnEc2InstanceModulePropsParametersXrayHostRole(obj.xrayHostRole),
    'XrayInstanceType': toJson_CfnEc2InstanceModulePropsParametersXrayInstanceType(obj.xrayInstanceType),
    'JfrogInternalUrl': toJson_CfnEc2InstanceModulePropsParametersJfrogInternalUrl(obj.jfrogInternalUrl),
    'VolumeSize': toJson_CfnEc2InstanceModulePropsParametersVolumeSize(obj.volumeSize),
    'XrayDatabaseUser': toJson_CfnEc2InstanceModulePropsParametersXrayDatabaseUser(obj.xrayDatabaseUser),
    'XrayDatabasePassword': toJson_CfnEc2InstanceModulePropsParametersXrayDatabasePassword(obj.xrayDatabasePassword),
    'XrayMasterDatabaseUrl': toJson_CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl(obj.xrayMasterDatabaseUrl),
    'XrayDatabaseUrl': toJson_CfnEc2InstanceModulePropsParametersXrayDatabaseUrl(obj.xrayDatabaseUrl),
    'XrayVersion': toJson_CfnEc2InstanceModulePropsParametersXrayVersion(obj.xrayVersion),
    'UserDataDirectory': toJson_CfnEc2InstanceModulePropsParametersUserDataDirectory(obj.userDataDirectory),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsResources
 */
export interface CfnEc2InstanceModulePropsResources {
  /**
   * @schema CfnEc2InstanceModulePropsResources#XrayScalingGroup
   */
  readonly xrayScalingGroup?: CfnEc2InstanceModulePropsResourcesXrayScalingGroup;

  /**
   * @schema CfnEc2InstanceModulePropsResources#XrayLaunchConfiguration
   */
  readonly xrayLaunchConfiguration?: CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsResources(obj: CfnEc2InstanceModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XrayScalingGroup': toJson_CfnEc2InstanceModulePropsResourcesXrayScalingGroup(obj.xrayScalingGroup),
    'XrayLaunchConfiguration': toJson_CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration(obj.xrayLaunchConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Logical Id of the MODULE
 *
 * @schema CfnEc2InstanceModulePropsParametersLogicalId
 */
export interface CfnEc2InstanceModulePropsParametersLogicalId {
  /**
   * @schema CfnEc2InstanceModulePropsParametersLogicalId#Type
   */
  readonly type: string;

  /**
   * @schema CfnEc2InstanceModulePropsParametersLogicalId#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersLogicalId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersLogicalId(obj: CfnEc2InstanceModulePropsParametersLogicalId | undefined): Record<string, any> | undefined {
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
 * ID of the private subnet in Availability Zone 2 of your existing VPC (e.g., subnet-z0376dab).
 *
 * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet2Id
 */
export interface CfnEc2InstanceModulePropsParametersPrivateSubnet2Id {
  /**
   * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet2Id#Type
   */
  readonly type: string;

  /**
   * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet2Id#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersPrivateSubnet2Id' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersPrivateSubnet2Id(obj: CfnEc2InstanceModulePropsParametersPrivateSubnet2Id | undefined): Record<string, any> | undefined {
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
 * ID of the private subnet in Availability Zone 1 of your existing VPC (e.g., subnet-z0376dab).
 *
 * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet1Id
 */
export interface CfnEc2InstanceModulePropsParametersPrivateSubnet1Id {
  /**
   * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet1Id#Type
   */
  readonly type: string;

  /**
   * @schema CfnEc2InstanceModulePropsParametersPrivateSubnet1Id#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersPrivateSubnet1Id' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersPrivateSubnet1Id(obj: CfnEc2InstanceModulePropsParametersPrivateSubnet1Id | undefined): Record<string, any> | undefined {
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
 * @schema CfnEc2InstanceModulePropsParametersKeyPairName
 */
export interface CfnEc2InstanceModulePropsParametersKeyPairName {
  /**
   * @schema CfnEc2InstanceModulePropsParametersKeyPairName#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersKeyPairName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersKeyPairName(obj: CfnEc2InstanceModulePropsParametersKeyPairName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersMinScalingNodes
 */
export interface CfnEc2InstanceModulePropsParametersMinScalingNodes {
  /**
   * @schema CfnEc2InstanceModulePropsParametersMinScalingNodes#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersMinScalingNodes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersMinScalingNodes(obj: CfnEc2InstanceModulePropsParametersMinScalingNodes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersMaxScalingNodes
 */
export interface CfnEc2InstanceModulePropsParametersMaxScalingNodes {
  /**
   * @schema CfnEc2InstanceModulePropsParametersMaxScalingNodes#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersMaxScalingNodes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersMaxScalingNodes(obj: CfnEc2InstanceModulePropsParametersMaxScalingNodes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersDeploymentTag
 */
export interface CfnEc2InstanceModulePropsParametersDeploymentTag {
  /**
   * @schema CfnEc2InstanceModulePropsParametersDeploymentTag#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersDeploymentTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersDeploymentTag(obj: CfnEc2InstanceModulePropsParametersDeploymentTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * JFrog Artifactory product you want to install into an AMI.
 *
 * @schema CfnEc2InstanceModulePropsParametersArtifactoryProduct
 */
export interface CfnEc2InstanceModulePropsParametersArtifactoryProduct {
  /**
   * @schema CfnEc2InstanceModulePropsParametersArtifactoryProduct#Type
   */
  readonly type: string;

  /**
   * @schema CfnEc2InstanceModulePropsParametersArtifactoryProduct#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersArtifactoryProduct' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersArtifactoryProduct(obj: CfnEc2InstanceModulePropsParametersArtifactoryProduct | undefined): Record<string, any> | undefined {
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
 * @schema CfnEc2InstanceModulePropsParametersQsS3BucketName
 */
export interface CfnEc2InstanceModulePropsParametersQsS3BucketName {
  /**
   * @schema CfnEc2InstanceModulePropsParametersQsS3BucketName#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersQsS3BucketName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersQsS3BucketName(obj: CfnEc2InstanceModulePropsParametersQsS3BucketName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersQsS3KeyPrefix
 */
export interface CfnEc2InstanceModulePropsParametersQsS3KeyPrefix {
  /**
   * @schema CfnEc2InstanceModulePropsParametersQsS3KeyPrefix#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersQsS3KeyPrefix' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersQsS3KeyPrefix(obj: CfnEc2InstanceModulePropsParametersQsS3KeyPrefix | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersQsS3Uri
 */
export interface CfnEc2InstanceModulePropsParametersQsS3Uri {
  /**
   * @schema CfnEc2InstanceModulePropsParametersQsS3Uri#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersQsS3Uri' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersQsS3Uri(obj: CfnEc2InstanceModulePropsParametersQsS3Uri | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersDatabaseDriver
 */
export interface CfnEc2InstanceModulePropsParametersDatabaseDriver {
  /**
   * @schema CfnEc2InstanceModulePropsParametersDatabaseDriver#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersDatabaseDriver' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersDatabaseDriver(obj: CfnEc2InstanceModulePropsParametersDatabaseDriver | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersDatabaseType
 */
export interface CfnEc2InstanceModulePropsParametersDatabaseType {
  /**
   * @schema CfnEc2InstanceModulePropsParametersDatabaseType#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersDatabaseType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersDatabaseType(obj: CfnEc2InstanceModulePropsParametersDatabaseType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersDatabaseUser
 */
export interface CfnEc2InstanceModulePropsParametersDatabaseUser {
  /**
   * @schema CfnEc2InstanceModulePropsParametersDatabaseUser#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersDatabaseUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersDatabaseUser(obj: CfnEc2InstanceModulePropsParametersDatabaseUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersDatabasePassword
 */
export interface CfnEc2InstanceModulePropsParametersDatabasePassword {
  /**
   * @schema CfnEc2InstanceModulePropsParametersDatabasePassword#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersDatabasePassword' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersDatabasePassword(obj: CfnEc2InstanceModulePropsParametersDatabasePassword | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersMasterKey
 */
export interface CfnEc2InstanceModulePropsParametersMasterKey {
  /**
   * @schema CfnEc2InstanceModulePropsParametersMasterKey#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersMasterKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersMasterKey(obj: CfnEc2InstanceModulePropsParametersMasterKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersExtraJavaOptions
 */
export interface CfnEc2InstanceModulePropsParametersExtraJavaOptions {
  /**
   * @schema CfnEc2InstanceModulePropsParametersExtraJavaOptions#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersExtraJavaOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersExtraJavaOptions(obj: CfnEc2InstanceModulePropsParametersExtraJavaOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersSecurityGroups
 */
export interface CfnEc2InstanceModulePropsParametersSecurityGroups {
  /**
   * @schema CfnEc2InstanceModulePropsParametersSecurityGroups#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersSecurityGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersSecurityGroups(obj: CfnEc2InstanceModulePropsParametersSecurityGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayHostProfile
 */
export interface CfnEc2InstanceModulePropsParametersXrayHostProfile {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayHostProfile#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayHostProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayHostProfile(obj: CfnEc2InstanceModulePropsParametersXrayHostProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayHostRole
 */
export interface CfnEc2InstanceModulePropsParametersXrayHostRole {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayHostRole#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayHostRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayHostRole(obj: CfnEc2InstanceModulePropsParametersXrayHostRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayInstanceType
 */
export interface CfnEc2InstanceModulePropsParametersXrayInstanceType {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayInstanceType#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayInstanceType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayInstanceType(obj: CfnEc2InstanceModulePropsParametersXrayInstanceType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersJfrogInternalUrl
 */
export interface CfnEc2InstanceModulePropsParametersJfrogInternalUrl {
  /**
   * @schema CfnEc2InstanceModulePropsParametersJfrogInternalUrl#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersJfrogInternalUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersJfrogInternalUrl(obj: CfnEc2InstanceModulePropsParametersJfrogInternalUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersVolumeSize
 */
export interface CfnEc2InstanceModulePropsParametersVolumeSize {
  /**
   * @schema CfnEc2InstanceModulePropsParametersVolumeSize#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersVolumeSize' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersVolumeSize(obj: CfnEc2InstanceModulePropsParametersVolumeSize | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayDatabaseUser
 */
export interface CfnEc2InstanceModulePropsParametersXrayDatabaseUser {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayDatabaseUser#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayDatabaseUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayDatabaseUser(obj: CfnEc2InstanceModulePropsParametersXrayDatabaseUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayDatabasePassword
 */
export interface CfnEc2InstanceModulePropsParametersXrayDatabasePassword {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayDatabasePassword#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayDatabasePassword' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayDatabasePassword(obj: CfnEc2InstanceModulePropsParametersXrayDatabasePassword | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl
 */
export interface CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl(obj: CfnEc2InstanceModulePropsParametersXrayMasterDatabaseUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayDatabaseUrl
 */
export interface CfnEc2InstanceModulePropsParametersXrayDatabaseUrl {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayDatabaseUrl#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayDatabaseUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayDatabaseUrl(obj: CfnEc2InstanceModulePropsParametersXrayDatabaseUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnEc2InstanceModulePropsParametersXrayVersion
 */
export interface CfnEc2InstanceModulePropsParametersXrayVersion {
  /**
   * @schema CfnEc2InstanceModulePropsParametersXrayVersion#Type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersXrayVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersXrayVersion(obj: CfnEc2InstanceModulePropsParametersXrayVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Directory to store Artifactory data. Can be used to store data (via symlink) in detachable volume
 *
 * @schema CfnEc2InstanceModulePropsParametersUserDataDirectory
 */
export interface CfnEc2InstanceModulePropsParametersUserDataDirectory {
  /**
   * @schema CfnEc2InstanceModulePropsParametersUserDataDirectory#Type
   */
  readonly type: string;

  /**
   * @schema CfnEc2InstanceModulePropsParametersUserDataDirectory#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsParametersUserDataDirectory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsParametersUserDataDirectory(obj: CfnEc2InstanceModulePropsParametersUserDataDirectory | undefined): Record<string, any> | undefined {
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
 * @schema CfnEc2InstanceModulePropsResourcesXrayScalingGroup
 */
export interface CfnEc2InstanceModulePropsResourcesXrayScalingGroup {
  /**
   * @schema CfnEc2InstanceModulePropsResourcesXrayScalingGroup#Type
   */
  readonly type?: string;

  /**
   * @schema CfnEc2InstanceModulePropsResourcesXrayScalingGroup#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsResourcesXrayScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsResourcesXrayScalingGroup(obj: CfnEc2InstanceModulePropsResourcesXrayScalingGroup | undefined): Record<string, any> | undefined {
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
 * @schema CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration
 */
export interface CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration {
  /**
   * @schema CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration(obj: CfnEc2InstanceModulePropsResourcesXrayLaunchConfiguration | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `JFrog::Xray::EC2Instance::MODULE`
 *
 * @cloudformationResource JFrog::Xray::EC2Instance::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnEc2InstanceModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "JFrog::Xray::EC2Instance::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnEc2InstanceModuleProps;


  /**
   * Create a new `JFrog::Xray::EC2Instance::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnEc2InstanceModuleProps) {
    super(scope, id, { type: CfnEc2InstanceModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnEc2InstanceModuleProps(props)! });

    this.props = props;

  }
}