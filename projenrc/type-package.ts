import { writeFileSync } from 'fs';
import { join, relative } from 'path';
import type { CloudFormation } from 'aws-sdk';
import * as caseutil from 'case';
import { CfnResourceGenerator } from 'cdk-import/lib/cfn-resource-generator';
import { Component, JsonFile, License, Project, TextFile, TypeScriptProject } from 'projen';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CDK_VERSION = require('@aws-cdk/core/package.json').version;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const CONSTRUCTS_VERSION = require('constructs/package.json').version;

/**
 * Options for `TypePackage`.
 */
export interface TypePackageOptions {
  readonly packagesDir: string;
  readonly type: CloudFormation.DescribeTypeOutput;
}

/**
 * Represents a package for a specific CloudFormation type.
 */
export class CloudFormationTypeProject extends Component {
  private readonly subproject: Project;
  private readonly type: CloudFormation.DescribeTypeOutput;

  constructor(parent: TypeScriptProject, options: TypePackageOptions) {
    super(parent);

    const typeName = options.type.TypeName!;
    const typeNameKebab = caseutil.kebab(typeName);
    const typeNameSnake = caseutil.snake(typeName);
    const typeNamePascal = caseutil.pascal(typeName);

    const npmScope = '@cdk-cloudformation';

    this.type = options.type;

    if (!npmScope.startsWith('@')) {
      throw new Error(`Scope must start with '@': ${npmScope}`);
    }

    const outdir = join(options.packagesDir, npmScope, typeNameKebab);

    this.subproject = new Project({
      name: `${npmScope}/${typeNameKebab}`,
      parent: parent,
      outdir: outdir,
    });

    const spdx = 'Apache-2.0';

    new License(this.subproject, { spdx });

    new TextFile(this.subproject, 'README.md', {
      lines: [
        `# AWS CDK Constructs for ${typeName}`,
        '',
        `> An AWS CDK construct library with types for ${typeName}`,
        '',
        '## License',
        '',
        'Distributed under the Apache-2.0 License.',
        '',
      ],
    });

    new JsonFile(this.subproject, 'package.json', {
      obj: {
        name: `${npmScope}/${typeNameKebab}`,
        description: `${npmScope}/${typeNameKebab}`,
        version: '0.0.0',
        author: {
          name: 'Amazon Web Services',
          url: 'https://aws.amazon.com',
          organization: true,
        },
        repository: {
          type: 'git',
          url: 'https://github.com/cdklabs/cdk-cloudformation-types.git',
          directory: this.subproject.outdir,
        },
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
        jsii: {
          outdir: 'dist',
          targets: {
            java: {
              package: `io.github.cdklabs.cdk_cloudformation.${typeNameSnake}`,
              maven: {
                groupId: 'io.github.cdklabs.cdk_cloudformation',
                artifactId: typeNameKebab,
              },
            },
            python: {
              distName: `cdk-cloudformation-${typeNameKebab}`,
              module: `cdk_cloudformation_${typeNameSnake}`,
            },
            dotnet: {
              namespace: `Cdklabs.CdkCloudFormation.${typeNamePascal}`,
              packageId: `Cdklabs.CdkCloudFormation.${typeNamePascal}`,
            },
          },
          tsc: {
            outDir: 'lib',
            rootDir: 'src',
          },
        },
        peerDependencies: {
          '@aws-cdk/core': `^${CDK_VERSION}`,
          'constructs': `^${CONSTRUCTS_VERSION}`,
        },
        license: spdx,
      },
    });

    const compile = parent.addTask(`compile:${typeNameKebab}`, {
      description: `compile ${typeNameKebab} with JSII`,
      cwd: this.subproject.outdir,
      exec: 'jsii',
    });

    const pkg = parent.addTask(`package:${typeNameKebab}`, {
      description: `produce multi-language packaging for ${typeNameKebab}`,
      cwd: this.subproject.outdir,
      exec: 'jsii-pacmak -vv',
    });

    pkg.exec(`rsync -av ${this.subproject.outdir}/dist/ dist/`);

    parent.compileTask.spawn(compile);
    parent.packageTask?.spawn(pkg);
  }

  public preSynthesize(): void {
    const outdir = this.subproject.outdir;
    const typeInfo = this.type;
    const schemaJson = this.type.Schema;
    const typeName = typeInfo.TypeName;
    const sourceUrl = typeInfo.SourceUrl ?? 'http://unknown-url';

    if (!schemaJson) {
      throw new Error(`Type ${typeInfo.TypeName} has no schema`);
    }

    if (!typeName) {
      throw new Error(`Type has no name: ${JSON.stringify(typeInfo)}`);
    }


    console.error(relative(process.cwd(), outdir));
    const originalWarn = console.warn;
    try {
      console.warn = (...args: string[]) => console.error('  >', ...args);
      const schema = JSON.parse(schemaJson);
      const gen = new CfnResourceGenerator(typeName, {
        Schema: schema,
        SourceUrl: sourceUrl,
        TypeName: typeName,
      }, schema);
      const code = gen.render();
      const outpath = join(outdir, 'src', 'index.ts');
      writeFileSync(outpath, code);
    } finally {
      console.warn = originalWarn;
    }
  }
}
