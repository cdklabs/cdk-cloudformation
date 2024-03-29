// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Schema for Module Fragment of type FreyrAIM::ImpactApi::LoadBalancer::MODULE
 *
 * @schema CfnLoadBalancerModuleProps
 */
export interface CfnLoadBalancerModuleProps {
  /**
   * @schema CfnLoadBalancerModuleProps#Parameters
   */
  readonly parameters?: CfnLoadBalancerModulePropsParameters;

  /**
   * @schema CfnLoadBalancerModuleProps#Resources
   */
  readonly resources?: CfnLoadBalancerModulePropsResources;

}

/**
 * Converts an object of type 'CfnLoadBalancerModuleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModuleProps(obj: CfnLoadBalancerModuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': toJson_CfnLoadBalancerModulePropsParameters(obj.parameters),
    'Resources': toJson_CfnLoadBalancerModulePropsResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnLoadBalancerModulePropsParameters
 */
export interface CfnLoadBalancerModulePropsParameters {
  /**
   * The ELB logs bucket name
   *
   * @schema CfnLoadBalancerModulePropsParameters#ELBBucketName
   */
  readonly elbBucketName?: CfnLoadBalancerModulePropsParametersElbBucketName;

  /**
   * The environment name
   *
   * @schema CfnLoadBalancerModulePropsParameters#EnvName
   */
  readonly envName?: CfnLoadBalancerModulePropsParametersEnvName;

  /**
   * The ImageDigest
   *
   * @schema CfnLoadBalancerModulePropsParameters#ImageDigest
   */
  readonly imageDigest?: CfnLoadBalancerModulePropsParametersImageDigest;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsParameters(obj: CfnLoadBalancerModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ELBBucketName': toJson_CfnLoadBalancerModulePropsParametersElbBucketName(obj.elbBucketName),
    'EnvName': toJson_CfnLoadBalancerModulePropsParametersEnvName(obj.envName),
    'ImageDigest': toJson_CfnLoadBalancerModulePropsParametersImageDigest(obj.imageDigest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnLoadBalancerModulePropsResources
 */
export interface CfnLoadBalancerModulePropsResources {
  /**
   * @schema CfnLoadBalancerModulePropsResources#ImpactClassifyEC2Instance
   */
  readonly impactClassifyEc2Instance?: CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance;

  /**
   * @schema CfnLoadBalancerModulePropsResources#TargetGroup1
   */
  readonly targetGroup1?: CfnLoadBalancerModulePropsResourcesTargetGroup1;

  /**
   * @schema CfnLoadBalancerModulePropsResources#TargetGroup2
   */
  readonly targetGroup2?: CfnLoadBalancerModulePropsResourcesTargetGroup2;

  /**
   * @schema CfnLoadBalancerModulePropsResources#TargetGroup3
   */
  readonly targetGroup3?: CfnLoadBalancerModulePropsResourcesTargetGroup3;

  /**
   * @schema CfnLoadBalancerModulePropsResources#LoadBalancer1
   */
  readonly loadBalancer1?: CfnLoadBalancerModulePropsResourcesLoadBalancer1;

  /**
   * @schema CfnLoadBalancerModulePropsResources#Listener1
   */
  readonly listener1?: CfnLoadBalancerModulePropsResourcesListener1;

  /**
   * @schema CfnLoadBalancerModulePropsResources#Listener2
   */
  readonly listener2?: CfnLoadBalancerModulePropsResourcesListener2;

  /**
   * @schema CfnLoadBalancerModulePropsResources#Listener3
   */
  readonly listener3?: CfnLoadBalancerModulePropsResourcesListener3;

  /**
   * @schema CfnLoadBalancerModulePropsResources#ListenerRule1
   */
  readonly listenerRule1?: CfnLoadBalancerModulePropsResourcesListenerRule1;

  /**
   * @schema CfnLoadBalancerModulePropsResources#ListenerRule2
   */
  readonly listenerRule2?: CfnLoadBalancerModulePropsResourcesListenerRule2;

  /**
   * @schema CfnLoadBalancerModulePropsResources#ListenerRule3
   */
  readonly listenerRule3?: CfnLoadBalancerModulePropsResourcesListenerRule3;

  /**
   * @schema CfnLoadBalancerModulePropsResources#ELBBucketPolicy
   */
  readonly elbBucketPolicy?: CfnLoadBalancerModulePropsResourcesElbBucketPolicy;

  /**
   * @schema CfnLoadBalancerModulePropsResources#ELBBucket
   */
  readonly elbBucket?: CfnLoadBalancerModulePropsResourcesElbBucket;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResources(obj: CfnLoadBalancerModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImpactClassifyEC2Instance': toJson_CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance(obj.impactClassifyEc2Instance),
    'TargetGroup1': toJson_CfnLoadBalancerModulePropsResourcesTargetGroup1(obj.targetGroup1),
    'TargetGroup2': toJson_CfnLoadBalancerModulePropsResourcesTargetGroup2(obj.targetGroup2),
    'TargetGroup3': toJson_CfnLoadBalancerModulePropsResourcesTargetGroup3(obj.targetGroup3),
    'LoadBalancer1': toJson_CfnLoadBalancerModulePropsResourcesLoadBalancer1(obj.loadBalancer1),
    'Listener1': toJson_CfnLoadBalancerModulePropsResourcesListener1(obj.listener1),
    'Listener2': toJson_CfnLoadBalancerModulePropsResourcesListener2(obj.listener2),
    'Listener3': toJson_CfnLoadBalancerModulePropsResourcesListener3(obj.listener3),
    'ListenerRule1': toJson_CfnLoadBalancerModulePropsResourcesListenerRule1(obj.listenerRule1),
    'ListenerRule2': toJson_CfnLoadBalancerModulePropsResourcesListenerRule2(obj.listenerRule2),
    'ListenerRule3': toJson_CfnLoadBalancerModulePropsResourcesListenerRule3(obj.listenerRule3),
    'ELBBucketPolicy': toJson_CfnLoadBalancerModulePropsResourcesElbBucketPolicy(obj.elbBucketPolicy),
    'ELBBucket': toJson_CfnLoadBalancerModulePropsResourcesElbBucket(obj.elbBucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The ELB logs bucket name
 *
 * @schema CfnLoadBalancerModulePropsParametersElbBucketName
 */
export interface CfnLoadBalancerModulePropsParametersElbBucketName {
  /**
   * @schema CfnLoadBalancerModulePropsParametersElbBucketName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLoadBalancerModulePropsParametersElbBucketName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsParametersElbBucketName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsParametersElbBucketName(obj: CfnLoadBalancerModulePropsParametersElbBucketName | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsParametersEnvName
 */
export interface CfnLoadBalancerModulePropsParametersEnvName {
  /**
   * @schema CfnLoadBalancerModulePropsParametersEnvName#Type
   */
  readonly type: string;

  /**
   * @schema CfnLoadBalancerModulePropsParametersEnvName#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsParametersEnvName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsParametersEnvName(obj: CfnLoadBalancerModulePropsParametersEnvName | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsParametersImageDigest
 */
export interface CfnLoadBalancerModulePropsParametersImageDigest {
  /**
   * @schema CfnLoadBalancerModulePropsParametersImageDigest#Type
   */
  readonly type: string;

  /**
   * @schema CfnLoadBalancerModulePropsParametersImageDigest#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsParametersImageDigest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsParametersImageDigest(obj: CfnLoadBalancerModulePropsParametersImageDigest | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance
 */
export interface CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance(obj: CfnLoadBalancerModulePropsResourcesImpactClassifyEc2Instance | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesTargetGroup1
 */
export interface CfnLoadBalancerModulePropsResourcesTargetGroup1 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesTargetGroup1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesTargetGroup1(obj: CfnLoadBalancerModulePropsResourcesTargetGroup1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesTargetGroup2
 */
export interface CfnLoadBalancerModulePropsResourcesTargetGroup2 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesTargetGroup2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesTargetGroup2(obj: CfnLoadBalancerModulePropsResourcesTargetGroup2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesTargetGroup3
 */
export interface CfnLoadBalancerModulePropsResourcesTargetGroup3 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesTargetGroup3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesTargetGroup3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesTargetGroup3(obj: CfnLoadBalancerModulePropsResourcesTargetGroup3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesLoadBalancer1
 */
export interface CfnLoadBalancerModulePropsResourcesLoadBalancer1 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesLoadBalancer1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesLoadBalancer1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesLoadBalancer1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesLoadBalancer1(obj: CfnLoadBalancerModulePropsResourcesLoadBalancer1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListener1
 */
export interface CfnLoadBalancerModulePropsResourcesListener1 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListener1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListener1(obj: CfnLoadBalancerModulePropsResourcesListener1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListener2
 */
export interface CfnLoadBalancerModulePropsResourcesListener2 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListener2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListener2(obj: CfnLoadBalancerModulePropsResourcesListener2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListener3
 */
export interface CfnLoadBalancerModulePropsResourcesListener3 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListener3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListener3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListener3(obj: CfnLoadBalancerModulePropsResourcesListener3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListenerRule1
 */
export interface CfnLoadBalancerModulePropsResourcesListenerRule1 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule1#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule1#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListenerRule1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListenerRule1(obj: CfnLoadBalancerModulePropsResourcesListenerRule1 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListenerRule2
 */
export interface CfnLoadBalancerModulePropsResourcesListenerRule2 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule2#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule2#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListenerRule2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListenerRule2(obj: CfnLoadBalancerModulePropsResourcesListenerRule2 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesListenerRule3
 */
export interface CfnLoadBalancerModulePropsResourcesListenerRule3 {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule3#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesListenerRule3#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesListenerRule3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesListenerRule3(obj: CfnLoadBalancerModulePropsResourcesListenerRule3 | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesElbBucketPolicy
 */
export interface CfnLoadBalancerModulePropsResourcesElbBucketPolicy {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesElbBucketPolicy#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesElbBucketPolicy#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesElbBucketPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesElbBucketPolicy(obj: CfnLoadBalancerModulePropsResourcesElbBucketPolicy | undefined): Record<string, any> | undefined {
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
 * @schema CfnLoadBalancerModulePropsResourcesElbBucket
 */
export interface CfnLoadBalancerModulePropsResourcesElbBucket {
  /**
   * @schema CfnLoadBalancerModulePropsResourcesElbBucket#Type
   */
  readonly type?: string;

  /**
   * @schema CfnLoadBalancerModulePropsResourcesElbBucket#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnLoadBalancerModulePropsResourcesElbBucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLoadBalancerModulePropsResourcesElbBucket(obj: CfnLoadBalancerModulePropsResourcesElbBucket | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `FreyrAIM::ImpactApi::LoadBalancer::MODULE`
 *
 * @cloudformationResource FreyrAIM::ImpactApi::LoadBalancer::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnLoadBalancerModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "FreyrAIM::ImpactApi::LoadBalancer::MODULE";

  /**
   * Resource props.
   */
  public readonly props: CfnLoadBalancerModuleProps;


  /**
   * Create a new `FreyrAIM::ImpactApi::LoadBalancer::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnLoadBalancerModuleProps) {
    super(scope, id, { type: CfnLoadBalancerModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnLoadBalancerModuleProps(props)! });

    this.props = props;

  }
}