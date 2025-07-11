// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Creates a tag against a code ref in GitLab
 *
 * @schema CfnTagProps
 */
export interface CfnTagProps {
  /**
   * The name of the tag to create
   *
   * @schema CfnTagProps#Name
   */
  readonly name: string;

  /**
   * The ID of the project which will be tagged
   *
   * @schema CfnTagProps#ProjectId
   */
  readonly projectId: number;

  /**
   * The reference to the code commit to be tagged, either a commit SHA ID or a branch name (to use the commit which is head of that branch at time of tag creation)
   *
   * @schema CfnTagProps#Ref
   */
  readonly ref: string;

  /**
   * A message to attach to the tag
   *
   * @schema CfnTagProps#Message
   */
  readonly message?: string;
}

/**
 * Converts an object of type 'CfnTagProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnTagProps(obj: CfnTagProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ProjectId': obj.projectId,
    'Ref': obj.ref,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `GitLab::Code::Tag`
 *
 * @cloudformationResource GitLab::Code::Tag
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
 */
export class CfnTag extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitLab::Code::Tag";

  /**
   * Resource props.
   */
  public readonly props: CfnTagProps;

  /**
   * Attribute `GitLab::Code::Tag.TagId`
   * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
   */
  public readonly attrTagId: string;
  /**
   * Attribute `GitLab::Code::Tag.CommitId`
   * @link https://github.com/aws-ia/cloudformation-gitlab-resource-providers.git
   */
  public readonly attrCommitId: string;

  /**
   * Create a new `GitLab::Code::Tag`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnTagProps) {
    super(scope, id, { type: CfnTag.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnTagProps(props)! });

    this.props = props;

    this.attrTagId = cdk.Token.asString(this.getAtt('TagId'));
    this.attrCommitId = cdk.Token.asString(this.getAtt('CommitId'));
  }
}