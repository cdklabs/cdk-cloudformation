// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * A Cloudflare resource for managing a single DNS record
 *
 * @schema CfnRecordProps
 */
export interface CfnRecordProps {
  /**
   * Record type
   *
   * @schema CfnRecordProps#Type
   */
  readonly type: CfnRecordPropsType;

  /**
   * Extra Cloudflare-specific information about the record
   *
   * @schema CfnRecordProps#Meta
   */
  readonly meta?: any;

  /**
   * DNS record name (or @ for the zone apex)
   *
   * @schema CfnRecordProps#Name
   */
  readonly name: string;

  /**
   * Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1 for 'automatic'
   *
   * @schema CfnRecordProps#Ttl
   */
  readonly ttl: number;

  /**
   * Zone identifier tag
   *
   * @schema CfnRecordProps#ZoneId
   */
  readonly zoneId: string;

  /**
   * A valid IPv4 address
   *
   * @schema CfnRecordProps#Content
   */
  readonly content: string;

  /**
   * Whether the record is receiving the performance and security benefits of Cloudflare
   *
   * @schema CfnRecordProps#Proxied
   */
  readonly proxied?: boolean;
}

/**
 * Converts an object of type 'CfnRecordProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnRecordProps(obj: CfnRecordProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Meta': obj.meta,
    'Name': obj.name,
    'Ttl': obj.ttl,
    'ZoneId': obj.zoneId,
    'Content': obj.content,
    'Proxied': obj.proxied,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Record type
 *
 * @schema CfnRecordPropsType
 */
export enum CfnRecordPropsType {
  /** A */
  A = "A",
  /** AAAA */
  AAAA = "AAAA",
  /** CERT */
  CERT = "CERT",
  /** CNAME */
  CNAME = "CNAME",
  /** DNSKEY */
  DNSKEY = "DNSKEY",
  /** DS */
  DS = "DS",
  /** HTTPS */
  HTTPS = "HTTPS",
  /** LOC */
  LOC = "LOC",
  /** MX */
  MX = "MX",
  /** NAPTR */
  NAPTR = "NAPTR",
  /** NS */
  NS = "NS",
  /** SMIMEA */
  SMIMEA = "SMIMEA",
  /** SRV */
  SRV = "SRV",
  /** SSHFP */
  SSHFP = "SSHFP",
  /** SVCB */
  SVCB = "SVCB",
  /** TLSA */
  TLSA = "TLSA",
  /** TXT */
  TXT = "TXT",
  /** URI */
  URI = "URI",
}


/**
 * A CloudFormation `Cloudflare::Dns::Record`
 *
 * @cloudformationResource Cloudflare::Dns::Record
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
 */
export class CfnRecord extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Cloudflare::Dns::Record";

  /**
   * Resource props.
   */
  public readonly props: CfnRecordProps;

  /**
   * Attribute `Cloudflare::Dns::Record.Id`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrId: string;
  /**
   * Attribute `Cloudflare::Dns::Record.Locked`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrLocked: cdk.IResolvable;
  /**
   * Attribute `Cloudflare::Dns::Record.ModifiedOn`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrModifiedOn: string;
  /**
   * Attribute `Cloudflare::Dns::Record.CreatedOn`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrCreatedOn: string;
  /**
   * Attribute `Cloudflare::Dns::Record.Proxiable`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrProxiable: cdk.IResolvable;
  /**
   * Attribute `Cloudflare::Dns::Record.ZoneName`
   * @link https://github.com/aws-ia/cloudformation-cloudflare-resource-providers.git
   */
  public readonly attrZoneName: string;

  /**
   * Create a new `Cloudflare::Dns::Record`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnRecordProps) {
    super(scope, id, { type: CfnRecord.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnRecordProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrLocked = this.getAtt('Locked');
    this.attrModifiedOn = cdk.Token.asString(this.getAtt('ModifiedOn'));
    this.attrCreatedOn = cdk.Token.asString(this.getAtt('CreatedOn'));
    this.attrProxiable = this.getAtt('Proxiable');
    this.attrZoneName = cdk.Token.asString(this.getAtt('ZoneName'));
  }
}