// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * The Collaborators resource allows you to add, invite, and remove collaborators from a repository.
 *
 * @schema CfnCollaboratorProps
 */
export interface CfnCollaboratorProps {
  /**
   * The account owner of the repository. The name is not case sensitive.
   *
   * @schema CfnCollaboratorProps#Owner
   */
  readonly owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   *
   * @schema CfnCollaboratorProps#Repository
   */
  readonly repository: string;

  /**
   * The handle for the GitHub user account.
   *
   * @schema CfnCollaboratorProps#Username
   */
  readonly username: string;

  /**
   * The permission to grant the collaborator. Only valid on organization-owned repositories. In addition to the enumerated values, you can also specify a custom repository role name, if the owning organization has defined any..
   *
   * @schema CfnCollaboratorProps#Permission
   */
  readonly permission?: CfnCollaboratorPropsPermission;

}

/**
 * Converts an object of type 'CfnCollaboratorProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCollaboratorProps(obj: CfnCollaboratorProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': obj.owner,
    'Repository': obj.repository,
    'Username': obj.username,
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The permission to grant the collaborator. Only valid on organization-owned repositories. In addition to the enumerated values, you can also specify a custom repository role name, if the owning organization has defined any..
 *
 * @schema CfnCollaboratorPropsPermission
 */
export enum CfnCollaboratorPropsPermission {
  /** pull */
  PULL = "pull",
  /** push */
  PUSH = "push",
  /** admin */
  ADMIN = "admin",
  /** maintain */
  MAINTAIN = "maintain",
  /** triage */
  TRIAGE = "triage",
}


/**
 * A CloudFormation `GitHub::Repositories::Collaborator`
 *
 * @cloudformationResource GitHub::Repositories::Collaborator
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-github-resource-providers.git
 */
export class CfnCollaborator extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitHub::Repositories::Collaborator";

  /**
   * Resource props.
   */
  public readonly props: CfnCollaboratorProps;


  /**
   * Create a new `GitHub::Repositories::Collaborator`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnCollaboratorProps) {
    super(scope, id, { type: CfnCollaborator.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnCollaboratorProps(props)! });

    this.props = props;

  }
}