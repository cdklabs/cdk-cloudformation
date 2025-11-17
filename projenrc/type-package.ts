import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import * as caseutil from 'case';
import { CfnResourceGenerator } from 'cdk-import/lib/cfn-resource-generator';
import { Component, IgnoreFile, JsonFile, License, Project, ReleasableCommits, github, typescript } from 'projen';
import { DEFAULT_GITHUB_ACTIONS_USER } from 'projen/lib/github/constants';
import { WorkflowActions } from 'projen/lib/github/workflow-actions';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { Publisher } from 'projen/lib/release';
import { Readme } from './readme';

const JSII_VERSION = '1-bullseye-slim-node20';

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
  public readonly isDeprecated: boolean;
  public readonly name: string;

  constructor(parent: typescript.TypeScriptProject, options: TypePackageOptions) {
    super(parent);

    const typeName = options.type.TypeName!;
    const typeNameKebab = caseutil.kebab(typeName);
    const typeNameSnake = caseutil.snake(typeName);
    const typeNamePascal = caseutil.pascal(typeName);

    const npmScope = '@cdk-cloudformation';

    this.type = options.type;
    this.name = typeNameKebab;
    this.isDeprecated = !!options.readmeDeprecatedMessage;

    if (!npmScope.startsWith('@')) {
      throw new Error(`Scope must start with '@': ${npmScope}`);
    }

    const outdir = join(options.packagesDir, npmScope, typeNameKebab);
    const artifactDir = 'dist';
    const versionFile = `${artifactDir}/version.txt`;
    const changelogFile = `${artifactDir}/changelog.txt`;
    const releaseTagFile = `${artifactDir}/releasetag.txt`;

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
          outdir: artifactDir,
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
            types: ['node'],
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
    project.addGitIgnore('/tsconfig.json'); // <-- created by JSII
    project.addGitIgnore(`/${artifactDir}/`);
    project.addGitIgnore('tsconfig.tsbuildinfo');

    const npmignore = new IgnoreFile(project, '.npmignore');
    npmignore.readonly = false;
    npmignore.addPatterns('.projen');
    npmignore.addPatterns(artifactDir);
    npmignore.addPatterns('src');
    npmignore.addPatterns('test');
    npmignore.addPatterns('tsconfig.tsbuildinfo');
    npmignore.addPatterns('!.jsii');
    npmignore.addPatterns('!.jsii.gz');

    // remove default tasks
    project.tasks.removeTask('build');
    project.tasks.removeTask('test');
    project.tasks.removeTask('pre-compile');
    project.tasks.removeTask('post-compile');
    project.tasks.removeTask('compile');
    project.tasks.removeTask('package');

    const compileTask = project.tasks.addTask('compile', {
      description: `compile ${typeNameKebab} with JSII`,
      exec: 'jsii',
    });

    project.tasks.removeTask('package');
    const packageTask = project.addTask('package', {
      description: `produce multi-language packaging for ${typeNameKebab}`,
      exec: 'jsii-pacmak --no-npmignore',
    });

    const buildTask = project.addTask('build', {
      description: `build ${typeNameKebab}`,
    });

    buildTask.spawn(compileTask);
    buildTask.spawn(packageTask);

    parent.gitignore.addPatterns(`/${outdir}/${artifactDir}/`);
    parent.gitignore.addPatterns(`/${outdir}/lib/`);

    parent.autoMerge?.addConditions(`status-success=${typeNameKebab}`);

    // create a release workflow for this package
    const releaseWorkflow = parent.github!.addWorkflow(`release-${typeNameKebab}`);
    releaseWorkflow.on({
      push: {
        branches: ['main'],
      },
      workflowDispatch: {},
    });
    releaseWorkflow.addJob('build', {
      runsOn: ['ubuntu-latest'],
      container: {
        image: `jsii/superchain:${JSII_VERSION}`,
      },
      permissions: {
        contents: JobPermission.READ,
      },
      outputs: {
        releasable_commits: {
          stepId: 'check-commits',
          outputName: 'releasable_count',
        },
        tag_exists: {
          stepId: 'check-tag',
          outputName: 'exists',
        },
      },
      steps: [
        // check out sources.
        {
          name: 'Checkout',
          uses: 'actions/checkout@v4',
          with: {
            'fetch-depth': 0,
          },
        },

        // sets git identity so we can push later
        ...WorkflowActions.setupGitIdentity(DEFAULT_GITHUB_ACTIONS_USER),

        { run: 'yarn install' },

        // run the main build task
        {
          name: buildTask.name,
          run: `${project.projenCommand} ${buildTask.name}`,
          workingDirectory: outdir,
        },
        {
          name: 'Create version files',
          workingDirectory: outdir,
          run: [
            `echo $(node -p "require('./package.json').version") > ${versionFile}`,
            `echo "${npmName}@v$(cat ${versionFile})" > ${releaseTagFile}`,
            `echo "Update AWS CloudFormation Registry type ${typeName} to v$(cat ${versionFile})" > ${changelogFile}`,
          ].join('\n'),
        },
        {
          id: 'check-commits',
          name: 'Check for releasable commits',
          workingDirectory: outdir,
          run: [
            `LATEST_TAG=$(git -c "versionsort.suffix=-" tag --sort="-version:refname" --list "${npmName}@v*" | head -n 1)`,
            'echo ${LATEST_TAG:=$(git rev-list HEAD -- . | tail -1)^}', // if no tag was found, use the commit before the first commit in this directory
            `COUNT=$(${ReleasableCommits.featuresAndFixes('.').cmd} | wc -l | xargs)`, // xargs is trimming whitespace from the wc output
            'echo "releasable_count=$COUNT" >> $GITHUB_OUTPUT',
            'cat $GITHUB_OUTPUT',
          ].join('\n'),
        },
        github.WorkflowSteps.tagExists(`$(cat ${releaseTagFile})`, {
          workingDirectory: outdir,
        }),
        {
          // Always copy dist files even if previous steps have failed; for debugging
          if: 'always()',
          run: `mv ${outdir}/${artifactDir} .`,
        },
        github.WorkflowSteps.uploadArtifact({
          // Always upload files even if previous steps have failed; for debugging
          if: 'always()',
          with: {
            name: 'build-artifact',
            path: artifactDir,
          },
        }),
      ],
    });

    const publisher = new Publisher(project, {
      artifactName: artifactDir,
      buildJobId: 'build',
      condition: "(needs.build.outputs.tag_exists != 'true') && (needs.build.outputs.releasable_commits > 0)",
    });

    publisher.publishToGitHubReleases({
      versionFile,
      changelogFile,
      releaseTagFile,
    });
    publisher.publishToNpm({
      githubEnvironment: 'release',
      npmTokenSecret: 'CDK_CLOUDFORMATION_NPM_TOKEN',
    });
    publisher.publishToMaven({
      githubEnvironment: 'release',
    });
    publisher.publishToNuget({
      githubEnvironment: 'release',
      nugetApiKeySecret: 'CDK_CLOUDFORMATION_NUGET_API_KEY',
    });
    publisher.publishToPyPi({
      githubEnvironment: 'release',
      twineUsernameSecret: 'CDK_CLOUDFORMATION_TWINE_USERNAME',
      twinePasswordSecret: 'CDK_CLOUDFORMATION_TWINE_PASSWORD',
    });
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
    console.log(typeName);
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
