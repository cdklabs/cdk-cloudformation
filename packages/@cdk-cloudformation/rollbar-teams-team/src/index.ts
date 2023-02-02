// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a team on Rollbar.
 *
 * @schema CfnTeamProps
 */
export interface CfnTeamProps {
  /**
   * Name of the team. Max length 32 characters.
   *
   * @schema CfnTeamProps#Name
   */
  readonly name: string;

  /**
   * Can be standard, light, or view.
   *
   * @schema CfnTeamProps#AccessLevel
   */
  readonly accessLevel: CfnTeamPropsAccessLevel;

}

/**
 * Converts an object of type 'CfnTeamProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnTeamProps(obj: CfnTeamProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'AccessLevel': obj.accessLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Can be standard, light, or view.
 *
 * @schema CfnTeamPropsAccessLevel
 */
export enum CfnTeamPropsAccessLevel {
  /** standard */
  STANDARD = "standard",
  /** light */
  LIGHT = "light",
  /** view */
  VIEW = "view",
}


/**
 * A CloudFormation `Rollbar::Teams::Team`
 *
 * @cloudformationResource Rollbar::Teams::Team
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
 */
export class CfnTeam extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Rollbar::Teams::Team";

  /**
   * Resource props.
   */
  public readonly props: CfnTeamProps;

  /**
   * Attribute `Rollbar::Teams::Team.Id`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrId: number;
  /**
   * Attribute `Rollbar::Teams::Team.AccountId`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrAccountId: number;

  /**
   * Create a new `Rollbar::Teams::Team`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnTeamProps) {
    super(scope, id, { type: CfnTeam.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnTeamProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asNumber(this.getAtt('Id'));
    this.attrAccountId = cdk.Token.asNumber(this.getAtt('AccountId'));
  }
}