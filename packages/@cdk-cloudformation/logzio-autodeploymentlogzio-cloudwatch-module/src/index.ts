// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * Schema for Module Fragment of type logzio::autoDeploymentLogzio::CloudWatch::MODULE
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
   * The Logz.io listener URL fot your region.
   *
   * @schema CfnModulePropsParameters#LogzioListenerUrl
   */
  readonly logzioListenerUrl?: CfnModulePropsParametersLogzioListenerUrl;

  /**
   * Logz.io account token.
   *
   * @schema CfnModulePropsParameters#LogzioToken
   */
  readonly logzioToken?: CfnModulePropsParametersLogzioToken;

  /**
   * The log type you'll use with this Lambda. Please note that you should create a new Lambda for each log type you use. This can be a built-in log type, or your custom log type
   *
   * @schema CfnModulePropsParameters#LogzioType
   */
  readonly logzioType?: CfnModulePropsParametersLogzioType;

  /**
   * JSON or text. If json, the lambda function will attempt to parse the message field as JSON and populate the event data with the parsed fields.
   *
   * @schema CfnModulePropsParameters#LogzioFormat
   */
  readonly logzioFormat?: CfnModulePropsParametersLogzioFormat;

  /**
   * If true, the Lambda will send compressed logs. If false, the Lambda will send uncompressed logs.
   *
   * @schema CfnModulePropsParameters#LogzioCompress
   */
  readonly logzioCompress?: CfnModulePropsParametersLogzioCompress;

  /**
   * By default, we do not send logs of type START, END, REPORT. Choose true to send all log types.
   *
   * @schema CfnModulePropsParameters#LogzioSendAll
   */
  readonly logzioSendAll?: CfnModulePropsParametersLogzioSendAll;

  /**
   * Enriches the CloudWatch events with custom properties at ship time. The format is `key1=value1;key2=value2`. By default is empty.
   *
   * @schema CfnModulePropsParameters#LogzioEnrich
   */
  readonly logzioEnrich?: CfnModulePropsParametersLogzioEnrich;

  /**
   * CloudWatch Log Group name from where you want to send logs.
   *
   * @schema CfnModulePropsParameters#LogGroup
   */
  readonly logGroup?: CfnModulePropsParametersLogGroup;

}

/**
 * Converts an object of type 'CfnModulePropsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParameters(obj: CfnModulePropsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogzioListenerUrl': toJson_CfnModulePropsParametersLogzioListenerUrl(obj.logzioListenerUrl),
    'LogzioToken': toJson_CfnModulePropsParametersLogzioToken(obj.logzioToken),
    'LogzioType': toJson_CfnModulePropsParametersLogzioType(obj.logzioType),
    'LogzioFormat': toJson_CfnModulePropsParametersLogzioFormat(obj.logzioFormat),
    'LogzioCompress': toJson_CfnModulePropsParametersLogzioCompress(obj.logzioCompress),
    'LogzioSendAll': toJson_CfnModulePropsParametersLogzioSendAll(obj.logzioSendAll),
    'LogzioEnrich': toJson_CfnModulePropsParametersLogzioEnrich(obj.logzioEnrich),
    'LogGroup': toJson_CfnModulePropsParametersLogGroup(obj.logGroup),
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
   * @schema CfnModulePropsResources#LambdaPermission
   */
  readonly lambdaPermission?: CfnModulePropsResourcesLambdaPermission;

  /**
   * @schema CfnModulePropsResources#LogzioSubscriptionFilter
   */
  readonly logzioSubscriptionFilter?: CfnModulePropsResourcesLogzioSubscriptionFilter;

  /**
   * @schema CfnModulePropsResources#lambdaIamRole
   */
  readonly lambdaIamRole?: CfnModulePropsResourcesLambdaIamRole;

  /**
   * @schema CfnModulePropsResources#LogzioCloudwatchLogsLambda
   */
  readonly logzioCloudwatchLogsLambda?: CfnModulePropsResourcesLogzioCloudwatchLogsLambda;

}

/**
 * Converts an object of type 'CfnModulePropsResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResources(obj: CfnModulePropsResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaPermission': toJson_CfnModulePropsResourcesLambdaPermission(obj.lambdaPermission),
    'LogzioSubscriptionFilter': toJson_CfnModulePropsResourcesLogzioSubscriptionFilter(obj.logzioSubscriptionFilter),
    'lambdaIamRole': toJson_CfnModulePropsResourcesLambdaIamRole(obj.lambdaIamRole),
    'LogzioCloudwatchLogsLambda': toJson_CfnModulePropsResourcesLogzioCloudwatchLogsLambda(obj.logzioCloudwatchLogsLambda),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The Logz.io listener URL fot your region.
 *
 * @schema CfnModulePropsParametersLogzioListenerUrl
 */
export interface CfnModulePropsParametersLogzioListenerUrl {
  /**
   * @schema CfnModulePropsParametersLogzioListenerUrl#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioListenerUrl#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioListenerUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioListenerUrl(obj: CfnModulePropsParametersLogzioListenerUrl | undefined): Record<string, any> | undefined {
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
 * Logz.io account token.
 *
 * @schema CfnModulePropsParametersLogzioToken
 */
export interface CfnModulePropsParametersLogzioToken {
  /**
   * @schema CfnModulePropsParametersLogzioToken#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioToken#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioToken' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioToken(obj: CfnModulePropsParametersLogzioToken | undefined): Record<string, any> | undefined {
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
 * The log type you'll use with this Lambda. Please note that you should create a new Lambda for each log type you use. This can be a built-in log type, or your custom log type
 *
 * @schema CfnModulePropsParametersLogzioType
 */
export interface CfnModulePropsParametersLogzioType {
  /**
   * @schema CfnModulePropsParametersLogzioType#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioType#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioType(obj: CfnModulePropsParametersLogzioType | undefined): Record<string, any> | undefined {
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
 * JSON or text. If json, the lambda function will attempt to parse the message field as JSON and populate the event data with the parsed fields.
 *
 * @schema CfnModulePropsParametersLogzioFormat
 */
export interface CfnModulePropsParametersLogzioFormat {
  /**
   * @schema CfnModulePropsParametersLogzioFormat#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioFormat#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioFormat' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioFormat(obj: CfnModulePropsParametersLogzioFormat | undefined): Record<string, any> | undefined {
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
 * If true, the Lambda will send compressed logs. If false, the Lambda will send uncompressed logs.
 *
 * @schema CfnModulePropsParametersLogzioCompress
 */
export interface CfnModulePropsParametersLogzioCompress {
  /**
   * @schema CfnModulePropsParametersLogzioCompress#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioCompress#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioCompress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioCompress(obj: CfnModulePropsParametersLogzioCompress | undefined): Record<string, any> | undefined {
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
 * By default, we do not send logs of type START, END, REPORT. Choose true to send all log types.
 *
 * @schema CfnModulePropsParametersLogzioSendAll
 */
export interface CfnModulePropsParametersLogzioSendAll {
  /**
   * @schema CfnModulePropsParametersLogzioSendAll#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioSendAll#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioSendAll' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioSendAll(obj: CfnModulePropsParametersLogzioSendAll | undefined): Record<string, any> | undefined {
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
 * Enriches the CloudWatch events with custom properties at ship time. The format is `key1=value1;key2=value2`. By default is empty.
 *
 * @schema CfnModulePropsParametersLogzioEnrich
 */
export interface CfnModulePropsParametersLogzioEnrich {
  /**
   * @schema CfnModulePropsParametersLogzioEnrich#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogzioEnrich#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogzioEnrich' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogzioEnrich(obj: CfnModulePropsParametersLogzioEnrich | undefined): Record<string, any> | undefined {
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
 * CloudWatch Log Group name from where you want to send logs.
 *
 * @schema CfnModulePropsParametersLogGroup
 */
export interface CfnModulePropsParametersLogGroup {
  /**
   * @schema CfnModulePropsParametersLogGroup#Type
   */
  readonly type: string;

  /**
   * @schema CfnModulePropsParametersLogGroup#Description
   */
  readonly description: string;

}

/**
 * Converts an object of type 'CfnModulePropsParametersLogGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsParametersLogGroup(obj: CfnModulePropsParametersLogGroup | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesLambdaPermission
 */
export interface CfnModulePropsResourcesLambdaPermission {
  /**
   * @schema CfnModulePropsResourcesLambdaPermission#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesLambdaPermission#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesLambdaPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesLambdaPermission(obj: CfnModulePropsResourcesLambdaPermission | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesLogzioSubscriptionFilter
 */
export interface CfnModulePropsResourcesLogzioSubscriptionFilter {
  /**
   * @schema CfnModulePropsResourcesLogzioSubscriptionFilter#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesLogzioSubscriptionFilter#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesLogzioSubscriptionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesLogzioSubscriptionFilter(obj: CfnModulePropsResourcesLogzioSubscriptionFilter | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesLambdaIamRole
 */
export interface CfnModulePropsResourcesLambdaIamRole {
  /**
   * @schema CfnModulePropsResourcesLambdaIamRole#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesLambdaIamRole#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesLambdaIamRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesLambdaIamRole(obj: CfnModulePropsResourcesLambdaIamRole | undefined): Record<string, any> | undefined {
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
 * @schema CfnModulePropsResourcesLogzioCloudwatchLogsLambda
 */
export interface CfnModulePropsResourcesLogzioCloudwatchLogsLambda {
  /**
   * @schema CfnModulePropsResourcesLogzioCloudwatchLogsLambda#Type
   */
  readonly type?: string;

  /**
   * @schema CfnModulePropsResourcesLogzioCloudwatchLogsLambda#Properties
   */
  readonly properties?: any;

}

/**
 * Converts an object of type 'CfnModulePropsResourcesLogzioCloudwatchLogsLambda' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnModulePropsResourcesLogzioCloudwatchLogsLambda(obj: CfnModulePropsResourcesLogzioCloudwatchLogsLambda | undefined): Record<string, any> | undefined {
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
 * A CloudFormation `logzio::autoDeploymentLogzio::CloudWatch::MODULE`
 *
 * @cloudformationResource logzio::autoDeploymentLogzio::CloudWatch::MODULE
 * @stability external
 * @link http://unknown-url
 */
export class CfnModule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "logzio::autoDeploymentLogzio::CloudWatch::MODULE";

  /**
   * `logzio::autoDeploymentLogzio::CloudWatch::MODULE.Parameters`
   * @link http://unknown-url
   */
  public readonly parameters: any;
  /**
   * `logzio::autoDeploymentLogzio::CloudWatch::MODULE.Resources`
   * @link http://unknown-url
   */
  public readonly resources: any;

  /**
   * Create a new `logzio::autoDeploymentLogzio::CloudWatch::MODULE`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnModuleProps) {
    super(scope, id, { type: CfnModule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnModuleProps(props)! });

    this.parameters = props.parameters;
    this.resources = props.resources;
  }
}