// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a synthetic location (V1) in Dynatrace.
 *
 * @schema CfnSyntheticLocationProps
 */
export interface CfnSyntheticLocationProps {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * PUBLIC -> PublicSyntheticLocation
   * PRIVATE -> PrivateSyntheticLocation
   * CLUSTER -> PrivateSyntheticLocation
   *
   * @schema CfnSyntheticLocationProps#Type
   */
  readonly type?: CfnSyntheticLocationPropsType;

  /**
   * The name of the location.
   *
   * @schema CfnSyntheticLocationProps#Name
   */
  readonly name: string;

  /**
   * The country code of the location.
   *
   * Use the alpha-2 code of the ISO 3166-2 standard (https://dt-url.net/iso3166-2), (for example, AT for Austria or PL for Poland).
   *
   * @schema CfnSyntheticLocationProps#CountryCode
   */
  readonly countryCode: string;

  /**
   * The region code of the location.
   *
   * For the USA or Canada use ISO 3166-2 state codes (without US- or CA- prefix), for example, VA for Virginia or OR for Oregon.
   *
   * For the rest of the world use FIPS 10-4 codes (https://dt-url.net/fipscodes).
   *
   * @schema CfnSyntheticLocationProps#RegionCode
   */
  readonly regionCode: string;

  /**
   * The city of the location.
   *
   * @schema CfnSyntheticLocationProps#City
   */
  readonly city: string;

  /**
   * The latitude of the location in DDD.dddd format.
   *
   * @schema CfnSyntheticLocationProps#Latitude
   */
  readonly latitude: number;

  /**
   * The latitude of the location in DDD.dddd format.
   *
   * @schema CfnSyntheticLocationProps#Longitude
   */
  readonly longitude: number;

  /**
   * The status of the location:
   *
   * ENABLED: The location is displayed as active in the UI. You can assign monitors to the location.
   * DISABLED: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
   * HIDDEN: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as HIDDEN when no monitor is assigned to it.
   *
   * @schema CfnSyntheticLocationProps#Status
   */
  readonly status?: CfnSyntheticLocationPropsStatus;

  /**
   * A list of synthetic nodes belonging to the location.
   *
   * @schema CfnSyntheticLocationProps#Nodes
   */
  readonly nodes?: string[];

  /**
   * The alerting of location outage is enabled (true) or disabled (false).
   *
   * @schema CfnSyntheticLocationProps#AvailabilityLocationOutage
   */
  readonly availabilityLocationOutage?: boolean;

  /**
   * The alerting of node outage is enabled (true) or disabled (false).
   *
   * If enabled, the outage of any node in the location triggers an alert.
   *
   * @schema CfnSyntheticLocationProps#AvailabilityNodeOutage
   */
  readonly availabilityNodeOutage?: boolean;

  /**
   * Alert if the location or node outage lasts longer than X minutes.
   *
   * Only applicable when availabilityLocationOutage or availabilityNodeOutage is set to true.
   *
   * @schema CfnSyntheticLocationProps#LocationNodeOutageDelayInMinutes
   */
  readonly locationNodeOutageDelayInMinutes?: number;

  /**
   * The notifications of location and node outage is enabled (true) or disabled (false).
   *
   * @schema CfnSyntheticLocationProps#AvailabilityNotificationsEnabled
   */
  readonly availabilityNotificationsEnabled?: boolean;

  /**
   * Auto upgrade of Chromium is enabled (true) or disabled (false).
   *
   * @schema CfnSyntheticLocationProps#AutoUpdateChromium
   */
  readonly autoUpdateChromium?: boolean;

}

/**
 * Converts an object of type 'CfnSyntheticLocationProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSyntheticLocationProps(obj: CfnSyntheticLocationProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'CountryCode': obj.countryCode,
    'RegionCode': obj.regionCode,
    'City': obj.city,
    'Latitude': obj.latitude,
    'Longitude': obj.longitude,
    'Status': obj.status,
    'Nodes': obj.nodes?.map(y => y),
    'AvailabilityLocationOutage': obj.availabilityLocationOutage,
    'AvailabilityNodeOutage': obj.availabilityNodeOutage,
    'LocationNodeOutageDelayInMinutes': obj.locationNodeOutageDelayInMinutes,
    'AvailabilityNotificationsEnabled': obj.availabilityNotificationsEnabled,
    'AutoUpdateChromium': obj.autoUpdateChromium,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Defines the actual set of fields depending on the value. See one of the following objects:
 *
 * PUBLIC -> PublicSyntheticLocation
 * PRIVATE -> PrivateSyntheticLocation
 * CLUSTER -> PrivateSyntheticLocation
 *
 * @schema CfnSyntheticLocationPropsType
 */
export enum CfnSyntheticLocationPropsType {
  /** PUBLIC */
  PUBLIC = "PUBLIC",
  /** PRIVATE */
  PRIVATE = "PRIVATE",
  /** CLUSTER */
  CLUSTER = "CLUSTER",
}

/**
 * The status of the location:
 *
 * ENABLED: The location is displayed as active in the UI. You can assign monitors to the location.
 * DISABLED: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
 * HIDDEN: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as HIDDEN when no monitor is assigned to it.
 *
 * @schema CfnSyntheticLocationPropsStatus
 */
export enum CfnSyntheticLocationPropsStatus {
  /** ENABLED */
  ENABLED = "ENABLED",
  /** DISABLED */
  DISABLED = "DISABLED",
  /** HIDDEN */
  HIDDEN = "HIDDEN",
}


/**
 * A CloudFormation `Dynatrace::Environment::SyntheticLocation`
 *
 * @cloudformationResource Dynatrace::Environment::SyntheticLocation
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
 */
export class CfnSyntheticLocation extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Dynatrace::Environment::SyntheticLocation";

  /**
   * Resource props.
   */
  public readonly props: CfnSyntheticLocationProps;

  /**
   * Attribute `Dynatrace::Environment::SyntheticLocation.EntityId`
   * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
   */
  public readonly attrEntityId: string;

  /**
   * Create a new `Dynatrace::Environment::SyntheticLocation`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnSyntheticLocationProps) {
    super(scope, id, { type: CfnSyntheticLocation.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnSyntheticLocationProps(props)! });

    this.props = props;

    this.attrEntityId = cdk.Token.asString(this.getAtt('EntityId'));
  }
}