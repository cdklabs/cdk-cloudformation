/**
 * CloudFormation types that are deprecated.
 *
 * Key: CloudFormation type TypeName
 * Value: the deprecation message that will be added to the README for that type
 *
 * Adding a type here will:
 * - add the deprecation message to the README for that type
 * - mark the package as `deprecated: true` in the package.json
 * - stop taking registry updates for the package (i.e. registry.js)
 *
 * The package will continue to be published to all package managers so that the
 * deprecation message will be visible.
 */
export const deprecatedTypes: { [typeName: string]: string } = {
  ['Alexa::ASK::Skill']: 'This package is deprecated. Please use @aws-cdk/alexa-ask instead',
  ['REGISTRY::TEST::RESOURCE1::MODULE']: 'This package is deprecated',
};
