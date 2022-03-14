import { typescript } from 'projen';
import { generatePackages, updateReadme } from './projenrc/generate-packages';
import { UpdateRegistry } from './projenrc/update-registry';
import { DeprecatedTypes } from './projenrc/deprecated-types';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation-types',
  projenrcTs: true,
  sampleCode: false,
});

project.package.addField('private', true);

project.addDevDeps('cdk-import@^0.2.112');
project.addDevDeps('case');
project.addDevDeps('aws-sdk');
project.addDevDeps('constructs@^10.0.5');
project.addDevDeps('aws-cdk-lib');
project.addDevDeps('jsii');
project.addDevDeps('jsii-pacmak');
project.addDevDeps('aws-cdk-github-oidc@^2.2.0');

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
  prerelease: 'alpha.5',
});

updateReadme(project, projects);

new UpdateRegistry(project);
new DeprecatedTypes(project);

project.synth();
