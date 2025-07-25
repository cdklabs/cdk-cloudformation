// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a notification rule for Rollbar.
 *
 * @schema CfnRuleProps
 */
export interface CfnRuleProps {
  /**
   * @schema CfnRuleProps#Slack
   */
  readonly slack?: SlackRule;

  /**
   * @schema CfnRuleProps#PagerDuty
   */
  readonly pagerDuty?: PagerDutyRule;

  /**
   * @schema CfnRuleProps#Email
   */
  readonly email?: EmailRule;

  /**
   * @schema CfnRuleProps#Webhook
   */
  readonly webhook?: WebhookRule;
}

/**
 * Converts an object of type 'CfnRuleProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnRuleProps(obj: CfnRuleProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Slack': toJson_SlackRule(obj.slack),
    'PagerDuty': toJson_PagerDutyRule(obj.pagerDuty),
    'Email': toJson_EmailRule(obj.email),
    'Webhook': toJson_WebhookRule(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Create Slack notification rule
 *
 * @schema SlackRule
 */
export interface SlackRule {
  /**
   * @schema SlackRule#Trigger
   */
  readonly trigger: SlackTrigger;

  /**
   * @schema SlackRule#Filters
   */
  readonly filters?: any[];

  /**
   * The action associated with this rule
   *
   * @schema SlackRule#Action
   */
  readonly action?: string;

  /**
   * @schema SlackRule#Config
   */
  readonly config?: any;
}

/**
 * Converts an object of type 'SlackRule' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_SlackRule(obj: SlackRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': obj.trigger,
    'Filters': obj.filters?.map(y => y),
    'Action': obj.action,
    'Config': obj.config,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Create PagerDuty notification rules
 *
 * @schema PagerDutyRule
 */
export interface PagerDutyRule {
  /**
   * @schema PagerDutyRule#Trigger
   */
  readonly trigger: PagerDutyTrigger;

  /**
   * @schema PagerDutyRule#Filters
   */
  readonly filters?: any[];

  /**
   * The action associated with this rule
   *
   * @schema PagerDutyRule#Action
   */
  readonly action?: string;

  /**
   * @schema PagerDutyRule#Config
   */
  readonly config?: PagerDutyConfig;
}

/**
 * Converts an object of type 'PagerDutyRule' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PagerDutyRule(obj: PagerDutyRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': obj.trigger,
    'Filters': obj.filters?.map(y => y),
    'Action': obj.action,
    'Config': toJson_PagerDutyConfig(obj.config),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Create Email notification rules
 *
 * @schema EmailRule
 */
export interface EmailRule {
  /**
   * @schema EmailRule#Trigger
   */
  readonly trigger: EmailTrigger;

  /**
   * @schema EmailRule#Filters
   */
  readonly filters?: any[];

  /**
   * The action associated with this rule
   *
   * @schema EmailRule#Action
   */
  readonly action?: string;

  /**
   * @schema EmailRule#Config
   */
  readonly config?: any;
}

/**
 * Converts an object of type 'EmailRule' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_EmailRule(obj: EmailRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': obj.trigger,
    'Filters': obj.filters?.map(y => y),
    'Action': obj.action,
    'Config': obj.config,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Create Webhook notification rules
 *
 * @schema WebhookRule
 */
export interface WebhookRule {
  /**
   * @schema WebhookRule#Trigger
   */
  readonly trigger: WebhookTrigger;

  /**
   * @schema WebhookRule#Filters
   */
  readonly filters?: any[];

  /**
   * The action associated with this rule
   *
   * @schema WebhookRule#Action
   */
  readonly action?: string;

  /**
   * @schema WebhookRule#Config
   */
  readonly config?: WebhookConfig;
}

/**
 * Converts an object of type 'WebhookRule' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_WebhookRule(obj: WebhookRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trigger': obj.trigger,
    'Filters': obj.filters?.map(y => y),
    'Action': obj.action,
    'Config': toJson_WebhookConfig(obj.config),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * An error/ message is seen for the first time.
 *
 * @schema SlackTrigger
 */
export enum SlackTrigger {
  /** new_item */
  NEW_UNDERSCORE_ITEM = "new_item",
  /** occurrence */
  OCCURRENCE = "occurrence",
  /** deploy */
  DEPLOY = "deploy",
  /** reactivated_item */
  REACTIVATED_UNDERSCORE_ITEM = "reactivated_item",
  /** resolved_item */
  RESOLVED_UNDERSCORE_ITEM = "resolved_item",
  /** new_version */
  NEW_UNDERSCORE_VERSION = "new_version",
  /** reopened_item */
  REOPENED_UNDERSCORE_ITEM = "reopened_item",
  /** occurrence_rate */
  OCCURRENCE_UNDERSCORE_RATE = "occurrence_rate",
  /** exp_repeat_item */
  EXP_UNDERSCORE_REPEAT_UNDERSCORE_ITEM = "exp_repeat_item",
}

/**
 * An error/ message is seen for the first time.
 *
 * @schema PagerDutyTrigger
 */
export enum PagerDutyTrigger {
  /** new_item */
  NEW_UNDERSCORE_ITEM = "new_item",
  /** reactivated_item */
  REACTIVATED_UNDERSCORE_ITEM = "reactivated_item",
  /** resolved_item */
  RESOLVED_UNDERSCORE_ITEM = "resolved_item",
  /** occurrence_rate */
  OCCURRENCE_UNDERSCORE_RATE = "occurrence_rate",
  /** exp_repeat_item */
  EXP_UNDERSCORE_REPEAT_UNDERSCORE_ITEM = "exp_repeat_item",
}

/**
 * @schema PagerDutyConfig
 */
export interface PagerDutyConfig {
  /**
   * PagerDuty Service API Key
   *
   * @schema PagerDutyConfig#ServiceKey
   */
  readonly serviceKey?: string;
}

/**
 * Converts an object of type 'PagerDutyConfig' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PagerDutyConfig(obj: PagerDutyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceKey': obj.serviceKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * An error/ message is seen for the first time.
 *
 * @schema EmailTrigger
 */
export enum EmailTrigger {
  /** new_item */
  NEW_UNDERSCORE_ITEM = "new_item",
  /** occurrence */
  OCCURRENCE = "occurrence",
  /** deploy */
  DEPLOY = "deploy",
  /** reactivated_item */
  REACTIVATED_UNDERSCORE_ITEM = "reactivated_item",
  /** resolved_item */
  RESOLVED_UNDERSCORE_ITEM = "resolved_item",
  /** new_version */
  NEW_UNDERSCORE_VERSION = "new_version",
  /** reopened_item */
  REOPENED_UNDERSCORE_ITEM = "reopened_item",
  /** occurrence_rate */
  OCCURRENCE_UNDERSCORE_RATE = "occurrence_rate",
  /** exp_repeat_item */
  EXP_UNDERSCORE_REPEAT_UNDERSCORE_ITEM = "exp_repeat_item",
  /** daily_summary */
  DAILY_UNDERSCORE_SUMMARY = "daily_summary",
}

/**
 * An error/ message is seen for the first time.
 *
 * @schema WebhookTrigger
 */
export enum WebhookTrigger {
  /** new_item */
  NEW_UNDERSCORE_ITEM = "new_item",
  /** occurrence */
  OCCURRENCE = "occurrence",
  /** deploy */
  DEPLOY = "deploy",
  /** reactivated_item */
  REACTIVATED_UNDERSCORE_ITEM = "reactivated_item",
  /** resolved_item */
  RESOLVED_UNDERSCORE_ITEM = "resolved_item",
  /** exp_repeat_item */
  EXP_UNDERSCORE_REPEAT_UNDERSCORE_ITEM = "exp_repeat_item",
  /** reopened_item */
  REOPENED_UNDERSCORE_ITEM = "reopened_item",
  /** occurrence_rate */
  OCCURRENCE_UNDERSCORE_RATE = "occurrence_rate",
}

/**
 * @schema WebhookConfig
 */
export interface WebhookConfig {
  /**
   * Defines a webhook url for this specific rule
   *
   * @schema WebhookConfig#Url
   */
  readonly url?: string;

  /**
   * Request/response format can be JSON or XML
   *
   * @schema WebhookConfig#Format
   */
  readonly format?: string;
}

/**
 * Converts an object of type 'WebhookConfig' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_WebhookConfig(obj: WebhookConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'Format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `Rollbar::Notifications::Rule`
 *
 * @cloudformationResource Rollbar::Notifications::Rule
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
 */
export class CfnRule extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Rollbar::Notifications::Rule";

  /**
   * Resource props.
   */
  public readonly props: CfnRuleProps;

  /**
   * Attribute `Rollbar::Notifications::Rule.Id`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrId: number;
  /**
   * Attribute `Rollbar::Notifications::Rule.Trigger`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrTrigger: string;
  /**
   * Attribute `Rollbar::Notifications::Rule.Action`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrAction: string;
  /**
   * Attribute `Rollbar::Notifications::Rule.RuleType`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrRuleType: string;

  /**
   * Create a new `Rollbar::Notifications::Rule`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnRuleProps) {
    super(scope, id, { type: CfnRule.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnRuleProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asNumber(this.getAtt('Id'));
    this.attrTrigger = cdk.Token.asString(this.getAtt('Trigger'));
    this.attrAction = cdk.Token.asString(this.getAtt('Action'));
    this.attrRuleType = cdk.Token.asString(this.getAtt('RuleType'));
  }
}