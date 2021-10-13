import { join } from 'path';
import { Component, JsonFile, Project } from 'projen';

/**
 * Options for `TypePackage`.
 */
export interface TypePackageOptions {
  readonly packagesDir: string;
  readonly scope: string;
  readonly typeArn: string;
  readonly typeName: string;
}

/**
 * Represents a package for a specific CloudFormation type.
 */
export class CloudFormationTypeProject extends Component {

  private readonly subproject: Project;

  constructor(parent: Project, options: TypePackageOptions) {
    super(parent);

    const moduleName = options.typeName.replace(/::/g, '-').toLowerCase();
    const scope = options.scope;

    if (!scope.startsWith('@')) {
      throw new Error(`Scope must start with '@': ${scope}`);
    }

    const outdir = join(options.packagesDir, scope, moduleName);

    this.subproject = new Project({
      name: `${scope}/${moduleName}`,
      parent: parent,
      outdir: outdir,
    });

    console.log(outdir);

    new JsonFile(this.subproject, 'package.json', {
      obj: {
        name: `${scope}/${moduleName}`,
        description: `${scope}/${moduleName}`,
        version: '0.0.0',
        author: {
          name: 'Amazon Web Services',
          url: 'https://aws.amazon.com',
          organization: true,
        },
        devDependencies: {
          '@aws-cdk/core': '*',
          'constructs': '*',
        },
        peerDependencies: {
          '@aws-cdk/core': '*',
          'constructs': '*',
        },
        license: 'Apache-2.0',
      },
    });
  }
}
