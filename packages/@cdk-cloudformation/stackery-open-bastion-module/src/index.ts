// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Schema for Module Fragment of type Stackery::Open::Bastion::MODULE
 *
 * @schema CfnModuleProps
 */
export interface CfnModuleProps {
  /**
   * @schema CfnModuleProps#Parameters
   */
  readonly parameters?: CfnModulePropsParameters;

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
    'Parameters': toJson_CfnModulePropsParameters(obj.parameters),
    'Resources': toJson_CfnModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnModulePropsParameters
 */
export interface CfnModulePropsParameters {
  /**
   * VPC to run bastion server in
   *
   * @schema CfnModulePropsParameters#VPCId
   */
  readonly vpcId?: CfnModulePropsParametersVpcId;

  /**
   * Subnets to pick from to run a bastion server in
   *
   * @schema CfnModulePropsParameters#VPCSubnets
   */
  readonly vpcSubnets?: CfnModulePropsParametersVpcSubnets;

  /**
   * EC2 instance class to provision
   *
   * @schema CfnModulePropsParameters#InstanceClass
   */
  readonly instanceClass?: CfnModulePropsParametersInstanceClass;

}

/**
 * Converts an object of type 'CfnModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParameters(obj: CfnModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VPCId': toJson_CfnModulePropsParametersVpcId(obj.vpcId),
    'VPCSubnets': toJson_CfnModulePropsParametersVpcSubnets(obj.vpcSubnets),
    'InstanceClass': toJson_CfnModulePropsParametersInstanceClass(obj.instanceClass),
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
   * @schema CfnModulePropsResources#AutoScalingGroup
   */
  readonly autoScalingGroup?: CfnModulePropsResourcesAutoScalingGroup;

  /**
   * @schema CfnModulePropsResources#IAMRole
   */
  readonly iamRole?: CfnModulePropsResourcesIamRole;

  /**
   * @schema CfnModulePropsResources#IAMInstanceProfile
   */
  readonly iamInstanceProfile?: CfnModulePropsResourcesIamInstanceProfile;

  /**
   * @schema CfnModulePropsResources#InstancesSecurityGroup
   */
  readonly instancesSecurityGroup?: CfnModulePropsResourcesInstancesSecurityGroup;

  /**
   * @schema CfnModulePropsResources#LaunchConfiguration
   */
  readonly launchConfiguration?: CfnModulePropsResourcesLaunchConfiguration;

  /**
   * @schema CfnModulePropsResources#SSMAgentAutoUpdate
   */
  readonly ssmAgentAutoUpdate?: CfnModulePropsResourcesSsmAgentAutoUpdate;

  /**
   * @schema CfnModulePropsResources#CloudWatchAgentUpdateAndStart
   */
  readonly cloudWatchAgentUpdateAndStart?: CfnModulePropsResourcesCloudWatchAgentUpdateAndStart;

  /**
   * @schema CfnModulePropsResources#CloudWatchAgentAutoUpdate
   */
  readonly cloudWatchAgentAutoUpdate?: CfnModulePropsResourcesCloudWatchAgentAutoUpdate;

}

/**
 * Converts an object of type 'CfnModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResources(obj: CfnModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroup': toJson_CfnModulePropsResourcesAutoScalingGroup(obj.autoScalingGroup),
    'IAMRole': toJson_CfnModulePropsResourcesIamRole(obj.iamRole),
    'IAMInstanceProfile': toJson_CfnModulePropsResourcesIamInstanceProfile(obj.iamInstanceProfile),
    'InstancesSecurityGroup': toJson_CfnModulePropsResourcesInstancesSecurityGroup(obj.instancesSecurityGroup),
    'LaunchConfiguration': toJson_CfnModulePropsResourcesLaunchConfiguration(obj.launchConfiguration),
    'SSMAgentAutoUpdate': toJson_CfnModulePropsResourcesSsmAgentAutoUpdate(obj.ssmAgentAutoUpdate),
    'CloudWatchAgentUpdateAndStart': toJson_CfnModulePropsResourcesCloudWatchAgentUpdateAndStart(obj.cloudWatchAgentUpdateAndStart),
    'CloudWatchAgentAutoUpdate': toJson_CfnModulePropsResourcesCloudWatchAgentAutoUpdate(obj.cloudWatchAgentAutoUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * VPC to run bastion server in
 *
 * @schema CfnModulePropsParametersVpcId
 */
export interface CfnModulePropsParametersVpcId {
  /**
   * @schema CfnModulePropsParametersVpcId#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersVpcId#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersVpcId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersVpcId(obj: CfnModulePropsParametersVpcId | undefined): Record<string, any> | undefined {
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
 * Subnets to pick from to run a bastion server in
 *
 * @schema CfnModulePropsParametersVpcSubnets
 */
export interface CfnModulePropsParametersVpcSubnets {
  /**
   * @schema CfnModulePropsParametersVpcSubnets#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersVpcSubnets#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersVpcSubnets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersVpcSubnets(obj: CfnModulePropsParametersVpcSubnets | undefined): Record<string, any> | undefined {
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
 * EC2 instance class to provision
 *
 * @schema CfnModulePropsParametersInstanceClass
 */
export interface CfnModulePropsParametersInstanceClass {
  /**
   * @schema CfnModulePropsParametersInstanceClass#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersInstanceClass#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersInstanceClass' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersInstanceClass(obj: CfnModulePropsParametersInstanceClass | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesAutoScalingGroup
 */
export interface CfnModulePropsResourcesAutoScalingGroup {
  /**
   * @schema CfnModulePropsResourcesAutoScalingGroup#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesAutoScalingGroup#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesAutoScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesAutoScalingGroup(obj: CfnModulePropsResourcesAutoScalingGroup | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesIamRole
 */
export interface CfnModulePropsResourcesIamRole {
  /**
   * @schema CfnModulePropsResourcesIamRole#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesIamRole#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesIamRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesIamRole(obj: CfnModulePropsResourcesIamRole | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesIamInstanceProfile
 */
export interface CfnModulePropsResourcesIamInstanceProfile {
  /**
   * @schema CfnModulePropsResourcesIamInstanceProfile#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesIamInstanceProfile#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesIamInstanceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesIamInstanceProfile(obj: CfnModulePropsResourcesIamInstanceProfile | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesInstancesSecurityGroup
 */
export interface CfnModulePropsResourcesInstancesSecurityGroup {
  /**
   * @schema CfnModulePropsResourcesInstancesSecurityGroup#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesInstancesSecurityGroup#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesInstancesSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesInstancesSecurityGroup(obj: CfnModulePropsResourcesInstancesSecurityGroup | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesLaunchConfiguration
 */
export interface CfnModulePropsResourcesLaunchConfiguration {
  /**
   * @schema CfnModulePropsResourcesLaunchConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesLaunchConfiguration#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesLaunchConfiguration(obj: CfnModulePropsResourcesLaunchConfiguration | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesSsmAgentAutoUpdate
 */
export interface CfnModulePropsResourcesSsmAgentAutoUpdate {
  /**
   * @schema CfnModulePropsResourcesSsmAgentAutoUpdate#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesSsmAgentAutoUpdate#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesSsmAgentAutoUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesSsmAgentAutoUpdate(obj: CfnModulePropsResourcesSsmAgentAutoUpdate | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesCloudWatchAgentUpdateAndStart
 */
export interface CfnModulePropsResourcesCloudWatchAgentUpdateAndStart {
  /**
   * @schema CfnModulePropsResourcesCloudWatchAgentUpdateAndStart#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesCloudWatchAgentUpdateAndStart#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesCloudWatchAgentUpdateAndStart' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesCloudWatchAgentUpdateAndStart(obj: CfnModulePropsResourcesCloudWatchAgentUpdateAndStart | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesCloudWatchAgentAutoUpdate
 */
export interface CfnModulePropsResourcesCloudWatchAgentAutoUpdate {
  /**
   * @schema CfnModulePropsResourcesCloudWatchAgentAutoUpdate#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesCloudWatchAgentAutoUpdate#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesCloudWatchAgentAutoUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesCloudWatchAgentAutoUpdate(obj: CfnModulePropsResourcesCloudWatchAgentAutoUpdate | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `Stackery::Open::Bastion::MODULE`
 *
 * @cloudformationResource Stackery::Open::Bastion::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Stackery::Open::Bastion::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnModuleProps;


  /**
   * Create a new `Stackery::Open::Bastion::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnModuleProps) {
    super(scope, id, { type: CfnModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnModuleProps(props)! });

    this.props = props;

  }
}