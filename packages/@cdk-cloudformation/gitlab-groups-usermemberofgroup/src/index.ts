// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Adds a user as a member of a GitLab group
 *
 * @schema CfnUserMemberOfGroupProps
 */
export interface CfnUserMemberOfGroupProps {
  /**
   * ID of the group to which the user should be added
   *
   * @schema CfnUserMemberOfGroupProps#GroupId
   */
  readonly groupId: number;

  /**
   * ID (numeric) of the user to add to the group. Either this or Username but not both should be supplied.
   *
   * @schema CfnUserMemberOfGroupProps#UserId
   */
  readonly userId?: number;

  /**
   * Username (handle, e.g. often written starting with '@') of the user to add to the group. Either this or the UserId but not both should be supplied.
   *
   * @schema CfnUserMemberOfGroupProps#Username
   */
  readonly username?: string;

  /**
   * The access level to grant to this user in the group, e.g. 'Guest', 'Developer', or 'Maintainer'. Note the GitLab API may not allow all values.
   *
   * @schema CfnUserMemberOfGroupProps#AccessLevel
   */
  readonly accessLevel: CfnUserMemberOfGroupPropsAccessLevel;

}

/**
 * Converts an object of type 'CfnUserMemberOfGroupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnUserMemberOfGroupProps(obj: CfnUserMemberOfGroupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'UserId': obj.userId,
    'Username': obj.username,
    'AccessLevel': obj.accessLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The access level to grant to this user in the group, e.g. 'Guest', 'Developer', or 'Maintainer'. Note the GitLab API may not allow all values.
 *
 * @schema CfnUserMemberOfGroupPropsAccessLevel
 */
export enum CfnUserMemberOfGroupPropsAccessLevel {
  /** None */
  NONE = "None",
  /** Minimal Access */
  MINIMAL_ACCESS = "Minimal Access",
  /** Guest */
  GUEST = "Guest",
  /** Reporter */
  REPORTER = "Reporter",
  /** Developer */
  DEVELOPER = "Developer",
  /** Maintainer */
  MAINTAINER = "Maintainer",
  /** Owner */
  OWNER = "Owner",
  /** Admin */
  ADMIN = "Admin",
}


/**
 * A CloudFormation `GitLab::Groups::UserMemberOfGroup`
 *
 * @cloudformationResource GitLab::Groups::UserMemberOfGroup
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
 */
export class CfnUserMemberOfGroup extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitLab::Groups::UserMemberOfGroup";

  /**
   * Resource props.
   */
  public readonly props: CfnUserMemberOfGroupProps;

  /**
   * Attribute `GitLab::Groups::UserMemberOfGroup.MembershipId`
   * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
   */
  public readonly attrMembershipId: string;

  /**
   * Create a new `GitLab::Groups::UserMemberOfGroup`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnUserMemberOfGroupProps) {
    super(scope, id, { type: CfnUserMemberOfGroup.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnUserMemberOfGroupProps(props)! });

    this.props = props;

    this.attrMembershipId = cdk.Token.asString(this.getAtt('MembershipId'));
  }
}