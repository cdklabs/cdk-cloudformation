import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import { TypeScriptProject } from 'projen';
import { CloudFormationTypeProject } from './type-package';

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

export function generatePackages(project: TypeScriptProject, options: GeneratePackagesOptions) {
  const types: CloudFormation.DescribeTypeOutput[] = readdirSync(TYPE_DESCRIPTIONS).map(file => {
    return JSON.parse(readFileSync(join(TYPE_DESCRIPTIONS, file), 'utf8'));
  });

  const excludes = options.excludeTypes ?? [];
  const shouldExclude = (type: CloudFormation.DescribeTypeOutput) => type.TypeName && excludes.includes(type.TypeName);
  const statusMarkdown = new Array<string>();

  for (const type of types) {
    if (shouldExclude(type)) {
      console.log(`Excluding type ${type.TypeName}`);
      continue;
    }

    const p = new CloudFormationTypeProject(project, {
      packagesDir: options.dir,
      type: type,
      prerelease: options.prerelease,
    });

    statusMarkdown.push(`* ${p.statusBadge}`);
  }

  const readme = readFileSync(join(project.outdir, 'README.md'), 'utf-8').split('\n');

  // put status markdown between `<!--STATUS-BEGIN-->` and `<!--STATUS-END-->`.
  const statusBegin = readme.indexOf('<!--STATUS-BEGIN-->');
  const statusEnd = readme.indexOf('<!--STATUS-END-->');

  const combined = [
    ...readme.slice(0, statusBegin + 1),
    '',
    ...statusMarkdown,
    '',
    ...readme.slice(statusEnd),
  ];

  writeFileSync(join(project.outdir, 'README.md'), combined.join('\n'));
}
