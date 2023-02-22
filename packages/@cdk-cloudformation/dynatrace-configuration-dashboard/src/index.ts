// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Manage a dashboard in Dynatrace.
 *
 * @schema CfnDashboardProps
 */
export interface CfnDashboardProps {
  /**
   * @schema CfnDashboardProps#Metadata
   */
  readonly metadata?: Metadata;

  /**
   * @schema CfnDashboardProps#DashboardMetadata
   */
  readonly dashboardMetadata: DashboardMetadata;

  /**
   * @schema CfnDashboardProps#Tiles
   */
  readonly tiles: Tile[];

  /**
   * @schema CfnDashboardProps#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'CfnDashboardProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnDashboardProps(obj: CfnDashboardProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metadata': toJson_Metadata(obj.metadata),
    'DashboardMetadata': toJson_DashboardMetadata(obj.dashboardMetadata),
    'Tiles': obj.tiles?.map(y => toJson_Tile(y)),
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Metadata useful for debugging.
 *
 * @schema Metadata
 */
export interface Metadata {
  /**
   * A sorted list of the version numbers of the configuration.
   *
   * @schema Metadata#ConfigurationVersions
   */
  readonly configurationVersions?: number[];

  /**
   * Dynatrace version.
   *
   * @schema Metadata#ClusterVersion
   */
  readonly clusterVersion?: string;

}

/**
 * Converts an object of type 'Metadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Metadata(obj: Metadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationVersions': obj.configurationVersions?.map(y => y),
    'ClusterVersion': obj.clusterVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Parameters of a dashboard.
 *
 * @schema DashboardMetadata
 */
export interface DashboardMetadata {
  /**
   * The name of the dashboard.
   *
   * @schema DashboardMetadata#Name
   */
  readonly name: string;

  /**
   * The dashboard is shared (true) or private (false).
   *
   * @schema DashboardMetadata#Shared
   */
  readonly shared?: boolean;

  /**
   * The owner of the dashboard.
   *
   * @schema DashboardMetadata#Owner
   */
  readonly owner: string;

  /**
   * @schema DashboardMetadata#DashboardFilter
   */
  readonly dashboardFilter?: DashboardFilter;

  /**
   * A set of tags assigned to the dashboard.
   *
   * @schema DashboardMetadata#Tags
   */
  readonly tags?: string[];

  /**
   * The dashboard is a preset (true) or a custom (false) dashboard.
   *
   * @schema DashboardMetadata#Preset
   */
  readonly preset?: boolean;

  /**
   * @schema DashboardMetadata#DynamicFilters
   */
  readonly dynamicFilters?: DynamicFilters;

  /**
   * The general size of the tiles tile. Default value is medium
   *
   * @schema DashboardMetadata#TilesNameSize
   */
  readonly tilesNameSize?: DashboardMetadataTilesNameSize;

}

/**
 * Converts an object of type 'DashboardMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DashboardMetadata(obj: DashboardMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Shared': obj.shared,
    'Owner': obj.owner,
    'DashboardFilter': toJson_DashboardFilter(obj.dashboardFilter),
    'Tags': obj.tags?.map(y => y),
    'Preset': obj.preset,
    'DynamicFilters': toJson_DynamicFilters(obj.dynamicFilters),
    'TilesNameSize': obj.tilesNameSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration of a tile.
 *
 * The actual set of fields depends on the type of the tile. Find the list of actual objects in the description of the tileType field or see Dashboards API - Tile JSON models (https://dt-url.net/2wc3spx).
 *
 * @schema Tile
 */
export interface Tile {
  /**
   * @schema Tile#Name
   */
  readonly name?: string;

  /**
   * @schema Tile#TileType
   */
  readonly tileType?: string;

  /**
   * @schema Tile#Bounds
   */
  readonly bounds?: TileBounds;

  /**
   * @schema Tile#Configured
   */
  readonly configured?: boolean;

  /**
   * @schema Tile#TileFilter
   */
  readonly tileFilter?: DashboardFilter;

}

/**
 * Converts an object of type 'Tile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Tile(obj: Tile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TileType': obj.tileType,
    'Bounds': toJson_TileBounds(obj.bounds),
    'Configured': obj.configured,
    'TileFilter': toJson_DashboardFilter(obj.tileFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Filters, applied to a dashboard.
 *
 * @schema DashboardFilter
 */
export interface DashboardFilter {
  /**
   * The default timeframe of the dashboard.
   *
   * @schema DashboardFilter#Timeframe
   */
  readonly timeframe?: string;

  /**
   * @schema DashboardFilter#ManagementZone
   */
  readonly managementZone?: EntityShortRepresentation;

}

/**
 * Converts an object of type 'DashboardFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DashboardFilter(obj: DashboardFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timeframe': obj.timeframe,
    'ManagementZone': toJson_EntityShortRepresentation(obj.managementZone),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Dashboard filter configuration of a dashboard.
 *
 * @schema DynamicFilters
 */
export interface DynamicFilters {
  /**
   * A set of all possible global dashboard filters that can be applied to a dashboard.
   *
   * @schema DynamicFilters#Filters
   */
  readonly filters: string[];

}

/**
 * Converts an object of type 'DynamicFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DynamicFilters(obj: DynamicFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The general size of the tiles tile. Default value is medium
 *
 * @schema DashboardMetadataTilesNameSize
 */
export enum DashboardMetadataTilesNameSize {
  /** small */
  SMALL = "small",
  /** medium */
  MEDIUM = "medium",
  /** large */
  LARGE = "large",
}

/**
 * @schema TileBounds
 */
export interface TileBounds {
  /**
   * @schema TileBounds#Width
   */
  readonly width?: number;

  /**
   * @schema TileBounds#Top
   */
  readonly top?: number;

  /**
   * @schema TileBounds#Left
   */
  readonly left?: number;

  /**
   * @schema TileBounds#Height
   */
  readonly height?: number;

}

/**
 * Converts an object of type 'TileBounds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TileBounds(obj: TileBounds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Width': obj.width,
    'Top': obj.top,
    'Left': obj.left,
    'Height': obj.height,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The short representation of a Dynatrace entity.
 *
 * @schema EntityShortRepresentation
 */
export interface EntityShortRepresentation {
  /**
   * The ID of the Dynatrace entity.
   *
   * @schema EntityShortRepresentation#Id
   */
  readonly id?: string;

  /**
   * The name of the Dynatrace entity.
   *
   * @schema EntityShortRepresentation#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'EntityShortRepresentation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EntityShortRepresentation(obj: EntityShortRepresentation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Dynatrace::Configuration::Dashboard`
 *
 * @cloudformationResource Dynatrace::Configuration::Dashboard
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-dynatrace-resource-providers.git
 */
export class CfnDashboard extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Dynatrace::Configuration::Dashboard";

  /**
   * Resource props.
   */
  public readonly props: CfnDashboardProps;


  /**
   * Create a new `Dynatrace::Configuration::Dashboard`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnDashboardProps) {
    super(scope, id, { type: CfnDashboard.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnDashboardProps(props)! });

    this.props = props;

  }
}