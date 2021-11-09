import { TypeScriptProject } from 'projen';
import { generatePackages, updateReadme } from './projenrc/generate-packages';

const project = new TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation-types',
  projenrcTs: true,
  sampleCode: false,
});

project.package.addField('private', true);

project.addDevDeps('cdk-import');
project.addDevDeps('case');
project.addDevDeps('aws-sdk');
project.addDevDeps('constructs');
project.addDevDeps('@aws-cdk/core');
project.addDevDeps('jsii');
project.addDevDeps('jsii-pacmak');

// the root is not really a library:x
project.compileTask.reset();
project.packageTask.reset();

const packagesDir = 'packages';
const scope = '@cdk-cloudformation';

project.package.addField('private', true);
project.package.addField('workspaces', {
  packages: [`${packagesDir}/${scope}/*`],
});

project.addExcludeFromCleanup('packages/**');

const projects = generatePackages(project, {
  excludeTypes: [
    'TF::Akamai::DnsRecord', // https://github.com/cdklabs/cdk-cloudformation-types/runs/4131637186
  ],
  dir: packagesDir,
  scope: scope,
  prerelease: 'alpha.2',
});

updateReadme(project, projects);

project.addTask('update-registry', {
  exec: 'node registry/refresh.js',
});

project.synth();