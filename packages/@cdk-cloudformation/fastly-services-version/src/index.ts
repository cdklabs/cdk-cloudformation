// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a Fastly service version.
 *
 * @schema CfnVersionProps
 */
export interface CfnVersionProps {
  /**
   * Alphanumeric string identifying the service. Read-only.
   *
   * @schema CfnVersionProps#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema CfnVersionProps#CreatedAt
   */
  readonly createdAt?: Date;

  /**
   * @schema CfnVersionProps#UpdatedAt
   */
  readonly updatedAt?: Date;

  /**
   * @schema CfnVersionProps#DeletedAt
   */
  readonly deletedAt?: Date;
}

/**
 * Converts an object of type 'CfnVersionProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnVersionProps(obj: CfnVersionProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'CreatedAt': obj.createdAt?.toISOString(),
    'UpdatedAt': obj.updatedAt?.toISOString(),
    'DeletedAt': obj.deletedAt?.toISOString(),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `Fastly::Services::Version`
 *
 * @cloudformationResource Fastly::Services::Version
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-fastly-resource-providers.git
 */
export class CfnVersion extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Fastly::Services::Version";

  /**
   * Resource props.
   */
  public readonly props: CfnVersionProps;

  /**
   * Attribute `Fastly::Services::Version.VersionNumber`
   * @link https://github.com/aws-ia/cloudformation-fastly-resource-providers.git
   */
  public readonly attrVersionNumber: number;

  /**
   * Create a new `Fastly::Services::Version`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnVersionProps) {
    super(scope, id, { type: CfnVersion.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnVersionProps(props)! });

    this.props = props;

    this.attrVersionNumber = cdk.Token.asNumber(this.getAtt('VersionNumber'));
  }
}