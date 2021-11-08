import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import * as caseutil from 'case';
import { CfnResourceGenerator } from 'cdk-import/lib/cfn-resource-generator';
import { Component, JsonFile, License, Project, TextFile, TypeScriptProject } from 'projen';
import { TaskWorkflow } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { Publisher } from 'projen/lib/release';

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

    const readme = [
      `# AWS CDK CloudFormation Constructs for ${typeName}`,
      '',
    ];

    readme.push(description);
    readme.push();

    if (options.type.DocumentationUrl || options.type.SourceUrl) {
      readme.push('## References');
      if (options.type.DocumentationUrl) {
        readme.push(`* [Documentation](${options.type.DocumentationUrl})`);
      }
      if (options.type.SourceUrl) {
        readme.push(`* [Source](${options.type.SourceUrl})`);
      }
      readme.push();
    }

    readme.push('## License');
    readme.push('');
    readme.push('Distributed under the Apache-2.0 License.');

    new TextFile(project, 'README.md', { lines: readme });

    if (!options.type.LatestPublicVersion) {
      console.warn(`${typeName} does not have a LatestPublicVersion`);
    }

    const version = options.type.LatestPublicVersion ?? '0.0.0';

    new JsonFile(project, 'package.json', {
      obj: {
        name: `${npmScope}/${typeNameKebab}`,
        description: description.split('\n')[0], // only first line
        version: `${version}-alpha.1`,
        author: {
          name: 'Amazon Web Services',
          url: 'https://aws.amazon.com',
          organization: true,
        },
        homepage: options.type.DocumentationUrl ?? options.type.SourceUrl,
        repository: {
          type: 'git',
          url: 'https://github.com/cdklabs/cdk-cloudformation.git',
          directory: outdir,
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
          image: 'jsii/superchain:1-buster-slim',
        },
      });

      const publisher = new Publisher(project, {
        artifactName: artifactDir,
        buildJobId: releaseWorkflow.jobId,
      });

      // publisher.publishToNpm();
      // publisher.publishToMaven();
      // publisher.publishToNuget();
      // publisher.publishToPyPi();
      // publisher.publishToGo();

      releaseWorkflow.addJobs(publisher.render());
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
}
