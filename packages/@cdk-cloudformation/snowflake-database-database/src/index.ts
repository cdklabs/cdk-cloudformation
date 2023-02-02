// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Allows for the creation and modification of a Snowflake Database. https://docs.snowflake.com/en/user-guide/databases.html
 *
 * @schema CfnDatabaseProps
 */
export interface CfnDatabaseProps {
  /**
   * Specifies the identifier for the database; must be unique for your account.
   *
   * @schema CfnDatabaseProps#Name
   */
  readonly name: string;

  /**
   * Specifies the number of days for which Time Travel actions can be performed on the database.
   *
   * @schema CfnDatabaseProps#DataRetentionTimeInDays
   */
  readonly dataRetentionTimeInDays?: number;

  /**
   * The maximum number of days for which Snowflake can extend the data retention period for tables in the database.
   *
   * @schema CfnDatabaseProps#MaxDataExtensionTimeInDays
   */
  readonly maxDataExtensionTimeInDays?: number;

  /**
   * Specifies a default collation specification for all schemas and tables added to the database
   *
   * @schema CfnDatabaseProps#DefaultDdlCollation
   */
  readonly defaultDdlCollation?: string;

  /**
   * Specifies a comment for the database.
   *
   * @schema CfnDatabaseProps#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'CfnDatabaseProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnDatabaseProps(obj: CfnDatabaseProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DataRetentionTimeInDays': obj.dataRetentionTimeInDays,
    'MaxDataExtensionTimeInDays': obj.maxDataExtensionTimeInDays,
    'DefaultDdlCollation': obj.defaultDdlCollation,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Snowflake::Database::Database`
 *
 * @cloudformationResource Snowflake::Database::Database
 * @stability external
 * @link https://github.com/aws-ia/cloudformation-snowflake-resource-providers.git
 */
export class CfnDatabase extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Snowflake::Database::Database";

  /**
   * Resource props.
   */
  public readonly props: CfnDatabaseProps;


  /**
   * Create a new `Snowflake::Database::Database`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnDatabaseProps) {
    super(scope, id, { type: CfnDatabase.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnDatabaseProps(props)! });

    this.props = props;

  }
}