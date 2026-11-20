import { CdklabsTypeScriptProject } from 'cdklabs-projen-project-types';
import { javascript, typescript } from 'projen';
import { DeprecatedTypes } from './projenrc/deprecated-types';
import { generatePackages, updateReadme } from './projenrc/generate-packages';
import { UpdateRegistry } from './projenrc/update-registry';

const project = new CdklabsTypeScriptProject({
  setNodeEngineVersion: false,
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation',
  projenrcTs: true,
  sampleCode: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.NPM,
  typescriptVersion: '~6.0',
  jestOptions: {
    jestVersion: '^30',
    // projen depends on ESM-only packages (dax) that jest can only require() with vm modules enabled
    experimentalVmModules: true,
  },
  runner: typescript.TypeScriptRunner.tsx(),
  eslintOptions: {
    dirs: [],
    // the root tsconfig has no inputs (there is no src/), use the projenrc one as the default project
    tsconfigPath: './projenrc/tsconfig.json',
  },
});

project.addDevDeps('cdk-import@^0.2.112');
project.addDevDeps('case');
project.addDevDeps('aws-sdk');
project.addDevDeps('constructs@^10.0.5');
project.addDevDeps('aws-cdk-lib');
project.addDevDeps('jsii');
project.addDevDeps('jsii-pacmak');
project.addDevDeps('jsii-rosetta');
project.addDevDeps('aws-cdk-github-oidc@^2.2.0');

// the root is not really a library
project.compileTask.reset();
project.packageTask.reset();

const packagesDir = 'packages';
const scope = '@cdk-cloudformation';
const packagesPath = `${packagesDir}/${scope}`;

// convenience tasks from to-level
project.addTask('compile-pkg', {
  exec: `cd ${packagesPath}/$@ && ${project.runTaskCommand(project.compileTask)}`,
  receiveArgs: true,
});
project.addTask('package-pkg', {
  exec: `cd ${packagesPath}/$@ && ${project.runTaskCommand(project.packageTask)}`,
  receiveArgs: true,
});
project.addTask('build-pkg', {
  exec: `cd ${packagesPath}/$@ && ${project.runTaskCommand(project.buildTask)}`,
  receiveArgs: true,
});


project.package.addField('workspaces', {
  packages: [`${packagesDir}/${scope}/*`],
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
