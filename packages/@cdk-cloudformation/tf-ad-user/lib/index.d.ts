import * as cdk from '@aws-cdk/core';
/**
 * CloudFormation equivalent of ad_user.
 *
 * @schema CfnUserProps
 */
export interface CfnUserProps {
    /**
     * @schema CfnUserProps#CannotChangePassword
     */
    readonly cannotChangePassword?: boolean;
    /**
     * @schema CfnUserProps#City
     */
    readonly city?: string;
    /**
     * @schema CfnUserProps#Company
     */
    readonly company?: string;
    /**
     * @schema CfnUserProps#Container
     */
    readonly container?: string;
    /**
     * @schema CfnUserProps#Country
     */
    readonly country?: string;
    /**
     * @schema CfnUserProps#CustomAttributes
     */
    readonly customAttributes?: string;
    /**
     * @schema CfnUserProps#Department
     */
    readonly department?: string;
    /**
     * @schema CfnUserProps#Description
     */
    readonly description?: string;
    /**
     * @schema CfnUserProps#DisplayName
     */
    readonly displayName: string;
    /**
     * @schema CfnUserProps#Division
     */
    readonly division?: string;
    /**
     * @schema CfnUserProps#EmailAddress
     */
    readonly emailAddress?: string;
    /**
     * @schema CfnUserProps#EmployeeId
     */
    readonly employeeId?: string;
    /**
     * @schema CfnUserProps#EmployeeNumber
     */
    readonly employeeNumber?: string;
    /**
     * @schema CfnUserProps#Enabled
     */
    readonly enabled?: boolean;
    /**
     * @schema CfnUserProps#Fax
     */
    readonly fax?: string;
    /**
     * @schema CfnUserProps#GivenName
     */
    readonly givenName?: string;
    /**
     * @schema CfnUserProps#HomeDirectory
     */
    readonly homeDirectory?: string;
    /**
     * @schema CfnUserProps#HomeDrive
     */
    readonly homeDrive?: string;
    /**
     * @schema CfnUserProps#HomePage
     */
    readonly homePage?: string;
    /**
     * @schema CfnUserProps#HomePhone
     */
    readonly homePhone?: string;
    /**
     * @schema CfnUserProps#InitialPassword
     */
    readonly initialPassword?: string;
    /**
     * @schema CfnUserProps#Initials
     */
    readonly initials?: string;
    /**
     * @schema CfnUserProps#MobilePhone
     */
    readonly mobilePhone?: string;
    /**
     * @schema CfnUserProps#Office
     */
    readonly office?: string;
    /**
     * @schema CfnUserProps#OfficePhone
     */
    readonly officePhone?: string;
    /**
     * @schema CfnUserProps#Organization
     */
    readonly organization?: string;
    /**
     * @schema CfnUserProps#OtherName
     */
    readonly otherName?: string;
    /**
     * @schema CfnUserProps#PasswordNeverExpires
     */
    readonly passwordNeverExpires?: boolean;
    /**
     * @schema CfnUserProps#PoBox
     */
    readonly poBox?: string;
    /**
     * @schema CfnUserProps#PostalCode
     */
    readonly postalCode?: string;
    /**
     * @schema CfnUserProps#PrincipalName
     */
    readonly principalName: string;
    /**
     * @schema CfnUserProps#SamAccountName
     */
    readonly samAccountName: string;
    /**
     * @schema CfnUserProps#SmartCardLogonRequired
     */
    readonly smartCardLogonRequired?: boolean;
    /**
     * @schema CfnUserProps#State
     */
    readonly state?: string;
    /**
     * @schema CfnUserProps#StreetAddress
     */
    readonly streetAddress?: string;
    /**
     * @schema CfnUserProps#Surname
     */
    readonly surname?: string;
    /**
     * @schema CfnUserProps#Title
     */
    readonly title?: string;
    /**
     * @schema CfnUserProps#TrustedForDelegation
     */
    readonly trustedForDelegation?: boolean;
}
/**
 * Converts an object of type 'CfnUserProps' to JSON representation.
 */
export declare function toJson_CfnUserProps(obj: CfnUserProps | undefined): Record<string, any> | undefined;
/**
 * A CloudFormation `TF::AD::User`.
 *
 * @external
 * @cloudformationResource TF::AD::User
 * @link https://github.com/iann0036/cfn-tf-custom-types.git
 */
export declare class CfnUser extends cdk.CfnResource {
    /**
     * The CloudFormation resource type name for this resource class.
     *
     * @external
     */
    static readonly CFN_RESOURCE_TYPE_NAME = "TF::AD::User";
    /**
     * `TF::AD::User.CannotChangePassword`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly cannotChangePassword: any | undefined;
    /**
     * `TF::AD::User.City`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly city: string | undefined;
    /**
     * `TF::AD::User.Company`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly company: string | undefined;
    /**
     * `TF::AD::User.Container`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly container: string | undefined;
    /**
     * `TF::AD::User.Country`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly country: string | undefined;
    /**
     * `TF::AD::User.CustomAttributes`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly customAttributes: string | undefined;
    /**
     * `TF::AD::User.Department`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly department: string | undefined;
    /**
     * `TF::AD::User.Description`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly description: string | undefined;
    /**
     * `TF::AD::User.DisplayName`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly displayName: string;
    /**
     * `TF::AD::User.Division`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly division: string | undefined;
    /**
     * `TF::AD::User.EmailAddress`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly emailAddress: string | undefined;
    /**
     * `TF::AD::User.EmployeeId`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly employeeId: string | undefined;
    /**
     * `TF::AD::User.EmployeeNumber`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly employeeNumber: string | undefined;
    /**
     * `TF::AD::User.Enabled`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly enabled: any | undefined;
    /**
     * `TF::AD::User.Fax`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly fax: string | undefined;
    /**
     * `TF::AD::User.GivenName`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly givenName: string | undefined;
    /**
     * `TF::AD::User.HomeDirectory`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly homeDirectory: string | undefined;
    /**
     * `TF::AD::User.HomeDrive`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly homeDrive: string | undefined;
    /**
     * `TF::AD::User.HomePage`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly homePage: string | undefined;
    /**
     * `TF::AD::User.HomePhone`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly homePhone: string | undefined;
    /**
     * `TF::AD::User.InitialPassword`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly initialPassword: string | undefined;
    /**
     * `TF::AD::User.Initials`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly initials: string | undefined;
    /**
     * `TF::AD::User.MobilePhone`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly mobilePhone: string | undefined;
    /**
     * `TF::AD::User.Office`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly office: string | undefined;
    /**
     * `TF::AD::User.OfficePhone`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly officePhone: string | undefined;
    /**
     * `TF::AD::User.Organization`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly organization: string | undefined;
    /**
     * `TF::AD::User.OtherName`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly otherName: string | undefined;
    /**
     * `TF::AD::User.PasswordNeverExpires`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly passwordNeverExpires: any | undefined;
    /**
     * `TF::AD::User.PoBox`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly poBox: string | undefined;
    /**
     * `TF::AD::User.PostalCode`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly postalCode: string | undefined;
    /**
     * `TF::AD::User.PrincipalName`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly principalName: string;
    /**
     * `TF::AD::User.SamAccountName`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly samAccountName: string;
    /**
     * `TF::AD::User.SmartCardLogonRequired`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly smartCardLogonRequired: any | undefined;
    /**
     * `TF::AD::User.State`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly state: string | undefined;
    /**
     * `TF::AD::User.StreetAddress`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly streetAddress: string | undefined;
    /**
     * `TF::AD::User.Surname`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly surname: string | undefined;
    /**
     * `TF::AD::User.Title`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly title: string | undefined;
    /**
     * `TF::AD::User.TrustedForDelegation`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly trustedForDelegation: any | undefined;
    /**
     * Attribute `TF::AD::User.tfcfnid`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly attrTfcfnid: string;
    /**
     * Attribute `TF::AD::User.Id`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly attrId: string;
    /**
     * Attribute `TF::AD::User.Sid`.
     *
     * @external
     * @link https://github.com/iann0036/cfn-tf-custom-types.git
     */
    readonly attrSid: string;
    /**
     * Create a new `TF::AD::User`.
     *
     * @param scope - scope in which this resource is defined.
     * @param id - scoped id of the resource.
     * @param props - resource properties.
     * @external
     */
    constructor(scope: cdk.Construct, id: string, props: CfnUserProps);
}
