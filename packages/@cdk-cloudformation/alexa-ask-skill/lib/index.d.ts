import * as cdk from '@aws-cdk/core';
/**
 * Resource Type definition for Alexa::ASK::Skill.
 *
 * @schema CfnSkillProps
 */
export interface CfnSkillProps {
    /**
     * @schema CfnSkillProps#AuthenticationConfiguration
     */
    readonly authenticationConfiguration: AuthenticationConfiguration;
    /**
     * @schema CfnSkillProps#VendorId
     */
    readonly vendorId: string;
    /**
     * @schema CfnSkillProps#SkillPackage
     */
    readonly skillPackage: SkillPackage;
}
/**
 * Converts an object of type 'CfnSkillProps' to JSON representation.
 */
export declare function toJson_CfnSkillProps(obj: CfnSkillProps | undefined): Record<string, any> | undefined;
/**
 * @schema AuthenticationConfiguration
 */
export interface AuthenticationConfiguration {
    /**
     * @schema AuthenticationConfiguration#ClientId
     */
    readonly clientId: string;
    /**
     * @schema AuthenticationConfiguration#RefreshToken
     */
    readonly refreshToken: string;
    /**
     * @schema AuthenticationConfiguration#ClientSecret
     */
    readonly clientSecret: string;
}
/**
 * Converts an object of type 'AuthenticationConfiguration' to JSON representation.
 */
export declare function toJson_AuthenticationConfiguration(obj: AuthenticationConfiguration | undefined): Record<string, any> | undefined;
/**
 * @schema SkillPackage
 */
export interface SkillPackage {
    /**
     * @schema SkillPackage#S3BucketRole
     */
    readonly s3BucketRole?: string;
    /**
     * @schema SkillPackage#Overrides
     */
    readonly overrides?: Overrides;
    /**
     * @schema SkillPackage#S3ObjectVersion
     */
    readonly s3ObjectVersion?: string;
    /**
     * @schema SkillPackage#S3Bucket
     */
    readonly s3Bucket: string;
    /**
     * @schema SkillPackage#S3Key
     */
    readonly s3Key: string;
}
/**
 * Converts an object of type 'SkillPackage' to JSON representation.
 */
export declare function toJson_SkillPackage(obj: SkillPackage | undefined): Record<string, any> | undefined;
/**
 * @schema Overrides
 */
export interface Overrides {
    /**
     * @schema Overrides#Manifest
     */
    readonly manifest?: any;
}
/**
 * Converts an object of type 'Overrides' to JSON representation.
 */
export declare function toJson_Overrides(obj: Overrides | undefined): Record<string, any> | undefined;
/**
 * A CloudFormation `Alexa::ASK::Skill`.
 *
 * @external
 * @cloudformationResource Alexa::ASK::Skill
 * @link http://unknown-url
 */
export declare class CfnSkill extends cdk.CfnResource {
    /**
     * The CloudFormation resource type name for this resource class.
     *
     * @external
     */
    static readonly CFN_RESOURCE_TYPE_NAME = "Alexa::ASK::Skill";
    /**
     * `Alexa::ASK::Skill.AuthenticationConfiguration`.
     *
     * @external
     * @link http://unknown-url
     */
    readonly authenticationConfiguration: AuthenticationConfiguration;
    /**
     * `Alexa::ASK::Skill.VendorId`.
     *
     * @external
     * @link http://unknown-url
     */
    readonly vendorId: string;
    /**
     * `Alexa::ASK::Skill.SkillPackage`.
     *
     * @external
     * @link http://unknown-url
     */
    readonly skillPackage: SkillPackage;
    /**
     * Attribute `Alexa::ASK::Skill.Id`.
     *
     * @external
     * @link http://unknown-url
     */
    readonly attrId: string;
    /**
     * Create a new `Alexa::ASK::Skill`.
     *
     * @param scope - scope in which this resource is defined.
     * @param id - scoped id of the resource.
     * @param props - resource properties.
     * @external
     */
    constructor(scope: cdk.Construct, id: string, props: CfnSkillProps);
}
