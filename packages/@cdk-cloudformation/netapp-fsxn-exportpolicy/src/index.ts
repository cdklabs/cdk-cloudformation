// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * An export policy defines a set of access rules for NFS clients, specifying which clients or networks can access a volume and with what permissions. Each volume is tied to an export policy which enforces these rules to control client access and provide security and management over FSx for ONTAP volumes. Once activated, you will need a preview key to consume this resource. Please reach out to Ng-fsx-cloudformation@netapp.com to get the key. To use this resource, you would need to first create the Link module.
 *
 * @schema CfnExportPolicyProps
 */
export interface CfnExportPolicyProps {
  /**
   * The password source for the FSx admin user.
   *
   * @schema CfnExportPolicyProps#FsxAdminPasswordSource
   */
  readonly fsxAdminPasswordSource: PasswordSource;

  /**
   * The file system ID of the Amazon FSx for NetApp ONTAP file system in which the resource is created.
   *
   * @schema CfnExportPolicyProps#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * The ARN of the AWS Lambda function that will be invoked to manage the resource.
   *
   * @schema CfnExportPolicyProps#LinkArn
   */
  readonly linkArn: string;

  /**
   * The name of the export policy.
   *
   * @schema CfnExportPolicyProps#Name
   */
  readonly name: string;

  /**
   * Rule(s) of an export policy. Used to create the export rule and populate the export policy with export rules in a single request.
   *
   * @schema CfnExportPolicyProps#Rules
   */
  readonly rules?: Rule[];

  /**
   * The SVM information associated with the export policy.
   *
   * @schema CfnExportPolicyProps#SVM
   */
  readonly svm: Svm;

}

/**
 * Converts an object of type 'CfnExportPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnExportPolicyProps(obj: CfnExportPolicyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FsxAdminPasswordSource': toJson_PasswordSource(obj.fsxAdminPasswordSource),
    'FileSystemId': obj.fileSystemId,
    'LinkArn': obj.linkArn,
    'Name': obj.name,
    'Rules': obj.rules?.map(y => toJson_Rule(y)),
    'SVM': toJson_Svm(obj.svm),
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
 * @schema Rule
 */
export interface Rule {
  /**
   * Specifies whether or not device creation is allowed.
   *
   * @schema Rule#AllowDeviceCreation
   */
  readonly allowDeviceCreation?: boolean;

  /**
   * Specifies whether or not SetUID bits in SETATTR Op is to be honored.
   *
   * @schema Rule#AllowSuid
   */
  readonly allowSuid?: boolean;

  /**
   * User ID to which anonymous users are mapped.
   *
   * @schema Rule#AnonymousUser
   */
  readonly anonymousUser?: string;

  /**
   * Specifies the chown mode, either 'restricted' or 'unrestricted'.
   *
   * @schema Rule#ChownMode
   */
  readonly chownMode?: RuleChownMode;

  /**
   * @schema Rule#Clients
   */
  readonly clients?: RuleClients[];

  /**
   * The index of the export rule in the export policy.
   *
   * @schema Rule#Index
   */
  readonly index?: number;

  /**
   * Specifies the NTFS Unix security options, either 'fail' or 'ignore'.
   *
   * @schema Rule#NtfsUnixSecurity
   */
  readonly ntfsUnixSecurity?: RuleNtfsUnixSecurity;

  /**
   * Access protocol(s) that the export rule describes.
   *
   * @schema Rule#Protocols
   */
  readonly protocols?: RuleProtocols[];

  /**
   * Authentication flavors that the read-only access rule governs.
   *
   * @schema Rule#RoRule
   */
  readonly roRule?: RuleRoRule[];

  /**
   * Authentication flavors that the read/write access rule governs.
   *
   * @schema Rule#RwRule
   */
  readonly rwRule?: RuleRwRule[];

  /**
   * Authentication flavors that the superuser security type governs.
   *
   * @schema Rule#Superuser
   */
  readonly superuser?: RuleSuperuser[];

}

/**
 * Converts an object of type 'Rule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Rule(obj: Rule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowDeviceCreation': obj.allowDeviceCreation,
    'AllowSuid': obj.allowSuid,
    'AnonymousUser': obj.anonymousUser,
    'ChownMode': obj.chownMode,
    'Clients': obj.clients?.map(y => toJson_RuleClients(y)),
    'Index': obj.index,
    'NtfsUnixSecurity': obj.ntfsUnixSecurity,
    'Protocols': obj.protocols?.map(y => y),
    'RoRule': obj.roRule?.map(y => y),
    'RwRule': obj.rwRule?.map(y => y),
    'Superuser': obj.superuser?.map(y => y),
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
 * Specifies the chown mode, either 'restricted' or 'unrestricted'.
 *
 * @schema RuleChownMode
 */
export enum RuleChownMode {
  /** restricted */
  RESTRICTED = "restricted",
  /** unrestricted */
  UNRESTRICTED = "unrestricted",
}

/**
 * @schema RuleClients
 */
export interface RuleClients {
  /**
   * Client IP address or range.
   *
   * @schema RuleClients#Match
   */
  readonly match: string;

}

/**
 * Converts an object of type 'RuleClients' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RuleClients(obj: RuleClients | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Match': obj.match,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Specifies the NTFS Unix security options, either 'fail' or 'ignore'.
 *
 * @schema RuleNtfsUnixSecurity
 */
export enum RuleNtfsUnixSecurity {
  /** fail */
  FAIL = "fail",
  /** ignore */
  IGNORE = "ignore",
}

/**
 * @schema RuleProtocols
 */
export enum RuleProtocols {
  /** any */
  ANY = "any",
  /** nfs */
  NFS = "nfs",
  /** cifs */
  CIFS = "cifs",
  /** flexcache */
  FLEXCACHE = "flexcache",
  /** nfs3 */
  NFS3 = "nfs3",
  /** nfs4 */
  NFS4 = "nfs4",
}

/**
 * @schema RuleRoRule
 */
export enum RuleRoRule {
  /** any */
  ANY = "any",
  /** none */
  NONE = "none",
  /** never */
  NEVER = "never",
  /** krb5 */
  KRB5 = "krb5",
  /** krb5i */
  KRB5I = "krb5i",
  /** krb5p */
  KRB5P = "krb5p",
  /** ntlm */
  NTLM = "ntlm",
  /** sys */
  SYS = "sys",
}

/**
 * @schema RuleRwRule
 */
export enum RuleRwRule {
  /** any */
  ANY = "any",
  /** none */
  NONE = "none",
  /** never */
  NEVER = "never",
  /** krb5 */
  KRB5 = "krb5",
  /** krb5i */
  KRB5I = "krb5i",
  /** krb5p */
  KRB5P = "krb5p",
  /** ntlm */
  NTLM = "ntlm",
  /** sys */
  SYS = "sys",
}

/**
 * @schema RuleSuperuser
 */
export enum RuleSuperuser {
  /** any */
  ANY = "any",
  /** none */
  NONE = "none",
  /** never */
  NEVER = "never",
  /** krb5 */
  KRB5 = "krb5",
  /** krb5i */
  KRB5I = "krb5i",
  /** krb5p */
  KRB5P = "krb5p",
  /** ntlm */
  NTLM = "ntlm",
  /** sys */
  SYS = "sys",
}


/**
 * A CloudFormation `NetApp::FSxN::ExportPolicy`
 *
 * @cloudformationResource NetApp::FSxN::ExportPolicy
 * @stability external
 * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
 */
export class CfnExportPolicy extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "NetApp::FSxN::ExportPolicy";

  /**
   * Resource props.
   */
  public readonly props: CfnExportPolicyProps;

  /**
   * Attribute `NetApp::FSxN::ExportPolicy.ID`
   * @link https://github.com/NetApp/NetApp-CloudFormation-FSx-ONTAP-provider
   */
  public readonly attrId: string;

  /**
   * Create a new `NetApp::FSxN::ExportPolicy`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnExportPolicyProps) {
    super(scope, id, { type: CfnExportPolicy.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnExportPolicyProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('ID'));
  }
}