// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a membership of a user into a team in PagerDuty.
 *
 * @schema CfnMembershipProps
 */
export interface CfnMembershipProps {
  /**
   * @schema CfnMembershipProps#TeamId
   */
  readonly teamId: string;

  /**
   * @schema CfnMembershipProps#UserId
   */
  readonly userId: string;

  /**
   * @schema CfnMembershipProps#Role
   */
  readonly role?: Role;

}

/**
 * Converts an object of type 'CfnMembershipProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnMembershipProps(obj: CfnMembershipProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TeamId': obj.teamId,
    'UserId': obj.userId,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The role of the user on the team.
 *
 * @schema Role
 */
export enum Role {
  /** observer */
  OBSERVER = "observer",
  /** responder */
  RESPONDER = "responder",
  /** manager */
  MANAGER = "manager",
}


/**
 * A CloudFormation `PagerDuty::Teams::Membership`
 *
 * @cloudformationResource PagerDuty::Teams::Membership
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-pagerduty-resource-providers.git
 */
export class CfnMembership extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "PagerDuty::Teams::Membership";

  /**
   * Resource props.
   */
  public readonly props: CfnMembershipProps;


  /**
   * Create a new `PagerDuty::Teams::Membership`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnMembershipProps) {
    super(scope, id, { type: CfnMembership.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnMembershipProps(props)! });

    this.props = props;

  }
}