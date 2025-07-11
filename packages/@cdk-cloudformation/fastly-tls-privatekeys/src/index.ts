// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage the Tls Private Key upload
 *
 * @schema CfnPrivateKeysProps
 */
export interface CfnPrivateKeysProps {
  /**
   * Resource type. [Default tls_private_key]
   *
   * @schema CfnPrivateKeysProps#Type
   */
  readonly type?: CfnPrivateKeysPropsType;

  /**
   * @schema CfnPrivateKeysProps#Attributes
   */
  readonly attributes: Attributes;
}

/**
 * Converts an object of type 'CfnPrivateKeysProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnPrivateKeysProps(obj: CfnPrivateKeysProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Attributes': toJson_Attributes(obj.attributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Resource type. [Default tls_private_key]
 *
 * @schema CfnPrivateKeysPropsType
 */
export enum CfnPrivateKeysPropsType {
  /** tls_private_key */
  TLS_UNDERSCORE_PRIVATE_UNDERSCORE_KEY = "tls_private_key",
}

/**
 * @schema Attributes
 */
export interface Attributes {
  /**
   * The contents of the private key. Must be a PEM-formatted key. Not returned in response body.
   *
   * @schema Attributes#Key
   */
  readonly key: string;

  /**
   * A customizable name for your private key
   *
   * @schema Attributes#Name
   */
  readonly name?: string;

  /**
   * @schema Attributes#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema Attributes#KeyLength
   */
  readonly keyLength?: number;

  /**
   * @schema Attributes#PublicKeySha1
   */
  readonly publicKeySha1?: string;

  /**
   * @schema Attributes#Replace
   */
  readonly replace?: boolean;

  /**
   * @schema Attributes#CreatedAt
   */
  readonly createdAt?: Date;
}

/**
 * Converts an object of type 'Attributes' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_Attributes(obj: Attributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Name': obj.name,
    'KeyType': obj.keyType,
    'KeyLength': obj.keyLength,
    'PublicKeySha1': obj.publicKeySha1,
    'Replace': obj.replace,
    'CreatedAt': obj.createdAt?.toISOString(),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `Fastly::Tls::PrivateKeys`
 *
 * @cloudformationResource Fastly::Tls::PrivateKeys
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-fastly-resource-providers
 */
export class CfnPrivateKeys extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Fastly::Tls::PrivateKeys";

  /**
   * Resource props.
   */
  public readonly props: CfnPrivateKeysProps;

  /**
   * Attribute `Fastly::Tls::PrivateKeys.Id`
   * @link https://github.com/aws-ia/cloudformation-fastly-resource-providers
   */
  public readonly attrId: string;

  /**
   * Create a new `Fastly::Tls::PrivateKeys`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnPrivateKeysProps) {
    super(scope, id, { type: CfnPrivateKeys.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnPrivateKeysProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
  }
}