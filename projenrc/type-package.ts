import { writeFileSync } from 'fs';
import { join, relative } from 'path';
import type { CloudFormation } from 'aws-sdk';
import * as caseutil from 'case';
import { CfnResourceGenerator } from 'cdk-import/lib/cfn-resource-generator';
import { Component, JsonFile, License, Project, TextFile, TypeScriptProject } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CDK_VERSION = require('@aws-cdk/core/package.json').version;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const CONSTRUCTS_VERSION = require('constructs/package.json').version;

/**
 * Options for `TypePackage`.
 */
export interface TypePackageOptions {
  /**
   * Root directory of all generated packages.
   */
  readonly packagesDir: string;

  /**
   * CloudFormation type information.
   */
  readonly type: CloudFormation.DescribeTypeOutput;

  /**
   * Should this type be included in the build & release
   * @default true
   */
  readonly release?: boolean;
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

    const project = new Project({
      name: `${npmScope}/${typeNameKebab}`,
      parent: parent,
      outdir: outdir,
    });

    const spdx = 'Apache-2.0';

    new License(project, { spdx });

    const description = options.type.Description ?? `Constructs for ${typeName}`;

    new TextFile(project, 'README.md', {
      lines: [
        `# AWS CDK Constructs for ${typeName}`,
        '',
        `> ${description}`,
        '',
        ...(options.type.DocumentationUrl ? [`* [Documentation](${options.type.DocumentationUrl})`] : []),
        ...(options.type.SourceUrl ? [`* [Source](${options.type.SourceUrl})`] : []),
        '',
        '## License',
        '',
        'Distributed under the Apache-2.0 License.',
        '',
      ],
    });

    if (!options.type.LatestPublicVersion) {
      console.warn(`${typeName} does not have a LatestPublicVersion`);
    }

    new JsonFile(project, 'package.json', {
      obj: {
        name: `${npmScope}/${typeNameKebab}`,
        description: description.split('\n')[0], // only first line
        version: options.type.LatestPublicVersion ?? '0.0.0',
        author: {
          name: 'Amazon Web Services',
          url: 'https://aws.amazon.com',
          organization: true,
        },
        homepage: options.type.DocumentationUrl ?? options.type.SourceUrl,
        repository: {
          type: 'git',
          url: 'https://github.com/cdklabs/cdk-cloudformation-types.git',
          directory: outdir,
        },
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
        jsii: {
          outdir: 'dist',
          targets: {
            java: {
              package: `io.github.cdklabs.cdk_cloudformation_types.${typeNameSnake}`,
              maven: {
                groupId: 'io.github.cdklabs.cdk_cloudformation_types',
                artifactId: typeNameKebab,
              },
            },
            python: {
              distName: `cdk-cloudformation-types-${typeNameKebab}`,
              module: `cdk_cloudformation_types_${typeNameSnake}`,
            },
            dotnet: {
              namespace: `Cdklabs.CdkCloudFormationTypes.${typeNamePascal}`,
              packageId: `Cdklabs.CdkCloudFormationTypes.${typeNamePascal}`,
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
        devDependencies: {
          '@aws-cdk/core': CDK_VERSION,
          'constructs': CONSTRUCTS_VERSION,
        },
        license: spdx,
      },
    });

    project.addGitIgnore('/lib/');
    project.addGitIgnore('/dist/');
    project.addPackageIgnore('/src/');

    const compileTask = parent.addTask(`compile:${typeNameKebab}`, {
      description: `compile ${typeNameKebab} with JSII`,
      exec: 'jsii',
      cwd: outdir,
    });

    const packageTask = parent.addTask(`package:${typeNameKebab}`, {
      description: `produce multi-language packaging for ${typeNameKebab}`,
      exec: 'jsii-pacmak',
      cwd: outdir,
    });

    const buildTask = parent.addTask(`build:${typeNameKebab}`, {
      description: `build ${typeNameKebab}`,
    });

    buildTask.spawn(compileTask);
    buildTask.spawn(packageTask);

    parent.gitignore.addPatterns(`/${outdir}/dist/`);
    parent.gitignore.addPatterns(`/${outdir}/lib/`);

    const release = options.release ?? true;
    if (release) {
      parent.buildWorkflow?.addJobs({
        [typeNameKebab]: {
          runsOn: 'ubuntu-latest',
          container: {
            image: 'jsii/superchain:1-buster-slim',
          },
          permissions: {
            contents: JobPermission.READ,
          },
          steps: [
            { uses: 'actions/checkout@v2' },
            { run: 'yarn install' },
            { run: `yarn ${buildTask.name}` },
          ],
        },
      });
    }

    this.subproject = project;
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
