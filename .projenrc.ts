import { AwsCdkConstructLibrary } from 'projen';
import { generatePackages } from './projenrc/generate-packages';

const project = new AwsCdkConstructLibrary({
  author: 'Elad Ben-Israel',
  authorAddress: 'benisrae@amazon.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation-types',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdklabs/cdk-cloudformation-types.git',
});

project.addDevDeps('cdk-import');
project.addDevDeps('case');
project.addDevDeps('aws-sdk');

const packagesDir = 'packages';
const scope = '@cdk-cloudformation';

project.package.addField('private', true);
project.package.addField('workspaces', {
  packages: [`${packagesDir}/${scope}/*`],
});

project.addExcludeFromCleanup('packages/**');

generatePackages(project, {
  dir: packagesDir,
  scope: scope,
});

project.synth();