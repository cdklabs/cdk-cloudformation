import { readdirSync, readFileSync } from 'fs';
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
}

export function generatePackages(project: TypeScriptProject, options: GeneratePackagesOptions) {
  const types: CloudFormation.DescribeTypeOutput[] = readdirSync(TYPE_DESCRIPTIONS).map(file => {
    return JSON.parse(readFileSync(join(TYPE_DESCRIPTIONS, file), 'utf8'));
  });

  for (const type of types) {
    new CloudFormationTypeProject(project, {
      packagesDir: options.dir,
      type: type,
    });
  }
}
