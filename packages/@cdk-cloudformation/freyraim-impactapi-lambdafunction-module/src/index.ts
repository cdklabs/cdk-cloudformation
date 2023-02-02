// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Schema for Module Fragment of type FreyrAIM::ImpactApi::LambdaFunction::MODULE
 *
 * @schema CfnLambdaFunctionModuleProps
 */
export interface CfnLambdaFunctionModuleProps {
  /**
   * @schema CfnLambdaFunctionModuleProps#Parameters
   */
  readonly parameters?: CfnLambdaFunctionModulePropsParameters;

  /**
   * @schema CfnLambdaFunctionModuleProps#Resources
   */
  readonly resources?: CfnLambdaFunctionModulePropsResources;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModuleProps(obj: CfnLambdaFunctionModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': toJson_CfnLambdaFunctionModulePropsParameters(obj.parameters),
    'Resources': toJson_CfnLambdaFunctionModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnLambdaFunctionModulePropsParameters
 */
export interface CfnLambdaFunctionModulePropsParameters {
  /**
   * The lambda function`s name
   *
   * @schema CfnLambdaFunctionModulePropsParameters#FunctionName
   */
  readonly functionName?: CfnLambdaFunctionModulePropsParametersFunctionName;

  /**
   * The endpoint name
   *
   * @schema CfnLambdaFunctionModulePropsParameters#EndpointName
   */
  readonly endpointName?: CfnLambdaFunctionModulePropsParametersEndpointName;

  /**
   * The image`s name
   *
   * @schema CfnLambdaFunctionModulePropsParameters#ImageName
   */
  readonly imageName?: CfnLambdaFunctionModulePropsParametersImageName;

  /**
   * The ELB logs bucket name
   *
   * @schema CfnLambdaFunctionModulePropsParameters#ELBBucketName
   */
  readonly elbBucketName?: CfnLambdaFunctionModulePropsParametersElbBucketName;

  /**
   * The ImageDigest
   *
   * @schema CfnLambdaFunctionModulePropsParameters#ImageDigest
   */
  readonly imageDigest?: CfnLambdaFunctionModulePropsParametersImageDigest;

  /**
   * The environment name
   *
   * @schema CfnLambdaFunctionModulePropsParameters#EnvName
   */
  readonly envName?: CfnLambdaFunctionModulePropsParametersEnvName;

  /**
   * Vpc-ID
   *
   * @schema CfnLambdaFunctionModulePropsParameters#VpcID
   */
  readonly vpcId?: CfnLambdaFunctionModulePropsParametersVpcId;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParameters(obj: CfnLambdaFunctionModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': toJson_CfnLambdaFunctionModulePropsParametersFunctionName(obj.functionName),
    'EndpointName': toJson_CfnLambdaFunctionModulePropsParametersEndpointName(obj.endpointName),
    'ImageName': toJson_CfnLambdaFunctionModulePropsParametersImageName(obj.imageName),
    'ELBBucketName': toJson_CfnLambdaFunctionModulePropsParametersElbBucketName(obj.elbBucketName),
    'ImageDigest': toJson_CfnLambdaFunctionModulePropsParametersImageDigest(obj.imageDigest),
    'EnvName': toJson_CfnLambdaFunctionModulePropsParametersEnvName(obj.envName),
    'VpcID': toJson_CfnLambdaFunctionModulePropsParametersVpcId(obj.vpcId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnLambdaFunctionModulePropsResources
 */
export interface CfnLambdaFunctionModulePropsResources {
  /**
   * @schema CfnLambdaFunctionModulePropsResources#ImpactClassifyEC2Instance
   */
  readonly impactClassifyEc2Instance?: CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#TargetGroup1
   */
  readonly targetGroup1?: CfnLambdaFunctionModulePropsResourcesTargetGroup1;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#TargetGroup2
   */
  readonly targetGroup2?: CfnLambdaFunctionModulePropsResourcesTargetGroup2;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#TargetGroup3
   */
  readonly targetGroup3?: CfnLambdaFunctionModulePropsResourcesTargetGroup3;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#LoadBalancer1
   */
  readonly loadBalancer1?: CfnLambdaFunctionModulePropsResourcesLoadBalancer1;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#Listener1
   */
  readonly listener1?: CfnLambdaFunctionModulePropsResourcesListener1;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#Listener2
   */
  readonly listener2?: CfnLambdaFunctionModulePropsResourcesListener2;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#Listener3
   */
  readonly listener3?: CfnLambdaFunctionModulePropsResourcesListener3;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ListenerRule1
   */
  readonly listenerRule1?: CfnLambdaFunctionModulePropsResourcesListenerRule1;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ListenerRule2
   */
  readonly listenerRule2?: CfnLambdaFunctionModulePropsResourcesListenerRule2;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ListenerRule3
   */
  readonly listenerRule3?: CfnLambdaFunctionModulePropsResourcesListenerRule3;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ELBBucketPolicy
   */
  readonly elbBucketPolicy?: CfnLambdaFunctionModulePropsResourcesElbBucketPolicy;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ELBBucket
   */
  readonly elbBucket?: CfnLambdaFunctionModulePropsResourcesElbBucket;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#ImpactApiHandleLambdaFunction
   */
  readonly impactApiHandleLambdaFunction?: CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction;

  /**
   * @schema CfnLambdaFunctionModulePropsResources#LambdaFunctionCreateRole
   */
  readonly lambdaFunctionCreateRole?: CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResources(obj: CfnLambdaFunctionModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImpactClassifyEC2Instance': toJson_CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance(obj.impactClassifyEc2Instance),
    'TargetGroup1': toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup1(obj.targetGroup1),
    'TargetGroup2': toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup2(obj.targetGroup2),
    'TargetGroup3': toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup3(obj.targetGroup3),
    'LoadBalancer1': toJson_CfnLambdaFunctionModulePropsResourcesLoadBalancer1(obj.loadBalancer1),
    'Listener1': toJson_CfnLambdaFunctionModulePropsResourcesListener1(obj.listener1),
    'Listener2': toJson_CfnLambdaFunctionModulePropsResourcesListener2(obj.listener2),
    'Listener3': toJson_CfnLambdaFunctionModulePropsResourcesListener3(obj.listener3),
    'ListenerRule1': toJson_CfnLambdaFunctionModulePropsResourcesListenerRule1(obj.listenerRule1),
    'ListenerRule2': toJson_CfnLambdaFunctionModulePropsResourcesListenerRule2(obj.listenerRule2),
    'ListenerRule3': toJson_CfnLambdaFunctionModulePropsResourcesListenerRule3(obj.listenerRule3),
    'ELBBucketPolicy': toJson_CfnLambdaFunctionModulePropsResourcesElbBucketPolicy(obj.elbBucketPolicy),
    'ELBBucket': toJson_CfnLambdaFunctionModulePropsResourcesElbBucket(obj.elbBucket),
    'ImpactApiHandleLambdaFunction': toJson_CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction(obj.impactApiHandleLambdaFunction),
    'LambdaFunctionCreateRole': toJson_CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole(obj.lambdaFunctionCreateRole),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The lambda function`s name
 *
 * @schema CfnLambdaFunctionModulePropsParametersFunctionName
 */
export interface CfnLambdaFunctionModulePropsParametersFunctionName {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersFunctionName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersFunctionName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersFunctionName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersFunctionName(obj: CfnLambdaFunctionModulePropsParametersFunctionName | undefined): Record<string, any> | undefined {
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
 * The endpoint name
 *
 * @schema CfnLambdaFunctionModulePropsParametersEndpointName
 */
export interface CfnLambdaFunctionModulePropsParametersEndpointName {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersEndpointName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersEndpointName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersEndpointName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersEndpointName(obj: CfnLambdaFunctionModulePropsParametersEndpointName | undefined): Record<string, any> | undefined {
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
 * The image`s name
 *
 * @schema CfnLambdaFunctionModulePropsParametersImageName
 */
export interface CfnLambdaFunctionModulePropsParametersImageName {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersImageName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersImageName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersImageName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersImageName(obj: CfnLambdaFunctionModulePropsParametersImageName | undefined): Record<string, any> | undefined {
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
 * The ELB logs bucket name
 *
 * @schema CfnLambdaFunctionModulePropsParametersElbBucketName
 */
export interface CfnLambdaFunctionModulePropsParametersElbBucketName {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersElbBucketName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersElbBucketName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersElbBucketName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersElbBucketName(obj: CfnLambdaFunctionModulePropsParametersElbBucketName | undefined): Record<string, any> | undefined {
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
 * The ImageDigest
 *
 * @schema CfnLambdaFunctionModulePropsParametersImageDigest
 */
export interface CfnLambdaFunctionModulePropsParametersImageDigest {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersImageDigest#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersImageDigest#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersImageDigest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersImageDigest(obj: CfnLambdaFunctionModulePropsParametersImageDigest | undefined): Record<string, any> | undefined {
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
 * The environment name
 *
 * @schema CfnLambdaFunctionModulePropsParametersEnvName
 */
export interface CfnLambdaFunctionModulePropsParametersEnvName {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersEnvName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersEnvName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersEnvName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersEnvName(obj: CfnLambdaFunctionModulePropsParametersEnvName | undefined): Record<string, any> | undefined {
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
 * Vpc-ID
 *
 * @schema CfnLambdaFunctionModulePropsParametersVpcId
 */
export interface CfnLambdaFunctionModulePropsParametersVpcId {
  /**
   * @schema CfnLambdaFunctionModulePropsParametersVpcId#Type
   */
  readonly type: string;

  /**
   * @schema CfnLambdaFunctionModulePropsParametersVpcId#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsParametersVpcId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsParametersVpcId(obj: CfnLambdaFunctionModulePropsParametersVpcId | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance
 */
export interface CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance(obj: CfnLambdaFunctionModulePropsResourcesImpactClassifyEc2Instance | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup1
 */
export interface CfnLambdaFunctionModulePropsResourcesTargetGroup1 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesTargetGroup1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup1(obj: CfnLambdaFunctionModulePropsResourcesTargetGroup1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup2
 */
export interface CfnLambdaFunctionModulePropsResourcesTargetGroup2 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesTargetGroup2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup2(obj: CfnLambdaFunctionModulePropsResourcesTargetGroup2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup3
 */
export interface CfnLambdaFunctionModulePropsResourcesTargetGroup3 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesTargetGroup3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesTargetGroup3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesTargetGroup3(obj: CfnLambdaFunctionModulePropsResourcesTargetGroup3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesLoadBalancer1
 */
export interface CfnLambdaFunctionModulePropsResourcesLoadBalancer1 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesLoadBalancer1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesLoadBalancer1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesLoadBalancer1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesLoadBalancer1(obj: CfnLambdaFunctionModulePropsResourcesLoadBalancer1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListener1
 */
export interface CfnLambdaFunctionModulePropsResourcesListener1 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListener1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListener1(obj: CfnLambdaFunctionModulePropsResourcesListener1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListener2
 */
export interface CfnLambdaFunctionModulePropsResourcesListener2 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListener2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListener2(obj: CfnLambdaFunctionModulePropsResourcesListener2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListener3
 */
export interface CfnLambdaFunctionModulePropsResourcesListener3 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListener3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListener3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListener3(obj: CfnLambdaFunctionModulePropsResourcesListener3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListenerRule1
 */
export interface CfnLambdaFunctionModulePropsResourcesListenerRule1 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListenerRule1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListenerRule1(obj: CfnLambdaFunctionModulePropsResourcesListenerRule1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListenerRule2
 */
export interface CfnLambdaFunctionModulePropsResourcesListenerRule2 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListenerRule2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListenerRule2(obj: CfnLambdaFunctionModulePropsResourcesListenerRule2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesListenerRule3
 */
export interface CfnLambdaFunctionModulePropsResourcesListenerRule3 {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesListenerRule3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesListenerRule3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesListenerRule3(obj: CfnLambdaFunctionModulePropsResourcesListenerRule3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesElbBucketPolicy
 */
export interface CfnLambdaFunctionModulePropsResourcesElbBucketPolicy {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesElbBucketPolicy#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesElbBucketPolicy#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesElbBucketPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesElbBucketPolicy(obj: CfnLambdaFunctionModulePropsResourcesElbBucketPolicy | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesElbBucket
 */
export interface CfnLambdaFunctionModulePropsResourcesElbBucket {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesElbBucket#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesElbBucket#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesElbBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesElbBucket(obj: CfnLambdaFunctionModulePropsResourcesElbBucket | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction
 */
export interface CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction(obj: CfnLambdaFunctionModulePropsResourcesImpactApiHandleLambdaFunction | undefined): Record<string, any> | undefined {
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
 * @schema CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole
 */
export interface CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole {
  /**
   * @schema CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole(obj: CfnLambdaFunctionModulePropsResourcesLambdaFunctionCreateRole | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `FreyrAIM::ImpactApi::LambdaFunction::MODULE`
 *
 * @cloudformationResource FreyrAIM::ImpactApi::LambdaFunction::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnLambdaFunctionModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "FreyrAIM::ImpactApi::LambdaFunction::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnLambdaFunctionModuleProps;


  /**
   * Create a new `FreyrAIM::ImpactApi::LambdaFunction::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnLambdaFunctionModuleProps) {
    super(scope, id, { type: CfnLambdaFunctionModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnLambdaFunctionModuleProps(props)! });

    this.props = props;

  }
}