// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Allows for the creation and modification of a Snowflake User. https://docs.snowflake.com/en/user-guide/admin-user-management.html
 *
 * @schema CfnUserProps
 */
export interface CfnUserProps {
  /**
   * Identifier for the user; must be unique for your account.
   *
   * @schema CfnUserProps#Name
   */
  readonly name: string;

  /**
   * The password for the user
   *
   * @schema CfnUserProps#Password
   */
  readonly password: string;

  /**
   * Name that the user enters to log into the system. Login names for users must be unique across your entire account.
   *
   * @schema CfnUserProps#LoginName
   */
  readonly loginName?: string;

  /**
   * Name displayed for the user in the Snowflake web interface.
   *
   * @schema CfnUserProps#DisplayName
   */
  readonly displayName?: string;

  /**
   * First name of the user.
   *
   * @schema CfnUserProps#FirstName
   */
  readonly firstName?: string;

  /**
   * Middle name of the user.
   *
   * @schema CfnUserProps#MiddleName
   */
  readonly middleName?: string;

  /**
   * Last name of the user.
   *
   * @schema CfnUserProps#LastName
   */
  readonly lastName?: string;

  /**
   * Email address for the user.
   *
   * @schema CfnUserProps#Email
   */
  readonly email?: string;

  /**
   * Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.
   *
   * @schema CfnUserProps#MustChangePassword
   */
  readonly mustChangePassword?: boolean;

  /**
   * Specifies whether the user is disabled.
   *
   * @schema CfnUserProps#Disabled
   */
  readonly disabled?: boolean;

  /**
   * Specifies the number of days after which the user status is set to Expired and the user is no longer allowed to log in.
   *
   * @schema CfnUserProps#DaysToExpiry
   */
  readonly daysToExpiry?: number;

  /**
   * Specifies the number of minutes until the temporary lock on the user login is cleared.
   *
   * @schema CfnUserProps#MinsToUnlock
   */
  readonly minsToUnlock?: number;

  /**
   * Specifies the namespace (database only or database and schema) that is active by default for the user's session upon login.
   *
   * @schema CfnUserProps#DefaultWarehouse
   */
  readonly defaultWarehouse?: string;

  /**
   * Specifies the primary role that is active by default for the user's session upon login.
   *
   * @schema CfnUserProps#DefaultRole
   */
  readonly defaultRole?: string;

  /**
   * Specifies the number of minutes to temporarily bypass MFA for the user.
   *
   * @schema CfnUserProps#MinsToBypassMfa
   */
  readonly minsToBypassMfa?: number;

  /**
   * Specifies the user's RSA public key; used for key pair authentication.
   *
   * @schema CfnUserProps#RsaPublicKey
   */
  readonly rsaPublicKey?: string;

  /**
   * Specifies the user's second RSA public key; used to rotate the public and private keys for key pair authentication based on an expiration schedule set by your organization.
   *
   * @schema CfnUserProps#RsaPublicKey2
   */
  readonly rsaPublicKey2?: string;

  /**
   * Specifies a comment for the user.
   *
   * @schema CfnUserProps#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CfnUserProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnUserProps(obj: CfnUserProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Password': obj.password,
    'LoginName': obj.loginName,
    'DisplayName': obj.displayName,
    'FirstName': obj.firstName,
    'MiddleName': obj.middleName,
    'LastName': obj.lastName,
    'Email': obj.email,
    'MustChangePassword': obj.mustChangePassword,
    'Disabled': obj.disabled,
    'DaysToExpiry': obj.daysToExpiry,
    'MinsToUnlock': obj.minsToUnlock,
    'DefaultWarehouse': obj.defaultWarehouse,
    'DefaultRole': obj.defaultRole,
    'MinsToBypassMfa': obj.minsToBypassMfa,
    'RsaPublicKey': obj.rsaPublicKey,
    'RsaPublicKey2': obj.rsaPublicKey2,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Snowflake::User::User`
 *
 * @cloudformationResource Snowflake::User::User
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-snowflake-resource-providers.git
 */
export class CfnUser extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Snowflake::User::User";

  /**
   * Resource props.
   */
  public readonly props: CfnUserProps;


  /**
   * Create a new `Snowflake::User::User`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnUserProps) {
    super(scope, id, { type: CfnUser.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnUserProps(props)! });

    this.props = props;

  }
}