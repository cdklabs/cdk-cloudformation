import { Project } from 'projen';
import { CloudFormationTypeProject } from './type-package';
import { listCloudFormationTypes } from './util';

export interface GeneratePackagesOptions {
  readonly dir: string;
  readonly scope: string;
}

export function generatePackages(project: Project, options: GeneratePackagesOptions) {
  console.error('Discoverying all public CloudFormation types...');
  const types = listCloudFormationTypes().filter(t => !t.TypeName.startsWith('AWS::'));

  for (const type of types) {
    new CloudFormationTypeProject(project, {
      scope: options.scope,
      packagesDir: options.dir,
      typeArn: type.TypeArn,
      typeName: type.TypeName,
    });
  }
}
