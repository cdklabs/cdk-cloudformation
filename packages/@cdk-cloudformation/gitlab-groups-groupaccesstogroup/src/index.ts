// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Adds a group as a member of another GitLab group
 *
 * @schema CfnGroupAccessToGroupProps
 */
export interface CfnGroupAccessToGroupProps {
  /**
   * ID of the group which should be shared, i.e. the group to which access is being granted
   *
   * @schema CfnGroupAccessToGroupProps#SharedGroupId
   */
  readonly sharedGroupId: number;

  /**
   * ID of the group to share with, i.e. the group being given access to another group
   *
   * @schema CfnGroupAccessToGroupProps#SharedWithGroupId
   */
  readonly sharedWithGroupId: number;

  /**
   * The access level to grant to the shared-with group for acessing the shared group, e.g. 'Guest', 'Developer', or 'Maintainer'. Note the GitLab API may not allow all values.
   *
   * @schema CfnGroupAccessToGroupProps#AccessLevel
   */
  readonly accessLevel: CfnGroupAccessToGroupPropsAccessLevel;

}

/**
 * Converts an object of type 'CfnGroupAccessToGroupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnGroupAccessToGroupProps(obj: CfnGroupAccessToGroupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SharedGroupId': obj.sharedGroupId,
    'SharedWithGroupId': obj.sharedWithGroupId,
    'AccessLevel': obj.accessLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The access level to grant to the shared-with group for acessing the shared group, e.g. 'Guest', 'Developer', or 'Maintainer'. Note the GitLab API may not allow all values.
 *
 * @schema CfnGroupAccessToGroupPropsAccessLevel
 */
export enum CfnGroupAccessToGroupPropsAccessLevel {
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
 * A CloudFormation `GitLab::Groups::GroupAccessToGroup`
 *
 * @cloudformationResource GitLab::Groups::GroupAccessToGroup
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
 */
export class CfnGroupAccessToGroup extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitLab::Groups::GroupAccessToGroup";

  /**
   * Resource props.
   */
  public readonly props: CfnGroupAccessToGroupProps;

  /**
   * Attribute `GitLab::Groups::GroupAccessToGroup.MembershipId`
   * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
   */
  public readonly attrMembershipId: string;

  /**
   * Create a new `GitLab::Groups::GroupAccessToGroup`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnGroupAccessToGroupProps) {
    super(scope, id, { type: CfnGroupAccessToGroup.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnGroupAccessToGroupProps(props)! });

    this.props = props;

    this.attrMembershipId = cdk.Token.asString(this.getAtt('MembershipId'));
  }
}