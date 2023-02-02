// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a Fastly service backend.
 *
 * @schema CfnBackendProps
 */
export interface CfnBackendProps {
  /**
   * @schema CfnBackendProps#Address
   */
  readonly address?: string;

  /**
   * @schema CfnBackendProps#AutoLoadbalance
   */
  readonly autoLoadbalance?: boolean;

  /**
   * @schema CfnBackendProps#BetweenBytesTimeout
   */
  readonly betweenBytesTimeout?: number;

  /**
   * @schema CfnBackendProps#ClientCert
   */
  readonly clientCert?: string;

  /**
   * @schema CfnBackendProps#Comment
   */
  readonly comment?: string;

  /**
   * @schema CfnBackendProps#ConnectTimeout
   */
  readonly connectTimeout?: number;

  /**
   * @schema CfnBackendProps#FirstByteTimeout
   */
  readonly firstByteTimeout?: number;

  /**
   * @schema CfnBackendProps#Healthcheck
   */
  readonly healthcheck?: string;

  /**
   * @schema CfnBackendProps#Ipv4
   */
  readonly ipv4?: string;

  /**
   * @schema CfnBackendProps#Ipv6
   */
  readonly ipv6?: string;

  /**
   * @schema CfnBackendProps#MaxConn
   */
  readonly maxConn?: number;

  /**
   * @schema CfnBackendProps#MaxTlsVersion
   */
  readonly maxTlsVersion?: MaxTlsVersion;

  /**
   * @schema CfnBackendProps#MinTlsVersion
   */
  readonly minTlsVersion?: MinTlsVersion;

  /**
   * @schema CfnBackendProps#Name
   */
  readonly name: string;

  /**
   * @schema CfnBackendProps#OverrideHost
   */
  readonly overrideHost?: string;

  /**
   * @schema CfnBackendProps#Port
   */
  readonly port?: number;

  /**
   * @schema CfnBackendProps#RequestCondition
   */
  readonly requestCondition?: string;

  /**
   * @schema CfnBackendProps#Shield
   */
  readonly shield?: string;

  /**
   * @schema CfnBackendProps#SslCaCert
   */
  readonly sslCaCert?: string;

  /**
   * @schema CfnBackendProps#SslCertHostname
   */
  readonly sslCertHostname?: string;

  /**
   * @schema CfnBackendProps#SslCheckCert
   */
  readonly sslCheckCert?: boolean;

  /**
   * @schema CfnBackendProps#SslCiphers
   */
  readonly sslCiphers?: string;

  /**
   * @schema CfnBackendProps#SslClientCert
   */
  readonly sslClientCert?: string;

  /**
   * @schema CfnBackendProps#SslClientKey
   */
  readonly sslClientKey?: string;

  /**
   * @schema CfnBackendProps#SslSniHostname
   */
  readonly sslSniHostname?: string;

  /**
   * @schema CfnBackendProps#UseSsl
   */
  readonly useSsl?: boolean;

  /**
   * @schema CfnBackendProps#Weight
   */
  readonly weight?: number;

  /**
   * @schema CfnBackendProps#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema CfnBackendProps#BackendName
   */
  readonly backendName?: string;

  /**
   * @schema CfnBackendProps#VersionId
   */
  readonly versionId: string;

  /**
   * @schema CfnBackendProps#CreatedAt
   */
  readonly createdAt?: Date;

  /**
   * @schema CfnBackendProps#UpdatedAt
   */
  readonly updatedAt?: Date;

  /**
   * @schema CfnBackendProps#DeletedAt
   */
  readonly deletedAt?: Date;

  /**
   * @schema CfnBackendProps#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'CfnBackendProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnBackendProps(obj: CfnBackendProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'AutoLoadbalance': obj.autoLoadbalance,
    'BetweenBytesTimeout': obj.betweenBytesTimeout,
    'ClientCert': obj.clientCert,
    'Comment': obj.comment,
    'ConnectTimeout': obj.connectTimeout,
    'FirstByteTimeout': obj.firstByteTimeout,
    'Healthcheck': obj.healthcheck,
    'Ipv4': obj.ipv4,
    'Ipv6': obj.ipv6,
    'MaxConn': obj.maxConn,
    'MaxTlsVersion': obj.maxTlsVersion,
    'MinTlsVersion': obj.minTlsVersion,
    'Name': obj.name,
    'OverrideHost': obj.overrideHost,
    'Port': obj.port,
    'RequestCondition': obj.requestCondition,
    'Shield': obj.shield,
    'SslCaCert': obj.sslCaCert,
    'SslCertHostname': obj.sslCertHostname,
    'SslCheckCert': obj.sslCheckCert,
    'SslCiphers': obj.sslCiphers,
    'SslClientCert': obj.sslClientCert,
    'SslClientKey': obj.sslClientKey,
    'SslSniHostname': obj.sslSniHostname,
    'UseSsl': obj.useSsl,
    'Weight': obj.weight,
    'ServiceId': obj.serviceId,
    'BackendName': obj.backendName,
    'VersionId': obj.versionId,
    'CreatedAt': obj.createdAt?.toISOString(),
    'UpdatedAt': obj.updatedAt?.toISOString(),
    'DeletedAt': obj.deletedAt?.toISOString(),
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic 503 error response will be generated.
 *
 * @schema MaxTlsVersion
 */
export enum MaxTlsVersion {
  /** 1 */
  VALUE_1 = "1",
  /** 1.0 */
  VALUE_1_0 = "1.0",
  /** 1.1 */
  VALUE_1_1 = "1.1",
  /** 1.2 */
  VALUE_1_2 = "1.2",
  /** 1.3 */
  VALUE_1_3 = "1.3",
}

/**
 * Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic 503 error response will be generated.
 *
 * @schema MinTlsVersion
 */
export enum MinTlsVersion {
  /** 1 */
  VALUE_1 = "1",
  /** 1.0 */
  VALUE_1_0 = "1.0",
  /** 1.1 */
  VALUE_1_1 = "1.1",
  /** 1.2 */
  VALUE_1_2 = "1.2",
  /** 1.3 */
  VALUE_1_3 = "1.3",
}


/**
 * A CloudFormation `Fastly::Services::Backend`
 *
 * @cloudformationResource Fastly::Services::Backend
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-fastly-resource-providers.git
 */
export class CfnBackend extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Fastly::Services::Backend";

  /**
   * Resource props.
   */
  public readonly props: CfnBackendProps;


  /**
   * Create a new `Fastly::Services::Backend`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnBackendProps) {
    super(scope, id, { type: CfnBackend.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnBackendProps(props)! });

    this.props = props;

  }
}