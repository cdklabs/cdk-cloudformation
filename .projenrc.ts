import { CdklabsTypeScriptProject } from 'cdklabs-projen-project-types';
import { ReleaseTrigger } from 'projen/lib/release';
import { DeprecatedTypes } from './projenrc/deprecated-types';
import { generatePackages, updateReadme } from './projenrc/generate-packages';
import { UpdateRegistry } from './projenrc/update-registry';

const project = new CdklabsTypeScriptProject({
  setNodeEngineVersion: false,
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation',
  projenrcTs: true,
  sampleCode: false,
  // This is temporary. We are throttling Maven with our concurrent package releases
  releaseTrigger: ReleaseTrigger.manual(),
});

project.addDevDeps('cdk-import@^0.2.112');
project.addDevDeps('case');
project.addDevDeps('aws-sdk');
project.addDevDeps('constructs@^10.0.5');
project.addDevDeps('aws-cdk-lib');
project.addDevDeps('jsii');
project.addDevDeps('jsii-pacmak');
project.addDevDeps('aws-cdk-github-oidc@^2.2.0');
project.addDevDeps('ts-node@^10');

// the root is not really a library:x
project.compileTask.reset();
project.packageTask.reset();

const packagesDir = 'packages';
const scope = '@cdk-cloudformation';

project.package.addField('workspaces', {
  packages: [`${packagesDir}/${scope}/*`],
});
project.package.addField('resolutions', {
  // Newer @types package doesn't work with old TypeScript
  '@types/prettier': '2.4.4',
});

project.addExcludeFromCleanup('packages/**');

const projects = generatePackages(project, {
  excludeTypes: [
    'TF::Akamai::DnsRecord', // https://github.com/cdklabs/cdk-cloudformation/runs/4131637186
  ],
  dir: packagesDir,
  scope: scope,
  prerelease: 'alpha.7',
});

updateReadme(project, projects);

new UpdateRegistry(project);
new DeprecatedTypes(project);

project.synth();
