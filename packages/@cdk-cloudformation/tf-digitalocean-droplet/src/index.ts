// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Provides a DigitalOcean Droplet resource. This can be used to create,
 * modify, and delete Droplets. Droplets also support
 * [provisioning](https://www.terraform.io/docs/language/resources/provisioners/syntax.html).
 *
 * @schema CfnDropletProps
 */
export interface CfnDropletProps {
  /**
   * Boolean controlling if backups are made. Defaults to
   * false.
   *
   * @default false.
   * @schema CfnDropletProps#Backups
   */
  readonly backups?: boolean;

  /**
   * The Droplet image ID or slug.
   *
   * @schema CfnDropletProps#Image
   */
  readonly image: string;

  /**
   * Boolean controlling if IPv6 is enabled. Defaults to false.
   *
   * @default false.
   * @schema CfnDropletProps#Ipv6
   */
  readonly ipv6?: boolean;

  /**
   * Boolean controlling whether monitoring agent is installed.
   * Defaults to false.
   *
   * @default false.
   * @schema CfnDropletProps#Monitoring
   */
  readonly monitoring?: boolean;

  /**
   * The Droplet name.
   *
   * @schema CfnDropletProps#Name
   */
  readonly name: string;

  /**
   * Boolean controlling if private networking
   * is enabled. When VPC is enabled on an account, this will provision the
   * Droplet inside of your account's default VPC for the region. Use the
   * `vpc_uuid` attribute to specify a different VPC.
   *
   * @schema CfnDropletProps#PrivateNetworking
   */
  readonly privateNetworking?: boolean;

  /**
   * The region to start in.
   *
   * @schema CfnDropletProps#Region
   */
  readonly region: string;

  /**
   * Boolean controlling whether to increase the disk
   * size when resizing a Droplet. It defaults to `true`. When set to `false`,
   * only the Droplet's RAM and CPU will be resized. **Increasing a Droplet's disk
   * size is a permanent change**. Increasing only RAM and CPU is reversible.
   *
   * @schema CfnDropletProps#ResizeDisk
   */
  readonly resizeDisk?: boolean;

  /**
   * The unique slug that indentifies the type of Droplet. You can find a list of available slugs on [DigitalOcean API documentation](https://developers.digitalocean.com/documentation/v2/#list-all-sizes).
   *
   * @schema CfnDropletProps#Size
   */
  readonly size: string;

  /**
   * A list of SSH key IDs or fingerprints to enable in
   * the format `[12345, 123456]`. To retrieve this info, use the
   * [DigitalOcean API](https://docs.digitalocean.com/reference/api/api-reference/#tag/SSH-Keys)
   * or CLI (`doctl compute ssh-key list`). Once a Droplet is created keys can not
   * be added or removed via this provider. Modifying this field will prompt you
   * to destroy and recreate the Droplet.
   *
   * @schema CfnDropletProps#SshKeys
   */
  readonly sshKeys?: string[];

  /**
   * A list of the tags to be applied to this Droplet.
   *
   * @schema CfnDropletProps#Tags
   */
  readonly tags?: string[];

  /**
   * @schema CfnDropletProps#UserData
   */
  readonly userData?: string;

  /**
   * @schema CfnDropletProps#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * The ID of the VPC where the Droplet will be located.
   *
   * @schema CfnDropletProps#VpcUuid
   */
  readonly vpcUuid?: string;
}

/**
 * Converts an object of type 'CfnDropletProps' to JSON representation.
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CfnDropletProps(obj: CfnDropletProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Backups': obj.backups,
    'Image': obj.image,
    'Ipv6': obj.ipv6,
    'Monitoring': obj.monitoring,
    'Name': obj.name,
    'PrivateNetworking': obj.privateNetworking,
    'Region': obj.region,
    'ResizeDisk': obj.resizeDisk,
    'Size': obj.size,
    'SshKeys': obj.sshKeys?.map(y => y),
    'Tags': obj.tags?.map(y => y),
    'UserData': obj.userData,
    'VolumeIds': obj.volumeIds?.map(y => y),
    'VpcUuid': obj.vpcUuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */


/**
 * A CloudFormation `TF::DigitalOcean::Droplet`
 *
 * @cloudformationResource TF::DigitalOcean::Droplet
 * @stability external
 * @link https://github.com/iann0036/cfn-tf-custom-types.git
 */
export class CfnDroplet extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "TF::DigitalOcean::Droplet";

  /**
   * Resource props.
   */
  public readonly props: CfnDropletProps;

  /**
   * Attribute `TF::DigitalOcean::Droplet.tfcfnid`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrTfcfnid: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.CreatedAt`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrCreatedAt: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Disk`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrDisk: number;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Id`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrId: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Ipv4Address`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrIpv4Address: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Ipv4AddressPrivate`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrIpv4AddressPrivate: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Ipv6Address`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrIpv6Address: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Locked`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrLocked: cdk.IResolvable;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Memory`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrMemory: number;
  /**
   * Attribute `TF::DigitalOcean::Droplet.PriceHourly`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrPriceHourly: number;
  /**
   * Attribute `TF::DigitalOcean::Droplet.PriceMonthly`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrPriceMonthly: number;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Status`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrStatus: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Urn`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrUrn: string;
  /**
   * Attribute `TF::DigitalOcean::Droplet.Vcpus`
   * @link https://github.com/iann0036/cfn-tf-custom-types.git
   */
  public readonly attrVcpus: number;

  /**
   * Create a new `TF::DigitalOcean::Droplet`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnDropletProps) {
    super(scope, id, { type: CfnDroplet.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnDropletProps(props)! });

    this.props = props;

    this.attrTfcfnid = cdk.Token.asString(this.getAtt('tfcfnid'));
    this.attrCreatedAt = cdk.Token.asString(this.getAtt('CreatedAt'));
    this.attrDisk = cdk.Token.asNumber(this.getAtt('Disk'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrIpv4Address = cdk.Token.asString(this.getAtt('Ipv4Address'));
    this.attrIpv4AddressPrivate = cdk.Token.asString(this.getAtt('Ipv4AddressPrivate'));
    this.attrIpv6Address = cdk.Token.asString(this.getAtt('Ipv6Address'));
    this.attrLocked = this.getAtt('Locked');
    this.attrMemory = cdk.Token.asNumber(this.getAtt('Memory'));
    this.attrPriceHourly = cdk.Token.asNumber(this.getAtt('PriceHourly'));
    this.attrPriceMonthly = cdk.Token.asNumber(this.getAtt('PriceMonthly'));
    this.attrStatus = cdk.Token.asString(this.getAtt('Status'));
    this.attrUrn = cdk.Token.asString(this.getAtt('Urn'));
    this.attrVcpus = cdk.Token.asNumber(this.getAtt('Vcpus'));
  }
}