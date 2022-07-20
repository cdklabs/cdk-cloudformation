import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import * as caseutil from 'case';
import { CfnResourceGenerator } from 'cdk-import/lib/cfn-resource-generator';
import { Component, JsonFile, License, Project, typescript } from 'projen';
import { TaskWorkflow } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { Publisher } from 'projen/lib/release';
import { Readme } from './readme';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CDK_VERSION = require('aws-cdk-lib/package.json').version;
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
   * A pre-release tag to use in the version.
   * @example "alpha.2"
   * @default - no pre-release tag
   */
  readonly prerelease?: string;

  /**
   * The message to add to the README.md if this
   * type is deprecated
   *
   * @default - not deprecated/no message added
   */
  readonly readmeDeprecatedMessage?: string;
}

/**
 * Represents a package for a specific CloudFormation type.
 */
export class CloudFormationTypeProject extends Component {
  private readonly subproject: Project;
  private readonly type: CloudFormation.DescribeTypeOutput;

  public readonly statusBadge: string;

  constructor(parent: typescript.TypeScriptProject, options: TypePackageOptions) {
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
    const npmName = `${npmScope}/${typeNameKebab}`;

    new Readme(project, {
      type: options.type,
      typeName: typeName,
      npmName: npmName,
      kebabName: typeNameKebab,
      deprecatedMessage: options.readmeDeprecatedMessage,
    });

    if (!options.type.LatestPublicVersion) {
      console.warn(`${typeName} does not have a LatestPublicVersion`);
    }

    let version = options.type.LatestPublicVersion ?? '0.0.0';
    if (options.prerelease) {
      version += `-${options.prerelease}`;
    }

    const keywords = this.renderKeywords(options.type);

    new JsonFile(project, 'package.json', {
      obj: {
        name: npmName,
        description: description.split('\n')[0], // only first line
        version: version,
        deprecated: options.readmeDeprecatedMessage ? true : undefined,
        author: {
          name: 'Amazon Web Services',
          url: 'https://aws.amazon.com',
          organization: true,
        },
        keywords: keywords,
        homepage: options.type.DocumentationUrl ?? options.type.SourceUrl,
        repository: {
          type: 'git',
          url: 'https://github.com/cdklabs/cdk-cloudformation.git',
          directory: outdir,
        },
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
        publishConfig: {
          access: 'public',
        },
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
              namespace: `CdkCloudFormation.${typeNamePascal}`,
              packageId: `CdkCloudFormation.${typeNamePascal}`,
            },

            // TODO: add go support once we migrate to v2
            //go: {
            //  moduleName: 'github.com/cdklabs/cdk-cloudformation-go',
            //},
          },
          tsc: {
            outDir: 'lib',
            rootDir: 'src',
          },
        },
        peerDependencies: {
          'aws-cdk-lib': `^${CDK_VERSION}`,
          'constructs': `^${CONSTRUCTS_VERSION}`,
        },
        devDependencies: {
          'aws-cdk-lib': CDK_VERSION,
          'constructs': CONSTRUCTS_VERSION,
        },
        license: spdx,
      },
    });

    project.addGitIgnore('/.jsii');
    project.addGitIgnore('/lib/');
    project.addGitIgnore('/.npmignore'); // <-- created by JSII
    project.addGitIgnore('/tsconfig.json'); // <-- created by JSII
    project.addGitIgnore('/dist/');

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

    parent.buildWorkflow?.addPostBuildJob(typeNameKebab, {
      runsOn: ['ubuntu-latest'],
      container: {
        image: 'jsii/superchain:1-buster-slim-node14',
      },
      permissions: {
        contents: JobPermission.READ,
      },
      steps: [
        { uses: 'actions/checkout@v3' },
        { run: 'yarn install' },
        { run: `yarn ${buildTask.name}` },
      ],
    });

    // create a release workflow for this package
    const artifactDir = 'dist';
    const releaseWorkflow = new TaskWorkflow(parent.github!, {
      triggers: {
        push: {
          branches: ['main'],
        },
      },
      name: `release-${typeNameKebab}`,
      task: buildTask,
      preBuildSteps: [
        { run: 'yarn install' },
      ],
      postBuildSteps: [
        { run: `mv ${outdir}/dist .` },
      ],
      permissions: {
        contents: JobPermission.READ,
      },
      artifactsDirectory: artifactDir,
      container: {
        image: 'jsii/superchain:1-buster-slim-node14',
      },
    });

    const publisher = new Publisher(project, {
      artifactName: artifactDir,
      buildJobId: releaseWorkflow.jobId,
    });

    publisher.publishToNpm();
    publisher.publishToMaven({
      mavenEndpoint: 'https://s01.oss.sonatype.org', // cdklabs endpoint
    });
    publisher.publishToNuget();
    publisher.publishToPyPi();
    // publisher.publishToGo();

    releaseWorkflow.addJobs(publisher._renderJobsForBranch('main', { }));

    // used in the main README to list the release status of all packages
    this.statusBadge = `[![${typeNameKebab}](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/${releaseWorkflow.name}.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/${releaseWorkflow.name}.yml)`;

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
      mkdirSync(dirname(outpath), { recursive: true });
      writeFileSync(outpath, code);
    } finally {
      console.warn = originalWarn;
    }
  }

  private renderKeywords(type: CloudFormation.DescribeTypeOutput) {
    const keywords = [
      'cdk',
      'awscdk',
      'aws-cdk',
      'cloudformation',
      'cfn',
      'extensions',
      'constructs',
      'cfn-resources',
      'cloudformation-registry',
      'l1',
    ];
    const typeName = type.TypeName;
    if (typeName) {
      keywords.push(...typeName.split('::').map(x => x.toLowerCase()));
    }
    return keywords;
  }
}
