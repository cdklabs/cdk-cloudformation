// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * A rulestack defines the NGFW's advanced access control (APP-ID, URL Filtering) and threat prevention behavior.
 *
 * @schema CfnRuleStackProps
 */
export interface CfnRuleStackProps {
  /**
   * Rule stack name
   *
   * @schema CfnRuleStackProps#RuleStackName
   */
  readonly ruleStackName: string;

  /**
   * @schema CfnRuleStackProps#RuleStack
   */
  readonly ruleStack?: RuleStack;

  /**
   * list of rules
   *
   * @schema CfnRuleStackProps#RuleList
   */
  readonly ruleList?: Rule[];

  /**
   * @schema CfnRuleStackProps#SecurityObjects
   */
  readonly securityObjects?: SecurityObjects;

  /**
   * @schema CfnRuleStackProps#CustomSecurityProfiles
   */
  readonly customSecurityProfiles?: CustomSecurityProfiles;

  /**
   * @schema CfnRuleStackProps#ProgrammaticAccessToken
   */
  readonly programmaticAccessToken: string;

}

/**
 * Converts an object of type 'CfnRuleStackProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnRuleStackProps(obj: CfnRuleStackProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleStackName': obj.ruleStackName,
    'RuleStack': toJson_RuleStack(obj.ruleStack),
    'RuleList': obj.ruleList?.map(y => toJson_Rule(y)),
    'SecurityObjects': toJson_SecurityObjects(obj.securityObjects),
    'CustomSecurityProfiles': toJson_CustomSecurityProfiles(obj.customSecurityProfiles),
    'ProgrammaticAccessToken': obj.programmaticAccessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleStack
 */
export interface RuleStack {
  /**
   * @schema RuleStack#Scope
   */
  readonly scope?: RuleStackScope;

  /**
   * @schema RuleStack#LookupXForwardedFor
   */
  readonly lookupXForwardedFor?: RuleStackLookupXForwardedFor;

  /**
   * @schema RuleStack#MinAppIdVersion
   */
  readonly minAppIdVersion?: string;

  /**
   * @schema RuleStack#Profiles
   */
  readonly profiles?: RuleStackProfiles;

  /**
   * @schema RuleStack#Description
   */
  readonly description?: string;

  /**
   * Deploy RuleStack YES/NO
   *
   * @schema RuleStack#Deploy
   */
  readonly deploy?: string;

}

/**
 * Converts an object of type 'RuleStack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RuleStack(obj: RuleStack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'LookupXForwardedFor': obj.lookupXForwardedFor,
    'MinAppIdVersion': obj.minAppIdVersion,
    'Profiles': toJson_RuleStackProfiles(obj.profiles),
    'Description': obj.description,
    'Deploy': obj.deploy,
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
   * @schema Rule#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema Rule#Description
   */
  readonly description?: string;

  /**
   * RuleList type: LocalRule, PreRule, PostRule
   *
   * @schema Rule#RuleListType
   */
  readonly ruleListType: string;

  /**
   * Priority of the Rule
   *
   * @schema Rule#Priority
   */
  readonly priority: number;

  /**
   * @schema Rule#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Rule#Source
   */
  readonly source?: RuleSource;

  /**
   * @schema Rule#NegateSource
   */
  readonly negateSource?: boolean;

  /**
   * @schema Rule#Destination
   */
  readonly destination?: RuleDestination;

  /**
   * @schema Rule#NegateDestination
   */
  readonly negateDestination?: boolean;

  /**
   * @schema Rule#Applications
   */
  readonly applications?: string[];

  /**
   * @schema Rule#Category
   */
  readonly category?: UrlCategory;

  /**
   * @schema Rule#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Rule#ProtPortList
   */
  readonly protPortList?: string[];

  /**
   * @schema Rule#AuditComment
   */
  readonly auditComment?: string;

  /**
   * @schema Rule#Action
   */
  readonly action?: RuleAction;

  /**
   * @schema Rule#Logging
   */
  readonly logging?: boolean;

  /**
   * @schema Rule#DecryptionRuleType
   */
  readonly decryptionRuleType?: RuleDecryptionRuleType;

  /**
   * @schema Rule#Tags
   */
  readonly tags?: Tag[];

}

/**
 * Converts an object of type 'Rule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Rule(obj: Rule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'Description': obj.description,
    'RuleListType': obj.ruleListType,
    'Priority': obj.priority,
    'Enabled': obj.enabled,
    'Source': toJson_RuleSource(obj.source),
    'NegateSource': obj.negateSource,
    'Destination': toJson_RuleDestination(obj.destination),
    'NegateDestination': obj.negateDestination,
    'Applications': obj.applications?.map(y => y),
    'Category': toJson_UrlCategory(obj.category),
    'Protocol': obj.protocol,
    'ProtPortList': obj.protPortList?.map(y => y),
    'AuditComment': obj.auditComment,
    'Action': obj.action,
    'Logging': obj.logging,
    'DecryptionRuleType': obj.decryptionRuleType,
    'Tags': obj.tags?.map(y => toJson_Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Security objects
 *
 * @schema SecurityObjects
 */
export interface SecurityObjects {
  /**
   * @schema SecurityObjects#PrefixList
   */
  readonly prefixList?: PrefixLists;

  /**
   * @schema SecurityObjects#FqdnList
   */
  readonly fqdnList?: FqdnLists;

  /**
   * @schema SecurityObjects#CustomUrlCategory
   */
  readonly customUrlCategory?: CustomUrlCategory;

  /**
   * @schema SecurityObjects#IntelligentFeed
   */
  readonly intelligentFeed?: IntelligentFeed;

  /**
   * @schema SecurityObjects#CertificateObject
   */
  readonly certificateObject?: CertificateObject;

}

/**
 * Converts an object of type 'SecurityObjects' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityObjects(obj: SecurityObjects | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrefixList': toJson_PrefixLists(obj.prefixList),
    'FqdnList': toJson_FqdnLists(obj.fqdnList),
    'CustomUrlCategory': toJson_CustomUrlCategory(obj.customUrlCategory),
    'IntelligentFeed': toJson_IntelligentFeed(obj.intelligentFeed),
    'CertificateObject': toJson_CertificateObject(obj.certificateObject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Custom Security Profiles object
 *
 * @schema CustomSecurityProfiles
 */
export interface CustomSecurityProfiles {
  /**
   * @schema CustomSecurityProfiles#FileBlocking
   */
  readonly fileBlocking?: FileBlocking;

}

/**
 * Converts an object of type 'CustomSecurityProfiles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomSecurityProfiles(obj: CustomSecurityProfiles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileBlocking': toJson_FileBlocking(obj.fileBlocking),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleStackScope
 */
export enum RuleStackScope {
  /** Global */
  GLOBAL = "Global",
  /** Local */
  LOCAL = "Local",
}

/**
 * @schema RuleStackLookupXForwardedFor
 */
export enum RuleStackLookupXForwardedFor {
  /** SecurityPolicy */
  SECURITY_POLICY = "SecurityPolicy",
  /** None */
  NONE = "None",
}

/**
 * @schema RuleStackProfiles
 */
export interface RuleStackProfiles {
  /**
   * @schema RuleStackProfiles#AntiSpywareProfile
   */
  readonly antiSpywareProfile?: RuleStackProfilesAntiSpywareProfile;

  /**
   * @schema RuleStackProfiles#AntiVirusProfile
   */
  readonly antiVirusProfile?: RuleStackProfilesAntiVirusProfile;

  /**
   * @schema RuleStackProfiles#VulnerabilityProfile
   */
  readonly vulnerabilityProfile?: RuleStackProfilesVulnerabilityProfile;

  /**
   * @schema RuleStackProfiles#URLFilteringProfile
   */
  readonly urlFilteringProfile?: RuleStackProfilesUrlFilteringProfile;

  /**
   * @schema RuleStackProfiles#FileBlockingProfile
   */
  readonly fileBlockingProfile?: RuleStackProfilesFileBlockingProfile;

  /**
   * @schema RuleStackProfiles#OutboundTrustCertificate
   */
  readonly outboundTrustCertificate?: string;

  /**
   * @schema RuleStackProfiles#OutboundUntrustCertificate
   */
  readonly outboundUntrustCertificate?: string;

}

/**
 * Converts an object of type 'RuleStackProfiles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RuleStackProfiles(obj: RuleStackProfiles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AntiSpywareProfile': obj.antiSpywareProfile,
    'AntiVirusProfile': obj.antiVirusProfile,
    'VulnerabilityProfile': obj.vulnerabilityProfile,
    'URLFilteringProfile': obj.urlFilteringProfile,
    'FileBlockingProfile': obj.fileBlockingProfile,
    'OutboundTrustCertificate': obj.outboundTrustCertificate,
    'OutboundUntrustCertificate': obj.outboundUntrustCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleSource
 */
export interface RuleSource {
  /**
   * @schema RuleSource#Cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema RuleSource#PrefixLists
   */
  readonly prefixLists?: string[];

  /**
   * Country code
   *
   * @schema RuleSource#Countries
   */
  readonly countries?: string[];

  /**
   * @schema RuleSource#Feeds
   */
  readonly feeds?: string[];

}

/**
 * Converts an object of type 'RuleSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RuleSource(obj: RuleSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidrs': obj.cidrs?.map(y => y),
    'PrefixLists': obj.prefixLists?.map(y => y),
    'Countries': obj.countries?.map(y => y),
    'Feeds': obj.feeds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleDestination
 */
export interface RuleDestination {
  /**
   * @schema RuleDestination#Cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema RuleDestination#FqdnLists
   */
  readonly fqdnLists?: string[];

  /**
   * @schema RuleDestination#PrefixLists
   */
  readonly prefixLists?: string[];

  /**
   * Country code
   *
   * @schema RuleDestination#Countries
   */
  readonly countries?: string[];

  /**
   * @schema RuleDestination#Feeds
   */
  readonly feeds?: string[];

}

/**
 * Converts an object of type 'RuleDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RuleDestination(obj: RuleDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cidrs': obj.cidrs?.map(y => y),
    'FqdnLists': obj.fqdnLists?.map(y => y),
    'PrefixLists': obj.prefixLists?.map(y => y),
    'Countries': obj.countries?.map(y => y),
    'Feeds': obj.feeds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema UrlCategory
 */
export interface UrlCategory {
  /**
   * @schema UrlCategory#URLCategoryNames
   */
  readonly urlCategoryNames?: string[];

  /**
   * @schema UrlCategory#Feeds
   */
  readonly feeds?: string[];

}

/**
 * Converts an object of type 'UrlCategory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_UrlCategory(obj: UrlCategory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'URLCategoryNames': obj.urlCategoryNames?.map(y => y),
    'Feeds': obj.feeds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleAction
 */
export enum RuleAction {
  /** Allow */
  ALLOW = "Allow",
  /** DenySilent */
  DENY_SILENT = "DenySilent",
  /** DenyResetServer */
  DENY_RESET_SERVER = "DenyResetServer",
  /** DenyResetBoth */
  DENY_RESET_BOTH = "DenyResetBoth",
}

/**
 * @schema RuleDecryptionRuleType
 */
export enum RuleDecryptionRuleType {
  /** SSLOutboundInspection */
  SSL_OUTBOUND_INSPECTION = "SSLOutboundInspection",
}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Tag(obj: Tag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * SecurityObjects PrefixList
 *
 * @schema PrefixLists
 */
export interface PrefixLists {
  /**
   * @schema PrefixLists#Name
   */
  readonly name: string;

  /**
   * @schema PrefixLists#PrefixList
   */
  readonly prefixList: string[];

  /**
   * @schema PrefixLists#AuditComment
   */
  readonly auditComment?: string;

  /**
   * @schema PrefixLists#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'PrefixLists' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PrefixLists(obj: PrefixLists | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PrefixList': obj.prefixList?.map(y => y),
    'AuditComment': obj.auditComment,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FqdnLists
 */
export interface FqdnLists {
  /**
   * @schema FqdnLists#Name
   */
  readonly name: string;

  /**
   * @schema FqdnLists#Description
   */
  readonly description?: string;

  /**
   * @schema FqdnLists#FqdnList
   */
  readonly fqdnList: string[];

  /**
   * @schema FqdnLists#AuditComment
   */
  readonly auditComment?: string;

}

/**
 * Converts an object of type 'FqdnLists' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FqdnLists(obj: FqdnLists | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'FqdnList': obj.fqdnList?.map(y => y),
    'AuditComment': obj.auditComment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomUrlCategory
 */
export interface CustomUrlCategory {
  /**
   * @schema CustomUrlCategory#URLTargets
   */
  readonly urlTargets: string[];

  /**
   * @schema CustomUrlCategory#Name
   */
  readonly name?: string;

  /**
   * @schema CustomUrlCategory#Description
   */
  readonly description?: string;

  /**
   * @schema CustomUrlCategory#Action
   */
  readonly action?: CustomUrlCategoryAction;

  /**
   * @schema CustomUrlCategory#AuditComment
   */
  readonly auditComment?: string;

}

/**
 * Converts an object of type 'CustomUrlCategory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomUrlCategory(obj: CustomUrlCategory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'URLTargets': obj.urlTargets?.map(y => y),
    'Name': obj.name,
    'Description': obj.description,
    'Action': obj.action,
    'AuditComment': obj.auditComment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IntelligentFeed
 */
export interface IntelligentFeed {
  /**
   * @schema IntelligentFeed#Name
   */
  readonly name: string;

  /**
   * @schema IntelligentFeed#Description
   */
  readonly description?: string;

  /**
   * @schema IntelligentFeed#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema IntelligentFeed#FeedURL
   */
  readonly feedUrl: string;

  /**
   * @schema IntelligentFeed#Type
   */
  readonly type: IntelligentFeedType;

  /**
   * @schema IntelligentFeed#Frequency
   */
  readonly frequency: IntelligentFeedFrequency;

  /**
   * @schema IntelligentFeed#Time
   */
  readonly time?: number;

  /**
   * @schema IntelligentFeed#AuditComment
   */
  readonly auditComment?: string;

}

/**
 * Converts an object of type 'IntelligentFeed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IntelligentFeed(obj: IntelligentFeed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Certificate': obj.certificate,
    'FeedURL': obj.feedUrl,
    'Type': obj.type,
    'Frequency': obj.frequency,
    'Time': obj.time,
    'AuditComment': obj.auditComment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CertificateObject
 */
export interface CertificateObject {
  /**
   * @schema CertificateObject#Name
   */
  readonly name: string;

  /**
   * @schema CertificateObject#Description
   */
  readonly description?: string;

  /**
   * @schema CertificateObject#CertificateSignerArn
   */
  readonly certificateSignerArn?: string;

  /**
   * @schema CertificateObject#CertificateSelfSigned
   */
  readonly certificateSelfSigned?: boolean;

  /**
   * @schema CertificateObject#AuditComment
   */
  readonly auditComment?: string;

}

/**
 * Converts an object of type 'CertificateObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CertificateObject(obj: CertificateObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'CertificateSignerArn': obj.certificateSignerArn,
    'CertificateSelfSigned': obj.certificateSelfSigned,
    'AuditComment': obj.auditComment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FileBlocking
 */
export interface FileBlocking {
  /**
   * @schema FileBlocking#Direction
   */
  readonly direction?: FileBlockingDirection;

  /**
   * @schema FileBlocking#FileType
   */
  readonly fileType: string;

  /**
   * @schema FileBlocking#Description
   */
  readonly description?: string;

  /**
   * @schema FileBlocking#Action
   */
  readonly action?: FileBlockingAction;

  /**
   * @schema FileBlocking#AuditComment
   */
  readonly auditComment?: string;

}

/**
 * Converts an object of type 'FileBlocking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FileBlocking(obj: FileBlocking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Direction': obj.direction,
    'FileType': obj.fileType,
    'Description': obj.description,
    'Action': obj.action,
    'AuditComment': obj.auditComment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RuleStackProfilesAntiSpywareProfile
 */
export enum RuleStackProfilesAntiSpywareProfile {
  /** BestPractice */
  BEST_PRACTICE = "BestPractice",
  /** None */
  NONE = "None",
}

/**
 * @schema RuleStackProfilesAntiVirusProfile
 */
export enum RuleStackProfilesAntiVirusProfile {
  /** BestPractice */
  BEST_PRACTICE = "BestPractice",
  /** None */
  NONE = "None",
}

/**
 * @schema RuleStackProfilesVulnerabilityProfile
 */
export enum RuleStackProfilesVulnerabilityProfile {
  /** BestPractice */
  BEST_PRACTICE = "BestPractice",
  /** None */
  NONE = "None",
}

/**
 * @schema RuleStackProfilesUrlFilteringProfile
 */
export enum RuleStackProfilesUrlFilteringProfile {
  /** BestPractice */
  BEST_PRACTICE = "BestPractice",
  /** None */
  NONE = "None",
}

/**
 * @schema RuleStackProfilesFileBlockingProfile
 */
export enum RuleStackProfilesFileBlockingProfile {
  /** Custom */
  CUSTOM = "Custom",
  /** BestPractice */
  BEST_PRACTICE = "BestPractice",
  /** None */
  NONE = "None",
}

/**
 * @schema CustomUrlCategoryAction
 */
export enum CustomUrlCategoryAction {
  /** none */
  NONE = "none",
  /** allow */
  ALLOW = "allow",
  /** alert */
  ALERT = "alert",
  /** block */
  BLOCK = "block",
}

/**
 * @schema IntelligentFeedType
 */
export enum IntelligentFeedType {
  /** IP_LIST */
  IP_LIST = "IP_LIST",
  /** URL_LIST */
  URL_LIST = "URL_LIST",
}

/**
 * @schema IntelligentFeedFrequency
 */
export enum IntelligentFeedFrequency {
  /** HOURLY */
  HOURLY = "HOURLY",
  /** DAILY */
  DAILY = "DAILY",
}

/**
 * @schema FileBlockingDirection
 */
export enum FileBlockingDirection {
  /** upload */
  UPLOAD = "upload",
  /** download */
  DOWNLOAD = "download",
  /** both */
  BOTH = "both",
}

/**
 * @schema FileBlockingAction
 */
export enum FileBlockingAction {
  /** alert */
  ALERT = "alert",
  /** block */
  BLOCK = "block",
  /** continue */
  CONTINUE = "continue",
}


/**
 * A CloudFormation `PaloAltoNetworks::CloudNGFW::RuleStack`
 *
 * @cloudformationResource PaloAltoNetworks::CloudNGFW::RuleStack
 * @stability external
 * @link https://github.com/aws-cloudformation/aws-cloudformation-rpdk.git
 */
export class CfnRuleStack extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "PaloAltoNetworks::CloudNGFW::RuleStack";

  /**
   * Resource props.
   */
  public readonly props: CfnRuleStackProps;


  /**
   * Create a new `PaloAltoNetworks::CloudNGFW::RuleStack`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnRuleStackProps) {
    super(scope, id, { type: CfnRuleStack.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnRuleStackProps(props)! });

    this.props = props;

  }
}