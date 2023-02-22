// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Add people to an organization. Will create an invite and user will only become a member once they accept this invite.
 *
 * @schema CfnMembershipProps
 */
export interface CfnMembershipProps {
  /**
   * The Organization the user is being added to
   *
   * @schema CfnMembershipProps#Organization
   */
  readonly organization: string;

  /**
   * The handle for the GitHub user account
   *
   * @schema CfnMembershipProps#Username
   */
  readonly username: string;

  /**
   * The role for the new member.
   *
   * @schema CfnMembershipProps#Role
   */
  readonly role?: CfnMembershipPropsRole;

}

/**
 * Converts an object of type 'CfnMembershipProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnMembershipProps(obj: CfnMembershipProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Organization': obj.organization,
    'Username': obj.username,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The role for the new member.
 *
 * @schema CfnMembershipPropsRole
 */
export enum CfnMembershipPropsRole {
  /** admin */
  ADMIN = "admin",
  /** member */
  MEMBER = "member",
}


/**
 * A CloudFormation `GitHub::Organizations::Membership`
 *
 * @cloudformationResource GitHub::Organizations::Membership
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-github-resource-providers.git
 */
export class CfnMembership extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitHub::Organizations::Membership";

  /**
   * Resource props.
   */
  public readonly props: CfnMembershipProps;


  /**
   * Create a new `GitHub::Organizations::Membership`.
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