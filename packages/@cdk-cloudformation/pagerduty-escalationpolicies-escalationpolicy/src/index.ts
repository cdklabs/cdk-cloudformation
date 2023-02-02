// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage an escalation policy in PagerDuty.
 *
 * @schema CfnEscalationPolicyProps
 */
export interface CfnEscalationPolicyProps {
  /**
   * The name of the escalation policy.
   *
   * @schema CfnEscalationPolicyProps#Name
   */
  readonly name: string;

  /**
   * Escalation policy description.
   *
   * @schema CfnEscalationPolicyProps#Description
   */
  readonly description?: string;

  /**
   * The number of times the escalation policy will repeat after reaching the end of its escalation.
   *
   * @schema CfnEscalationPolicyProps#NumLoops
   */
  readonly numLoops?: number;

  /**
   * Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services".
   *
   * @default if_has_services".
   * @schema CfnEscalationPolicyProps#OnCallHandoffNotifications
   */
  readonly onCallHandoffNotifications?: CfnEscalationPolicyPropsOnCallHandoffNotifications;

  /**
   * @schema CfnEscalationPolicyProps#EscalationRules
   */
  readonly escalationRules: EscalationRule[];

  /**
   * Teams associated with the policy. Account must have the teams ability to use this parameter.
   *
   * @schema CfnEscalationPolicyProps#Teams
   */
  readonly teams?: Team[];

  /**
   * @schema CfnEscalationPolicyProps#Id
   */
  readonly id?: string;

  /**
   * @schema CfnEscalationPolicyProps#Summary
   */
  readonly summary?: string;

  /**
   * @schema CfnEscalationPolicyProps#HtmlUrl
   */
  readonly htmlUrl?: string;

}

/**
 * Converts an object of type 'CfnEscalationPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnEscalationPolicyProps(obj: CfnEscalationPolicyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'NumLoops': obj.numLoops,
    'OnCallHandoffNotifications': obj.onCallHandoffNotifications,
    'EscalationRules': obj.escalationRules?.map(y => toJson_EscalationRule(y)),
    'Teams': obj.teams?.map(y => toJson_Team(y)),
    'Id': obj.id,
    'Summary': obj.summary,
    'HtmlUrl': obj.htmlUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services".
 *
 * @default if_has_services".
 * @schema CfnEscalationPolicyPropsOnCallHandoffNotifications
 */
export enum CfnEscalationPolicyPropsOnCallHandoffNotifications {
  /** if_has_services */
  IF_HAS_SERVICES = "if_has_services",
  /** always */
  ALWAYS = "always",
}

/**
 * @schema EscalationRule
 */
export interface EscalationRule {
  /**
   * The number of minutes before an unacknowledged incident escalates away from this rule.
   *
   * @schema EscalationRule#EscalationDelayInMinutes
   */
  readonly escalationDelayInMinutes: number;

  /**
   * The targets an incident should be assigned to upon reaching this rule.
   *
   * @schema EscalationRule#Targets
   */
  readonly targets: Target[];

}

/**
 * Converts an object of type 'EscalationRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EscalationRule(obj: EscalationRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EscalationDelayInMinutes': obj.escalationDelayInMinutes,
    'Targets': obj.targets?.map(y => toJson_Target(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Team
 */
export interface Team {
  /**
   * A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference./, =, +, and -.
   *
   * @schema Team#Type
   */
  readonly type: TeamType;

  /**
   * @schema Team#Id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Team' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Team(obj: Team | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Target
 */
export interface Target {
  /**
   * A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference./, =, +, and -.
   *
   * @schema Target#Type
   */
  readonly type: TargetType;

  /**
   * @schema Target#Id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'Target' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Target(obj: Target | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference./, =, +, and -.
 *
 * @schema TeamType
 */
export enum TeamType {
  /** team_reference */
  TEAM_REFERENCE = "team_reference",
}

/**
 * A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference./, =, +, and -.
 *
 * @schema TargetType
 */
export enum TargetType {
  /** user */
  USER = "user",
  /** schedule */
  SCHEDULE = "schedule",
  /** user_reference */
  USER_REFERENCE = "user_reference",
  /** schedule_reference */
  SCHEDULE_REFERENCE = "schedule_reference",
}


/**
 * A CloudFormation `PagerDuty::EscalationPolicies::EscalationPolicy`
 *
 * @cloudformationResource PagerDuty::EscalationPolicies::EscalationPolicy
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-pagerduty-resource-providers.git
 */
export class CfnEscalationPolicy extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "PagerDuty::EscalationPolicies::EscalationPolicy";

  /**
   * Resource props.
   */
  public readonly props: CfnEscalationPolicyProps;

  /**
   * Attribute `PagerDuty::EscalationPolicies::EscalationPolicy.Type`
   * @link https://github.com/aws-ia/cloudformation-pagerduty-resource-providers.git
   */
  public readonly attrType: string;

  /**
   * Create a new `PagerDuty::EscalationPolicies::EscalationPolicy`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnEscalationPolicyProps) {
    super(scope, id, { type: CfnEscalationPolicy.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnEscalationPolicyProps(props)! });

    this.props = props;

    this.attrType = cdk.Token.asString(this.getAtt('Type'));
  }
}