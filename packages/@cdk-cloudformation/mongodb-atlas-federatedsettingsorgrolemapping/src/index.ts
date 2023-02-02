// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Returns, adds, edits, and removes federation-related features such as role mappings and connected organization configurations.
 *
 * @schema CfnFederatedSettingsOrgRoleMappingProps
 */
export interface CfnFederatedSettingsOrgRoleMappingProps {
  /**
   * @schema CfnFederatedSettingsOrgRoleMappingProps#ApiKeys
   */
  readonly apiKeys: ApiKeyDefinition;

  /**
   * Unique human-readable label that identifies the identity provider group to whichthis role mapping applies.
   *
   * @schema CfnFederatedSettingsOrgRoleMappingProps#ExternalGroupName
   */
  readonly externalGroupName?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your federation.
   *
   * @schema CfnFederatedSettingsOrgRoleMappingProps#FederationSettingsId
   */
  readonly federationSettingsId: string;

  /**
   * Unique 24-hexadecimal digit string that identifies the organization that contains your projects.
   *
   * @schema CfnFederatedSettingsOrgRoleMappingProps#OrgId
   */
  readonly orgId: string;

  /**
   * Atlas roles and the unique identifiers of the groups and organizations associated with each role.
   *
   * @schema CfnFederatedSettingsOrgRoleMappingProps#RoleAssignments
   */
  readonly roleAssignments?: RoleAssignment[];

}

/**
 * Converts an object of type 'CfnFederatedSettingsOrgRoleMappingProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnFederatedSettingsOrgRoleMappingProps(obj: CfnFederatedSettingsOrgRoleMappingProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeys': toJson_ApiKeyDefinition(obj.apiKeys),
    'ExternalGroupName': obj.externalGroupName,
    'FederationSettingsId': obj.federationSettingsId,
    'OrgId': obj.orgId,
    'RoleAssignments': obj.roleAssignments?.map(y => toJson_RoleAssignment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema apiKeyDefinition
 */
export interface ApiKeyDefinition {
  /**
   * @schema apiKeyDefinition#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema apiKeyDefinition#PublicKey
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
 * @schema RoleAssignment
 */
export interface RoleAssignment {
  /**
   * List that contains comma-separated key value pairs to map zones to geographic regions. These pairs map an ISO 3166-1a2 location code, with an ISO 3166-2 subdivision code when possible, to a unique 24-hexadecimal string that identifies the custom zone.
   *
   * This parameter returns an empty object if no custom zones exist.
   *
   * @schema RoleAssignment#GroupId
   */
  readonly groupId?: string;

  /**
   * List that contains comma-separated key value pairs to map zones to geographic regions. These pairs map an ISO 3166-1a2 location code, with an ISO 3166-2 subdivision code when possible, to a unique 24-hexadecimal string that identifies the custom zone.
   *
   * This parameter returns an empty object if no custom zones exist.
   *
   * @schema RoleAssignment#OrgId
   */
  readonly orgId?: string;

  /**
   * @schema RoleAssignment#Role
   */
  readonly role?: RoleAssignmentRole;

}

/**
 * Converts an object of type 'RoleAssignment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoleAssignment(obj: RoleAssignment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'OrgId': obj.orgId,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoleAssignmentRole
 */
export enum RoleAssignmentRole {
  /** GLOBAL_AUTOMATION_ADMIN */
  GLOBAL_AUTOMATION_ADMIN = "GLOBAL_AUTOMATION_ADMIN",
  /** GLOBAL_BACKUP_ADMIN */
  GLOBAL_BACKUP_ADMIN = "GLOBAL_BACKUP_ADMIN",
  /** GLOBAL_METERING_USER */
  GLOBAL_METERING_USER = "GLOBAL_METERING_USER",
  /** GLOBAL_METRICS_INTERNAL_USER */
  GLOBAL_METRICS_INTERNAL_USER = "GLOBAL_METRICS_INTERNAL_USER",
  /** GLOBAL_MONITORING_ADMIN */
  GLOBAL_MONITORING_ADMIN = "GLOBAL_MONITORING_ADMIN",
  /** GLOBAL_OWNER */
  GLOBAL_OWNER = "GLOBAL_OWNER",
  /** GLOBAL_READ_ONLY */
  GLOBAL_READ_ONLY = "GLOBAL_READ_ONLY",
  /** GLOBAL_USER_ADMIN */
  GLOBAL_USER_ADMIN = "GLOBAL_USER_ADMIN",
  /** GLOBAL_USER_READ_ONLY */
  GLOBAL_USER_READ_ONLY = "GLOBAL_USER_READ_ONLY",
  /** GLOBAL_ACCOUNT_SUSPENSION_ADMIN */
  GLOBAL_ACCOUNT_SUSPENSION_ADMIN = "GLOBAL_ACCOUNT_SUSPENSION_ADMIN",
  /** GLOBAL_BILLING_ADMIN */
  GLOBAL_BILLING_ADMIN = "GLOBAL_BILLING_ADMIN",
  /** GLOBAL_LEGAL_ADMIN */
  GLOBAL_LEGAL_ADMIN = "GLOBAL_LEGAL_ADMIN",
  /** GLOBAL_FEATURE_FLAG_ADMIN */
  GLOBAL_FEATURE_FLAG_ADMIN = "GLOBAL_FEATURE_FLAG_ADMIN",
  /** GLOBAL_ATLAS_TSE */
  GLOBAL_ATLAS_TSE = "GLOBAL_ATLAS_TSE",
  /** GLOBAL_ATLAS_OPERATOR */
  GLOBAL_ATLAS_OPERATOR = "GLOBAL_ATLAS_OPERATOR",
  /** GLOBAL_ATLAS_ADMIN */
  GLOBAL_ATLAS_ADMIN = "GLOBAL_ATLAS_ADMIN",
  /** GLOBAL_STITCH_ADMIN */
  GLOBAL_STITCH_ADMIN = "GLOBAL_STITCH_ADMIN",
  /** GLOBAL_CHARTS_ADMIN */
  GLOBAL_CHARTS_ADMIN = "GLOBAL_CHARTS_ADMIN",
  /** GLOBAL_EXPERIMENT_ASSIGNMENT_USER */
  GLOBAL_EXPERIMENT_ASSIGNMENT_USER = "GLOBAL_EXPERIMENT_ASSIGNMENT_USER",
  /** GLOBAL_STITCH_INTERNAL_ADMIN */
  GLOBAL_STITCH_INTERNAL_ADMIN = "GLOBAL_STITCH_INTERNAL_ADMIN",
  /** GLOBAL_SECURITY_ADMIN */
  GLOBAL_SECURITY_ADMIN = "GLOBAL_SECURITY_ADMIN",
  /** GLOBAL_QUERY_ENGINE_INTERNAL_ADMIN */
  GLOBAL_QUERY_ENGINE_INTERNAL_ADMIN = "GLOBAL_QUERY_ENGINE_INTERNAL_ADMIN",
  /** GLOBAL_PROACTIVE_SUPPORT_ADMIN */
  GLOBAL_PROACTIVE_SUPPORT_ADMIN = "GLOBAL_PROACTIVE_SUPPORT_ADMIN",
  /** GLOBAL_INFRASTRUCTURE_INTERNAL_ADMIN */
  GLOBAL_INFRASTRUCTURE_INTERNAL_ADMIN = "GLOBAL_INFRASTRUCTURE_INTERNAL_ADMIN",
  /** GLOBAL_SALESFORCE_ADMIN */
  GLOBAL_SALESFORCE_ADMIN = "GLOBAL_SALESFORCE_ADMIN",
  /** GLOBAL_SALESFORCE_READ_ONLY */
  GLOBAL_SALESFORCE_READ_ONLY = "GLOBAL_SALESFORCE_READ_ONLY",
  /** GLOBAL_APP_SERVICES_CLUSTER_DEBUG_DATA_ACCESS */
  GLOBAL_APP_SERVICES_CLUSTER_DEBUG_DATA_ACCESS = "GLOBAL_APP_SERVICES_CLUSTER_DEBUG_DATA_ACCESS",
  /** ORG_MEMBER */
  ORG_MEMBER = "ORG_MEMBER",
  /** ORG_READ_ONLY */
  ORG_READ_ONLY = "ORG_READ_ONLY",
  /** ORG_BILLING_ADMIN */
  ORG_BILLING_ADMIN = "ORG_BILLING_ADMIN",
  /** ORG_GROUP_CREATOR */
  ORG_GROUP_CREATOR = "ORG_GROUP_CREATOR",
  /** ORG_OWNER */
  ORG_OWNER = "ORG_OWNER",
  /** GROUP_AUTOMATION_ADMIN */
  GROUP_AUTOMATION_ADMIN = "GROUP_AUTOMATION_ADMIN",
  /** GROUP_BACKUP_ADMIN */
  GROUP_BACKUP_ADMIN = "GROUP_BACKUP_ADMIN",
  /** GROUP_MONITORING_ADMIN */
  GROUP_MONITORING_ADMIN = "GROUP_MONITORING_ADMIN",
  /** GROUP_OWNER */
  GROUP_OWNER = "GROUP_OWNER",
  /** GROUP_READ_ONLY */
  GROUP_READ_ONLY = "GROUP_READ_ONLY",
  /** GROUP_USER_ADMIN */
  GROUP_USER_ADMIN = "GROUP_USER_ADMIN",
  /** GROUP_BILLING_ADMIN */
  GROUP_BILLING_ADMIN = "GROUP_BILLING_ADMIN",
  /** GROUP_DATA_ACCESS_ADMIN */
  GROUP_DATA_ACCESS_ADMIN = "GROUP_DATA_ACCESS_ADMIN",
  /** GROUP_DATA_ACCESS_READ_ONLY */
  GROUP_DATA_ACCESS_READ_ONLY = "GROUP_DATA_ACCESS_READ_ONLY",
  /** GROUP_DATA_ACCESS_READ_WRITE */
  GROUP_DATA_ACCESS_READ_WRITE = "GROUP_DATA_ACCESS_READ_WRITE",
  /** GROUP_CHARTS_ADMIN */
  GROUP_CHARTS_ADMIN = "GROUP_CHARTS_ADMIN",
  /** GROUP_CLUSTER_MANAGER */
  GROUP_CLUSTER_MANAGER = "GROUP_CLUSTER_MANAGER",
  /** GROUP_SEARCH_INDEX_EDITOR */
  GROUP_SEARCH_INDEX_EDITOR = "GROUP_SEARCH_INDEX_EDITOR",
}


/**
 * A CloudFormation `MongoDB::Atlas::FederatedSettingsOrgRoleMapping`
 *
 * @cloudformationResource MongoDB::Atlas::FederatedSettingsOrgRoleMapping
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
 */
export class CfnFederatedSettingsOrgRoleMapping extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::FederatedSettingsOrgRoleMapping";

  /**
   * Resource props.
   */
  public readonly props: CfnFederatedSettingsOrgRoleMappingProps;

  /**
   * Attribute `MongoDB::Atlas::FederatedSettingsOrgRoleMapping.Id`
   * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
   */
  public readonly attrId: string;

  /**
   * Create a new `MongoDB::Atlas::FederatedSettingsOrgRoleMapping`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnFederatedSettingsOrgRoleMappingProps) {
    super(scope, id, { type: CfnFederatedSettingsOrgRoleMapping.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnFederatedSettingsOrgRoleMappingProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}