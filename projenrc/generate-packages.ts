import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import type { CloudFormation } from 'aws-sdk';
import { Project } from 'projen';
import { CloudFormationTypeProject } from './type-package';

const REGISTRYDIR = join(__dirname, '..', 'registry', 'types');

export interface GeneratePackagesOptions {
  readonly dir: string;
  readonly scope: string;
}

export function generatePackages(project: Project, options: GeneratePackagesOptions) {
  console.error('Discoverying all public CloudFormation types...');

  const types: CloudFormation.DescribeTypeOutput[] = readdirSync(REGISTRYDIR).map(file => {
    return JSON.parse(readFileSync(join(REGISTRYDIR, file), 'utf8'));
  });

  for (const type of types) {
    new CloudFormationTypeProject(project, {
      packagesDir: options.dir,
      type: type,
    });
  }
}
