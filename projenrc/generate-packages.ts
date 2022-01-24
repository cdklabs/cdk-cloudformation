import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import { typescript } from 'projen';
import { CloudFormationTypeProject } from './type-package';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const deprecatedTypes = require('../deprecated-types.json').deprecatedTypes;

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

  const shouldDeprecate = (type: CloudFormation.DescribeTypeOutput) => type.TypeName && type.TypeName in deprecatedTypes;

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
      readmeDeprecatedMessage: shouldDeprecate(type) ? deprecatedTypes[type.TypeName!] : undefined,
    });

    projects.push(p);
  }

  return projects;
}

export function updateReadme(root: typescript.TypeScriptProject, projects: CloudFormationTypeProject[]) {
  const statusMarkdown = new Array<string>();
  for (const p of projects) {
    statusMarkdown.push(`* ${p.statusBadge}`);
  }

  const readme = readFileSync(join(root.outdir, 'README.md'), 'utf-8').split('\n');

  // put status markdown between `<!--STATUS-BEGIN-->` and `<!--STATUS-END-->`.
  const statusBegin = readme.indexOf('<!--STATUS-BEGIN-->');
  const statusEnd = readme.indexOf('<!--STATUS-END-->');

  const combined = [
    ...readme.slice(0, statusBegin + 1),
    '',
    `Release status for ${projects.length} libraries:`,
    '',
    ...statusMarkdown,
    '',
    ...readme.slice(statusEnd),
  ];

  writeFileSync(join(root.outdir, 'README.md'), combined.join('\n'));
}
