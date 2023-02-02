// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Returns, adds, and edits organizational units in MongoDB Cloud.
 *
 * @schema CfnOrgInvitationProps
 */
export interface CfnOrgInvitationProps {
  /**
   * @schema CfnOrgInvitationProps#ApiKeys
   */
  readonly apiKeys?: ApiKeyDefinition;

  /**
   * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
   *
   * @schema CfnOrgInvitationProps#IncludeCount
   */
  readonly includeCount?: boolean;

  /**
   * Unique 24-hexadecimal digit string that identifies the invitation.
   *
   * @schema CfnOrgInvitationProps#InvitationId
   */
  readonly invitationId?: string;

  /**
   * Number of items that the response returns per page.
   *
   * @schema CfnOrgInvitationProps#ItemsPerPage
   */
  readonly itemsPerPage?: number;

  /**
   * Unique 24-hexadecimal digit string that identifies the organization that contains your projects.
   *
   * @schema CfnOrgInvitationProps#OrgId
   */
  readonly orgId?: string;

  /**
   * Human-readable label that identifies this organization.
   *
   * @schema CfnOrgInvitationProps#OrgName
   */
  readonly orgName?: string;

  /**
   * Number of the page that displays the current set of the total objects that the response returns.
   *
   * @schema CfnOrgInvitationProps#PageNum
   */
  readonly pageNum?: number;

  /**
   * One or more organization or project level roles to assign to the MongoDB Cloud user.
   *
   * @schema CfnOrgInvitationProps#Roles
   */
  readonly roles?: CfnOrgInvitationPropsRoles[];

  /**
   * List of unique 24-hexadecimal digit strings that identifies each team.
   *
   * @schema CfnOrgInvitationProps#TeamIds
   */
  readonly teamIds?: string[];

  /**
   * Number of documents returned in this response.
   *
   * @schema CfnOrgInvitationProps#TotalCount
   */
  readonly totalCount?: number;

  /**
   * Email address of the MongoDB Cloud user invited to join the organization.
   *
   * @schema CfnOrgInvitationProps#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'CfnOrgInvitationProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnOrgInvitationProps(obj: CfnOrgInvitationProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeys': toJson_ApiKeyDefinition(obj.apiKeys),
    'IncludeCount': obj.includeCount,
    'InvitationId': obj.invitationId,
    'ItemsPerPage': obj.itemsPerPage,
    'OrgId': obj.orgId,
    'OrgName': obj.orgName,
    'PageNum': obj.pageNum,
    'Roles': obj.roles?.map(y => y),
    'TeamIds': obj.teamIds?.map(y => y),
    'TotalCount': obj.totalCount,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiKeyDefinition
 */
export interface ApiKeyDefinition {
  /**
   * @schema ApiKeyDefinition#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema ApiKeyDefinition#PublicKey
   */
  readonly publicKey?: string;

}

/**
 * Converts an object of type 'ApiKeyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKeyDefinition(obj: ApiKeyDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateKey': obj.privateKey,
    'PublicKey': obj.publicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnOrgInvitationPropsRoles
 */
export enum CfnOrgInvitationPropsRoles {
  /** ORG_OWNER */
  ORG_OWNER = "ORG_OWNER",
  /** ORG_MEMBER */
  ORG_MEMBER = "ORG_MEMBER",
  /** ORG_GROUP_CREATOR */
  ORG_GROUP_CREATOR = "ORG_GROUP_CREATOR",
  /** ORG_BILLING_ADMIN */
  ORG_BILLING_ADMIN = "ORG_BILLING_ADMIN",
  /** ORG_READ_ONLY */
  ORG_READ_ONLY = "ORG_READ_ONLY",
  /** GROUP_CLUSTER_MANAGER */
  GROUP_CLUSTER_MANAGER = "GROUP_CLUSTER_MANAGER",
  /** GROUP_DATA_ACCESS_ADMIN */
  GROUP_DATA_ACCESS_ADMIN = "GROUP_DATA_ACCESS_ADMIN",
  /** GROUP_DATA_ACCESS_READ_ONLY */
  GROUP_DATA_ACCESS_READ_ONLY = "GROUP_DATA_ACCESS_READ_ONLY",
  /** GROUP_DATA_ACCESS_READ_WRITE */
  GROUP_DATA_ACCESS_READ_WRITE = "GROUP_DATA_ACCESS_READ_WRITE",
  /** GROUP_OWNER */
  GROUP_OWNER = "GROUP_OWNER",
  /** GROUP_READ_ONLY */
  GROUP_READ_ONLY = "GROUP_READ_ONLY",
}


/**
 * A CloudFormation `MongoDB::Atlas::OrgInvitation`
 *
 * @cloudformationResource MongoDB::Atlas::OrgInvitation
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
 */
export class CfnOrgInvitation extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::OrgInvitation";

  /**
   * Resource props.
   */
  public readonly props: CfnOrgInvitationProps;

  /**
   * Attribute `MongoDB::Atlas::OrgInvitation.ExpiresAt`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrExpiresAt: string;
  /**
   * Attribute `MongoDB::Atlas::OrgInvitation.Id`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::OrgInvitation.CreatedAt`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrCreatedAt: string;
  /**
   * Attribute `MongoDB::Atlas::OrgInvitation.InviterUsername`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrInviterUsername: string;

  /**
   * Create a new `MongoDB::Atlas::OrgInvitation`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnOrgInvitationProps) {
    super(scope, id, { type: CfnOrgInvitation.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnOrgInvitationProps(props)! });

    this.props = props;

    this.attrExpiresAt = cdk.Token.asString(this.getAtt('ExpiresAt'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrCreatedAt = cdk.Token.asString(this.getAtt('CreatedAt'));
    this.attrInviterUsername = cdk.Token.asString(this.getAtt('InviterUsername'));
  }
}