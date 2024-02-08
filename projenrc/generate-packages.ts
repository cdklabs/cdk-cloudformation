import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import { typescript } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { CloudFormationTypeProject } from './type-package';

const JSII_VERSION = '1-bullseye-slim';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const deprecations = require('../deprecated-types.json');

// this directory includes the type description for all registry types
// it is updated by calling `yarn update-registry`
const TYPE_DESCRIPTIONS = join(__dirname, '..', 'registry', 'types');

export interface GeneratePackagesOptions {
  readonly dir: string;
  readonly scope: string;

  /**
   * List of type names (e.g. `Alexa::ASK::Skill`) to exclude from build
   *
   * @default []
   */
  readonly excludeTypes?: string[];

  /**
   * Pre-release tag to use.
   */
  readonly prerelease?: string;
}

export function generatePackages(root: typescript.TypeScriptProject, options: GeneratePackagesOptions): CloudFormationTypeProject[] {
  const types: CloudFormation.DescribeTypeOutput[] = readdirSync(TYPE_DESCRIPTIONS).map(file => {
    return JSON.parse(readFileSync(join(TYPE_DESCRIPTIONS, file), 'utf8'));
  });

  const excludes = options.excludeTypes ?? [];
  const shouldExclude = (type: CloudFormation.DescribeTypeOutput) => type.TypeName && excludes.includes(type.TypeName);

  const shouldDeprecate = (type: CloudFormation.DescribeTypeOutput): string | undefined => {
    if (type.TypeName && type.TypeName in deprecations.deprecatedTypes) {
      return deprecations.deprecatedTypes[type.TypeName];
    }

    const matchedPrefix = Object.keys(deprecations.deprecatedPrefixes).find(p => type.TypeName?.startsWith(p));
    if (matchedPrefix) {
      return deprecations.deprecatedPrefixes[matchedPrefix];
    }

    return undefined;
  };

  const projects = new Array<CloudFormationTypeProject>();

  for (const type of types) {
    if (shouldExclude(type)) {
      console.log(`Excluding type ${type.TypeName}`);
      continue;
    }

    const p = new CloudFormationTypeProject(root, {
      packagesDir: options.dir,
      type: type,
      prerelease: options.prerelease,
      readmeDeprecatedMessage: shouldDeprecate(type),
    });

    projects.push(p);
  }


  const buildIndividualWorkflow = root.github!.addWorkflow('build-individual');
  buildIndividualWorkflow.on({
    pullRequest: {},
    workflowDispatch: {},
  });
  buildIndividualWorkflow.addJob('build-all', {
    runsOn: ['ubuntu-latest'],
    container: {
      image: `jsii/superchain:${JSII_VERSION}`,
    },
    permissions: {
      contents: JobPermission.READ,
    },
    strategy: {
      maxParallel: 10, // limit concurrent requests
      failFast: false, // we want to see individual failures
      matrix: {
        domain: {
          project: projects.map(p => p.name),
        },
      },
    },
    steps: [
      { uses: 'actions/checkout@v4' },
      { run: 'yarn install' },
      {
        workingDirectory: 'packages/@cdk-cloudformation/${{ matrix.project }}',
        run: `${root.projenCommand} ${root.buildTask.name}`,
      },
    ],
  });

  // Add a join target to simplify branch protection setup
  buildIndividualWorkflow.addJob('build-okay', {
    name: 'Build Individual',
    permissions: {},
    runsOn: ['ubuntu-latest'],
    needs: ['build-all'],
    steps: [{
      name: 'OK',
      run: 'echo OK',
    }],
  });

  return projects;
}

export function updateReadme(root: typescript.TypeScriptProject, projects: CloudFormationTypeProject[]) {
  const statusMarkdown = new Array<string>();
  const supported = projects.filter(p => !p.isDeprecated);
  for (const p of supported) {
    statusMarkdown.push(`* ${p.statusBadge}`);
  }

  const readme = readFileSync(join(root.outdir, 'README.md'), 'utf-8').split('\n');

  // put status markdown between `<!--STATUS-BEGIN-->` and `<!--STATUS-END-->`.
  const statusBegin = readme.indexOf('<!--STATUS-BEGIN-->');
  const statusEnd = readme.indexOf('<!--STATUS-END-->');

  const combined = [
    ...readme.slice(0, statusBegin + 1),
    '',
    `Release status for ${supported.length} libraries:`,
    '',
    ...statusMarkdown,
    '',
    ...readme.slice(statusEnd),
  ];

  writeFileSync(join(root.outdir, 'README.md'), combined.join('\n'));
}
