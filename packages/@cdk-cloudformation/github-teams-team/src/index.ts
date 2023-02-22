// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a team in Github
 *
 * @schema CfnTeamProps
 */
export interface CfnTeamProps {
  /**
   * Team name
   *
   * @schema CfnTeamProps#Name
   */
  readonly name: string;

  /**
   * The Organization that the team will belong to
   *
   * @schema CfnTeamProps#Organization
   */
  readonly organization: string;

  /**
   * Describe the team
   *
   * @schema CfnTeamProps#Description
   */
  readonly description?: string;

  /**
   * The privacy for the team - must be either secret or closed
   *
   * @schema CfnTeamProps#Privacy
   */
  readonly privacy?: CfnTeamPropsPrivacy;

}

/**
 * Converts an object of type 'CfnTeamProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnTeamProps(obj: CfnTeamProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Organization': obj.organization,
    'Description': obj.description,
    'Privacy': obj.privacy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The privacy for the team - must be either secret or closed
 *
 * @schema CfnTeamPropsPrivacy
 */
export enum CfnTeamPropsPrivacy {
  /** secret */
  SECRET = "secret",
  /** closed */
  CLOSED = "closed",
}


/**
 * A CloudFormation `GitHub::Teams::Team`
 *
 * @cloudformationResource GitHub::Teams::Team
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-github-resource-providers.git
 */
export class CfnTeam extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "GitHub::Teams::Team";

  /**
   * Resource props.
   */
  public readonly props: CfnTeamProps;

  /**
   * Attribute `GitHub::Teams::Team.Slug`
   * @link https://github.com/aws-ia/cloudformation-github-resource-providers.git
   */
  public readonly attrSlug: string;

  /**
   * Create a new `GitHub::Teams::Team`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnTeamProps) {
    super(scope, id, { type: CfnTeam.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnTeamProps(props)! });

    this.props = props;

    this.attrSlug = cdk.Token.asString(this.getAtt('Slug'));
  }
}