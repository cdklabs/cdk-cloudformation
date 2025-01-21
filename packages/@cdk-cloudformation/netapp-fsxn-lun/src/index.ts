// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * A LUN (Logical unit number) is a block storage object within a volume, used to provide storage for applications that require block-level access. A LUN will appear as a virtual disk to the connected host and can be formatted with a file system or used as raw storage, enabling precise control over storage resources and performance for specific workloads. Once activated, you will need a preview key to consume this resource. Please reach out to Ng-fsx-cloudformation@netapp.com to get the key. To use this resource, you would need to first create the Link module.
 *
 * @schema CfnLunProps
 */
export interface CfnLunProps {
  /**
   * The password source for the FSx admin user.
   *
   * @schema CfnLunProps#FsxAdminPasswordSource
   */
  readonly fsxAdminPasswordSource: PasswordSource;

  /**
   * The file system ID of the Amazon FSx for NetApp ONTAP file system in which the resource is created.
   *
   * @schema CfnLunProps#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * The ARN of the AWS Lambda function that will be invoked to manage the resource.
   *
   * @schema CfnLunProps#LinkArn
   */
  readonly linkArn: string;

  /**
   * The fully qualified path name of the LUN composed of a '/vol' prefix, the volume name, and base name of the LUN. Example: /vol/volume1/lun1
   *
   * @schema CfnLunProps#Name
   */
  readonly name: string;

  /**
   * The name of the QoS policy for the LUN.
   *
   * @schema CfnLunProps#QosPolicyName
   */
  readonly qosPolicyName?: string;

  /**
   * Size of the LUN. Required when creating a non-clone LUN and disallowed when creating a clone of an existing LUN. A clone's size is taken from the source LUN.
   *
   * @schema CfnLunProps#Size
   */
  readonly size: number;

  /**
   * The initiator groups mapped to this LUN.
   *
   * @schema CfnLunProps#IGroups
   */
  readonly iGroups?: string[];

  /**
   * The SVM information associated with the LUN.
   *
   * @schema CfnLunProps#SVM
   */
  readonly svm: Svm;

  /**
   * The host operating system of the initiator group. All initiators in the group should be hosts of the same operating system.
   *
   * @schema CfnLunProps#OsType
   */
  readonly osType: CfnLunPropsOsType;

}

/**
 * Converts an object of type 'CfnLunProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLunProps(obj: CfnLunProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FsxAdminPasswordSource': toJson_PasswordSource(obj.fsxAdminPasswordSource),
    'FileSystemId': obj.fileSystemId,
    'LinkArn': obj.linkArn,
    'Name': obj.name,
    'QosPolicyName': obj.qosPolicyName,
    'Size': obj.size,
    'IGroups': obj.iGroups?.map(y => y),
    'SVM': toJson_Svm(obj.svm),
    'OsType': obj.osType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PasswordSource
 */
export interface PasswordSource {
  /**
   * A reference to the source of the password, typically an AWS Secrets Manager secret.
   *
   * @schema PasswordSource#Secret
   */
  readonly secret: SecretSource;

}

/**
 * Converts an object of type 'PasswordSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PasswordSource(obj: PasswordSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Secret': toJson_SecretSource(obj.secret),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SVM
 */
export interface Svm {
  /**
   * The name of the SVM.
   *
   * @schema SVM#Name
   */
  readonly name?: string;

  /**
   * The UUID of the SVM.
   *
   * @schema SVM#UUID
   */
  readonly uuid?: string;

}

/**
 * Converts an object of type 'Svm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Svm(obj: Svm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'UUID': obj.uuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The host operating system of the initiator group. All initiators in the group should be hosts of the same operating system.
 *
 * @schema CfnLunPropsOsType
 */
export enum CfnLunPropsOsType {
  /** aix */
  AIX = "aix",
  /** hpux */
  HPUX = "hpux",
  /** hyper_v */
  HYPER_UNDERSCORE_V = "hyper_v",
  /** linux */
  LINUX = "linux",
  /** netware */
  NETWARE = "netware",
  /** openvms */
  OPENVMS = "openvms",
  /** solaris */
  SOLARIS = "solaris",
  /** solaris_efi */
  SOLARIS_UNDERSCORE_EFI = "solaris_efi",
  /** vmware */
  VMWARE = "vmware",
  /** windows */
  WINDOWS = "windows",
  /** windows_2008 */
  WINDOWS_UNDERSCORE_2008 = "windows_2008",
  /** windows_gpt */
  WINDOWS_UNDERSCORE_GPT = "windows_gpt",
  /** xen */
  XEN = "xen",
}

/**
 * @schema SecretSource
 */
export interface SecretSource {
  /**
   * The ARN of the secret stored in AWS Secrets Manager.
   *
   * @schema SecretSource#SecretArn
   */
  readonly secretArn: string;

  /**
   * Reference for the SecretKey. The actual password is stored in AWS Secret Manager.
   *
   * @schema SecretSource#SecretKey
   */
  readonly secretKey: string;

}

/**
 * Converts an object of type 'SecretSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretSource(obj: SecretSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretArn': obj.secretArn,
    'SecretKey': obj.secretKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `NetApp::FSxN::Lun`
 *
 * @cloudformationResource NetApp::FSxN::Lun
 * @stability external
 * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
 */
export class CfnLun extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NetApp::FSxN::Lun";

  /**
   * Resource props.
   */
  public readonly props: CfnLunProps;

  /**
   * Attribute `NetApp::FSxN::Lun.UUID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrUuid: string;

  /**
   * Create a new `NetApp::FSxN::Lun`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnLunProps) {
    super(scope, id, { type: CfnLun.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnLunProps(props)! });

    this.props = props;

    this.attrUuid = cdk.Token.asString(this.getAtt('UUID'));
  }
}