// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage an access token for a Rollbar project.
 *
 * @schema CfnAccessTokenProps
 */
export interface CfnAccessTokenProps {
  /**
   * The project ID
   *
   * @schema CfnAccessTokenProps#ProjectId
   */
  readonly projectId: number;

  /**
   * Name to identify the access token
   *
   * @schema CfnAccessTokenProps#Name
   */
  readonly name: string;

  /**
   * Scopes to assign to the create access token
   *
   * @schema CfnAccessTokenProps#Scopes
   */
  readonly scopes: CfnAccessTokenPropsScopes[];

  /**
   * Period of time (in seconds) for the rate limit configuration
   *
   * @schema CfnAccessTokenProps#RateLimitWindowSize
   */
  readonly rateLimitWindowSize?: number;

  /**
   * Number of requests for the defined rate limiting period
   *
   * @schema CfnAccessTokenProps#RateLimitWindowCount
   */
  readonly rateLimitWindowCount?: number;

}

/**
 * Converts an object of type 'CfnAccessTokenProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnAccessTokenProps(obj: CfnAccessTokenProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectId': obj.projectId,
    'Name': obj.name,
    'Scopes': obj.scopes?.map(y => y),
    'RateLimitWindowSize': obj.rateLimitWindowSize,
    'RateLimitWindowCount': obj.rateLimitWindowCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CfnAccessTokenPropsScopes
 */
export enum CfnAccessTokenPropsScopes {
  /** write */
  WRITE = "write",
  /** read */
  READ = "read",
  /** post_server_item */
  POST_UNDERSCORE_SERVER_UNDERSCORE_ITEM = "post_server_item",
  /** post_client_item */
  POST_UNDERSCORE_CLIENT_UNDERSCORE_ITEM = "post_client_item",
}


/**
 * A CloudFormation `Rollbar::Projects::AccessToken`
 *
 * @cloudformationResource Rollbar::Projects::AccessToken
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
 */
export class CfnAccessToken extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Rollbar::Projects::AccessToken";

  /**
   * Resource props.
   */
  public readonly props: CfnAccessTokenProps;

  /**
   * Attribute `Rollbar::Projects::AccessToken.AccessToken`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrAccessToken: string;
  /**
   * Attribute `Rollbar::Projects::AccessToken.Status`
   * @link https://github.com/aws-ia/cloudformation-rollbar-resource-providers.git
   */
  public readonly attrStatus: string;

  /**
   * Create a new `Rollbar::Projects::AccessToken`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnAccessTokenProps) {
    super(scope, id, { type: CfnAccessToken.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAccessTokenProps(props)! });

    this.props = props;

    this.attrAccessToken = cdk.Token.asString(this.getAtt('AccessToken'));
    this.attrStatus = cdk.Token.asString(this.getAtt('Status'));
  }
}