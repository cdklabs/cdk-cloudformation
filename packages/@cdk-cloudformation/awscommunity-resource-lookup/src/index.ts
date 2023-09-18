// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * This resource uses AWS Cloud Control API to perform a lookup of a resource of a given type (such as, `AWS::EC2::VPC`) in your AWS account and current region, based on a query you specify.  If only one match is found, this resource returns the primary ID of the resource (in the `AWS::EC2::VPC` example, the VPC ID) and the resource properties, that you can then reference in your template with the `Fn::GetAtt` intrinsic function.  Specify resource type search targets that are supported by Cloud Control API.
 *
 * @schema CfnLookupProps
 */
export interface CfnLookupProps {
  /**
   * The resource type name you wish to use for the lookup operation.
   *
   * @schema CfnLookupProps#TypeName
   */
  readonly typeName: string;

  /**
   * A query, in JMESPath (https://jmespath.org/) format, to perform the resource lookup; for example: `Tags[?Key == 'Owner' && Value == 'test-only']`.  When you specify a new value on resource updates (for example, when you update the stack that describes this resource), a new lookup will be performed.
   *
   * @schema CfnLookupProps#JmesPathQuery
   */
  readonly jmesPathQuery: string;

  /**
   * The Amazon Resource Name (ARN) of the IAM role you wish to use for performing resource lookup operations in your AWS account on your behalf; for example: `arn:aws:iam::111122223333:role/my-example-role`.  The role whose ARN you specify for this property is passed to AWS Cloud Control API's `ListResources` and `GetResource` actions when this resource type calls them on your behalf against resource type targets (such as, `AWS::EC2::VPC`).  As for the role, for example, you could create an IAM role whose `Service` `Principal` is `cloudformation.amazonaws.com` in the trust policy, and whose policy is e.g., a `ReadOnlyAccess` AWS managed policy, or another managed policy you choose, or your own policy, depending on which permissions you require.
   *
   * @schema CfnLookupProps#ResourceLookupRoleArn
   */
  readonly resourceLookupRoleArn: string;

  /**
   * The model of the resource you're using: this additional information is required if you're using a resource type shown in the `Resources that require additional information` page (https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html#resource-operations-list-containers).  Specify the required properties using the JSON format; for example, to specify `LoadBalancerArn` and its ARN value for `AWS::ElasticLoadBalancingV2::Listener` (that you specify in the `TypeName` property): `{"LoadBalancerArn": "REPLACE_WITH_YOUR_LOAD_BALANCER_ARN"}`.
   *
   * @schema CfnLookupProps#ResourceModel
   */
  readonly resourceModel?: string;

  /**
   * Optional, numeric integer value (such as `1`, `2`), that you can specify to induce a new search on e.g., stack updates without modifying the value for `JmesPathQuery`.  Specify a value that is different from the previous one to induce the update; note that either adding this property to the resource if not present before an update, or removing it if previously added to the resource, will yield the same effect of changing the property value and will induce an update.
   *
   * @schema CfnLookupProps#LookupSerialNumber
   */
  readonly lookupSerialNumber?: string;

  /**
   * Optional key-value pairs object (such as, `Env: Dev`, `Name: Test`) to associate to the AWS Systems Manager Parameter Store parameter resource, that the implementation of this resource type creates in your account to persist the lookup result.
   *
   * @schema CfnLookupProps#Tags
   */
  readonly tags?: any;

}

/**
 * Converts an object of type 'CfnLookupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnLookupProps(obj: CfnLookupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'JmesPathQuery': obj.jmesPathQuery,
    'ResourceLookupRoleArn': obj.resourceLookupRoleArn,
    'ResourceModel': obj.resourceModel,
    'LookupSerialNumber': obj.lookupSerialNumber,
    'Tags': obj.tags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `AwsCommunity::Resource::Lookup`
 *
 * @cloudformationResource AwsCommunity::Resource::Lookup
 * @stability external
 * @link https://github.com/aws-cloudformation/community-registry-extensions/tree/main/resources/Resource_Lookup
 */
export class CfnLookup extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "AwsCommunity::Resource::Lookup";

  /**
   * Resource props.
   */
  public readonly props: CfnLookupProps;

  /**
   * Attribute `AwsCommunity::Resource::Lookup.ResourceIdentifier`
   * @link https://github.com/aws-cloudformation/community-registry-extensions/tree/main/resources/Resource_Lookup
   */
  public readonly attrResourceIdentifier: string;
  /**
   * Attribute `AwsCommunity::Resource::Lookup.ResourceLookupId`
   * @link https://github.com/aws-cloudformation/community-registry-extensions/tree/main/resources/Resource_Lookup
   */
  public readonly attrResourceLookupId: string;
  /**
   * Attribute `AwsCommunity::Resource::Lookup.ResourceProperties`
   * @link https://github.com/aws-cloudformation/community-registry-extensions/tree/main/resources/Resource_Lookup
   */
  public readonly attrResourceProperties: string;

  /**
   * Create a new `AwsCommunity::Resource::Lookup`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnLookupProps) {
    super(scope, id, { type: CfnLookup.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnLookupProps(props)! });

    this.props = props;

    this.attrResourceIdentifier = cdk.Token.asString(this.getAtt('ResourceIdentifier'));
    this.attrResourceLookupId = cdk.Token.asString(this.getAtt('ResourceLookupId'));
    this.attrResourceProperties = cdk.Token.asString(this.getAtt('ResourceProperties'));
  }
}