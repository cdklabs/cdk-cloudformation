import { Component, Project, JsonFile } from 'projen';

/**
 * Options for deprecating a CloudFormation type
 */
export interface DeprecatedTypeOptions {
  /**
   * The CloudFormation type TypeName
   */
  readonly typeName: string;

  /**
   * The deprecation message that will be added to the README for that type
   */
  readonly deprecationMessage: string;
}

/**
 * Adding a type here will:
 * - add the deprecation message to the README for that type
 * - mark the package as `deprecated: true` in the package.json
 * - stop taking registry updates for the package (i.e. registry.js)
 *
 * The package will continue to be published to all package managers so that the
 * deprecation message will be visible.
 */
export const types: DeprecatedTypeOptions[] = [
  { typeName: 'Alexa::ASK::Skill', deprecationMessage: 'This package is deprecated. Please use @aws-cdk/alexa-ask instead' },
  { typeName: 'REGISTRY::TEST::RESOURCE1::MODULE', deprecationMessage: 'This package is deprecated' },
];

/**
 * Component to write a json file with information on what
 * types have been deprecated
 */
export class DeprecatedTypes extends Component {
  constructor(project: Project) {
    super(project);

    new JsonFile(project, 'deprecated-types.json', {
      obj: {
        deprecatedTypes: () => types.reduce((acc: { [typeName: string]: string }, type) => {
          acc[type.typeName] = type.deprecationMessage;
          return acc;
        }, {}),
      },
    });
  }
}
