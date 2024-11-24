// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a synthetic monitor (V1) in Dynatrace.
 *
 * @schema CfnSyntheticMonitorProps
 */
export interface CfnSyntheticMonitorProps {
  /**
   * The frequency of the monitor, in minutes.
   *
   * You can use one of the following values: 5, 10, 15, 30, and 60.
   *
   * @schema CfnSyntheticMonitorProps#FrequencyMin
   */
  readonly frequencyMin: CfnSyntheticMonitorPropsFrequencyMin;

  /**
   * The monitor is enabled (true) or disabled (false).
   *
   * @schema CfnSyntheticMonitorProps#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CfnSyntheticMonitorProps#AnomalyDetection
   */
  readonly anomalyDetection?: AnomalyDetectionPolicy;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * BROWSER -> BrowserSyntheticMonitor
   * HTTP -> HttpSyntheticMonitor
   *
   * @schema CfnSyntheticMonitorProps#Type
   */
  readonly type?: CfnSyntheticMonitorPropsType;

  /**
   * The name of the monitor.
   *
   * @schema CfnSyntheticMonitorProps#Name
   */
  readonly name: string;

  /**
   * A list of locations from which the monitor is executed.
   *
   * To specify a location, use its entity ID.
   *
   * @schema CfnSyntheticMonitorProps#Locations
   */
  readonly locations?: string[];

  /**
   * The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.
   *
   * @schema CfnSyntheticMonitorProps#Script
   */
  readonly script?: CfnSyntheticMonitorPropsScript;

  /**
   * A set of tags assigned to the monitor.
   *
   * @schema CfnSyntheticMonitorProps#Tags
   */
  readonly tags?: Tag[];

  /**
   * A set of manually assigned applications.
   *
   * @schema CfnSyntheticMonitorProps#ManuallyAssignedApps
   */
  readonly manuallyAssignedApps?: string[];

  /**
   * A set of management zones to which the monitor belongs to.
   *
   * @schema CfnSyntheticMonitorProps#ManagementZones
   */
  readonly managementZones?: any[];

  /**
   * A set of automatically assigned applications.
   *
   * @schema CfnSyntheticMonitorProps#AutomaticallyAssignedApps
   */
  readonly automaticallyAssignedApps?: string[];

}

/**
 * Converts an object of type 'CfnSyntheticMonitorProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSyntheticMonitorProps(obj: CfnSyntheticMonitorProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FrequencyMin': obj.frequencyMin,
    'Enabled': obj.enabled,
    'AnomalyDetection': toJson_AnomalyDetectionPolicy(obj.anomalyDetection),
    'Type': obj.type,
    'Name': obj.name,
    'Locations': obj.locations?.map(y => y),
    'Script': toJson_CfnSyntheticMonitorPropsScript(obj.script),
    'Tags': obj.tags?.map(y => toJson_Tag(y)),
    'ManuallyAssignedApps': obj.manuallyAssignedApps?.map(y => y),
    'ManagementZones': obj.managementZones?.map(y => y),
    'AutomaticallyAssignedApps': obj.automaticallyAssignedApps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The frequency of the monitor, in minutes.
 *
 * You can use one of the following values: 5, 10, 15, 30, and 60.
 *
 * @schema CfnSyntheticMonitorPropsFrequencyMin
 */
export enum CfnSyntheticMonitorPropsFrequencyMin {
  /** 5 */
  VALUE_5 = 5,
  /** 10 */
  VALUE_10 = 10,
  /** 15 */
  VALUE_15 = 15,
  /** 30 */
  VALUE_30 = 30,
  /** 60 */
  VALUE_60 = 60,
}

/**
 * The anomaly detection configuration.
 *
 * @schema AnomalyDetectionPolicy
 */
export interface AnomalyDetectionPolicy {
  /**
   * @schema AnomalyDetectionPolicy#OutageHandling
   */
  readonly outageHandling: OutageHandlingPolicy;

  /**
   * @schema AnomalyDetectionPolicy#LoadingTimeThresholds
   */
  readonly loadingTimeThresholds: LoadingTimeThresholdsPolicy;

}

/**
 * Converts an object of type 'AnomalyDetectionPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AnomalyDetectionPolicy(obj: AnomalyDetectionPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutageHandling': toJson_OutageHandlingPolicy(obj.outageHandling),
    'LoadingTimeThresholds': toJson_LoadingTimeThresholdsPolicy(obj.loadingTimeThresholds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Defines the actual set of fields depending on the value. See one of the following objects:
 *
 * BROWSER -> BrowserSyntheticMonitor
 * HTTP -> HttpSyntheticMonitor
 *
 * @schema CfnSyntheticMonitorPropsType
 */
export enum CfnSyntheticMonitorPropsType {
  /** BROWSER */
  BROWSER = "BROWSER",
  /** HTTP */
  HTTP = "HTTP",
}

/**
 * The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.
 *
 * @schema CfnSyntheticMonitorPropsScript
 */
export interface CfnSyntheticMonitorPropsScript {
  /**
   * @schema CfnSyntheticMonitorPropsScript#Version
   */
  readonly version?: string;

  /**
   * @schema CfnSyntheticMonitorPropsScript#Requests
   */
  readonly requests?: RequestsInput[];

}

/**
 * Converts an object of type 'CfnSyntheticMonitorPropsScript' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSyntheticMonitorPropsScript(obj: CfnSyntheticMonitorPropsScript | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'Requests': obj.requests?.map(y => toJson_RequestsInput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Tag with source of a Dynatrace entity.
 *
 * @schema Tag
 */
export interface Tag {
  /**
   * The source of the tag, such as USER, RULE_BASED or AUTO
   *
   * @schema Tag#Source
   */
  readonly source?: TagSource;

  /**
   * The origin of the tag, such as AWS or Cloud Foundry.
   *
   * Custom tags use the CONTEXTLESS value.
   *
   * @schema Tag#Context
   */
  readonly context: TagContext;

  /**
   * The key of the tag.
   *
   * Custom tags have the tag value here.
   *
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * The value of the tag.
   *
   * Not applicable to custom tags.
   *
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Tag(obj: Tag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source,
    'Context': obj.context,
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Outage handling configuration.
 *
 * @schema OutageHandlingPolicy
 */
export interface OutageHandlingPolicy {
  /**
   * When enabled (true), generate a problem and send an alert when the monitor is unavailable at all configured locations.
   *
   * @schema OutageHandlingPolicy#GlobalOutage
   */
  readonly globalOutage?: boolean;

  /**
   * @schema OutageHandlingPolicy#GlobalOutagePolicy
   */
  readonly globalOutagePolicy?: GlobalOutagePolicy;

  /**
   * When enabled (true), generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location.
   *
   * @schema OutageHandlingPolicy#LocalOutage
   */
  readonly localOutage?: boolean;

  /**
   * @schema OutageHandlingPolicy#LocalOutagePolicy
   */
  readonly localOutagePolicy?: LocalOutagePolicy;

  /**
   * Schedule retry if browser monitor execution results in a fail. For HTTP monitors this property is ignored.
   *
   * @schema OutageHandlingPolicy#RetryOnError
   */
  readonly retryOnError?: boolean;

}

/**
 * Converts an object of type 'OutageHandlingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutageHandlingPolicy(obj: OutageHandlingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalOutage': obj.globalOutage,
    'GlobalOutagePolicy': toJson_GlobalOutagePolicy(obj.globalOutagePolicy),
    'LocalOutage': obj.localOutage,
    'LocalOutagePolicy': toJson_LocalOutagePolicy(obj.localOutagePolicy),
    'RetryOnError': obj.retryOnError,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Performance thresholds configuration.
 *
 * @schema LoadingTimeThresholdsPolicy
 */
export interface LoadingTimeThresholdsPolicy {
  /**
   * Performance threshold is enabled (true) or disabled (false).
   *
   * @schema LoadingTimeThresholdsPolicy#Enabled
   */
  readonly enabled: boolean;

  /**
   * The list of performance threshold rules.
   *
   * @schema LoadingTimeThresholdsPolicy#Thresholds
   */
  readonly thresholds: LoadingTimeThreshold[];

}

/**
 * Converts an object of type 'LoadingTimeThresholdsPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LoadingTimeThresholdsPolicy(obj: LoadingTimeThresholdsPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Thresholds': obj.thresholds?.map(y => toJson_LoadingTimeThreshold(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RequestsInput
 */
export interface RequestsInput {
  /**
   * @schema RequestsInput#Url
   */
  readonly url?: string;

  /**
   * @schema RequestsInput#Method
   */
  readonly method?: string;

  /**
   * @schema RequestsInput#Description
   */
  readonly description?: string;

  /**
   * @schema RequestsInput#Configuration
   */
  readonly configuration?: RequestsInputConfiguration;

  /**
   * @schema RequestsInput#Validation
   */
  readonly validation?: RequestsInputValidation;

}

/**
 * Converts an object of type 'RequestsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RequestsInput(obj: RequestsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'Method': obj.method,
    'Description': obj.description,
    'Configuration': toJson_RequestsInputConfiguration(obj.configuration),
    'Validation': toJson_RequestsInputValidation(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The source of the tag, such as USER, RULE_BASED or AUTO
 *
 * @schema TagSource
 */
export enum TagSource {
  /** AUTO */
  AUTO = "AUTO",
  /** RULE_BASED */
  RULE_UNDERSCORE_BASED = "RULE_BASED",
  /** USER */
  USER = "USER",
}

/**
 * The origin of the tag, such as AWS or Cloud Foundry.
 *
 * Custom tags use the CONTEXTLESS value.
 *
 * @schema TagContext
 */
export enum TagContext {
  /** AWS */
  AWS = "AWS",
  /** AWS_GENERIC */
  AWS_UNDERSCORE_GENERIC = "AWS_GENERIC",
  /** AZURE */
  AZURE = "AZURE",
  /** CLOUD_FOUNDRY */
  CLOUD_UNDERSCORE_FOUNDRY = "CLOUD_FOUNDRY",
  /** CONTEXTLESS */
  CONTEXTLESS = "CONTEXTLESS",
  /** ENVIRONMENT */
  ENVIRONMENT = "ENVIRONMENT",
  /** GOOGLE_CLOUD */
  GOOGLE_UNDERSCORE_CLOUD = "GOOGLE_CLOUD",
  /** KUBERNETES */
  KUBERNETES = "KUBERNETES",
}

/**
 * Global outage handling configuration.
 *
 * @schema GlobalOutagePolicy
 */
export interface GlobalOutagePolicy {
  /**
   * Alert if all locations are unable to access the web application X times consecutively.
   *
   * @schema GlobalOutagePolicy#ConsecutiveRuns
   */
  readonly consecutiveRuns: number;

}

/**
 * Converts an object of type 'GlobalOutagePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlobalOutagePolicy(obj: GlobalOutagePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsecutiveRuns': obj.consecutiveRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Local outage handling configuration.
 *
 * Alert if affectedLocations of locations are unable to access the web application consecutiveRuns times consecutively.
 *
 * @schema LocalOutagePolicy
 */
export interface LocalOutagePolicy {
  /**
   * The number of affected locations to trigger an alert.
   *
   * @schema LocalOutagePolicy#AffectedLocations
   */
  readonly affectedLocations: number;

  /**
   * The number of consecutive fails to trigger an alert.
   *
   * @schema LocalOutagePolicy#ConsecutiveRuns
   */
  readonly consecutiveRuns: number;

}

/**
 * Converts an object of type 'LocalOutagePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocalOutagePolicy(obj: LocalOutagePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AffectedLocations': obj.affectedLocations,
    'ConsecutiveRuns': obj.consecutiveRuns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The performance threshold rule.
 *
 * @schema LoadingTimeThreshold
 */
export interface LoadingTimeThreshold {
  /**
   * The type of the threshold: total loading time or action loading time.
   *
   * @schema LoadingTimeThreshold#Type
   */
  readonly type: LoadingTimeThresholdType;

  /**
   * Notify if monitor takes longer than X milliseconds to load.
   *
   * @schema LoadingTimeThreshold#ValueMs
   */
  readonly valueMs: number;

}

/**
 * Converts an object of type 'LoadingTimeThreshold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LoadingTimeThreshold(obj: LoadingTimeThreshold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ValueMs': obj.valueMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RequestsInputConfiguration
 */
export interface RequestsInputConfiguration {
  /**
   * @schema RequestsInputConfiguration#AcceptAnyCertificate
   */
  readonly acceptAnyCertificate?: boolean;

  /**
   * @schema RequestsInputConfiguration#FollowRedirects
   */
  readonly followRedirects?: boolean;

  /**
   * @schema RequestsInputConfiguration#ShouldNotPersistSensitiveData
   */
  readonly shouldNotPersistSensitiveData?: boolean;

}

/**
 * Converts an object of type 'RequestsInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RequestsInputConfiguration(obj: RequestsInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptAnyCertificate': obj.acceptAnyCertificate,
    'FollowRedirects': obj.followRedirects,
    'ShouldNotPersistSensitiveData': obj.shouldNotPersistSensitiveData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RequestsInputValidation
 */
export interface RequestsInputValidation {
  /**
   * @schema RequestsInputValidation#Rules
   */
  readonly rules?: RequestsRules[];

}

/**
 * Converts an object of type 'RequestsInputValidation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RequestsInputValidation(obj: RequestsInputValidation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_RequestsRules(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The type of the threshold: total loading time or action loading time.
 *
 * @schema LoadingTimeThresholdType
 */
export enum LoadingTimeThresholdType {
  /** ACTION */
  ACTION = "ACTION",
  /** TOTAL */
  TOTAL = "TOTAL",
}

/**
 * @schema RequestsRules
 */
export interface RequestsRules {
  /**
   * @schema RequestsRules#Value
   */
  readonly value?: string;

  /**
   * @schema RequestsRules#PassIfFound
   */
  readonly passIfFound?: boolean;

  /**
   * @schema RequestsRules#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'RequestsRules' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RequestsRules(obj: RequestsRules | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'PassIfFound': obj.passIfFound,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Dynatrace::Environment::SyntheticMonitor`
 *
 * @cloudformationResource Dynatrace::Environment::SyntheticMonitor
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
 */
export class CfnSyntheticMonitor extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Dynatrace::Environment::SyntheticMonitor";

  /**
   * Resource props.
   */
  public readonly props: CfnSyntheticMonitorProps;

  /**
   * Attribute `Dynatrace::Environment::SyntheticMonitor.EntityId`
   * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
   */
  public readonly attrEntityId: string;
  /**
   * Attribute `Dynatrace::Environment::SyntheticMonitor.CreatedFrom`
   * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
   */
  public readonly attrCreatedFrom: string;

  /**
   * Create a new `Dynatrace::Environment::SyntheticMonitor`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnSyntheticMonitorProps) {
    super(scope, id, { type: CfnSyntheticMonitor.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnSyntheticMonitorProps(props)! });

    this.props = props;

    this.attrEntityId = cdk.Token.asString(this.getAtt('EntityId'));
    this.attrCreatedFrom = cdk.Token.asString(this.getAtt('CreatedFrom'));
  }
}