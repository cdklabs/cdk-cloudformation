import { readFileSync } from 'fs';
import { join } from 'path';
import { typescript } from 'projen';
import { Testing } from 'projen/lib/testing';
import { CloudFormationTypeProject } from '../projenrc/type-package';

test('CloudFormationTypeProject', () => {
  const root = new typescript.TypeScriptProject({
    name: 'test',
    defaultReleaseBranch: 'main',
  });

  const typedef = JSON.parse(readFileSync(join(__dirname, '../registry/types/tf-random-uuid.json'), 'utf-8'));

  new CloudFormationTypeProject(root, {
    packagesDir: 'my-packages',
    type: typedef,
  });

  const snapshot = Testing.synth(root);
  const keys = Object.keys(snapshot).filter(key => key.startsWith('my-packages/'));
  expect(keys.sort()).toStrictEqual([
    'my-packages/@cdk-cloudformation/tf-random-uuid/.gitattributes',
    'my-packages/@cdk-cloudformation/tf-random-uuid/.gitignore',
    'my-packages/@cdk-cloudformation/tf-random-uuid/.npmignore',
    'my-packages/@cdk-cloudformation/tf-random-uuid/.projen/files.json',
    'my-packages/@cdk-cloudformation/tf-random-uuid/.projen/tasks.json',
    'my-packages/@cdk-cloudformation/tf-random-uuid/LICENSE',
    'my-packages/@cdk-cloudformation/tf-random-uuid/README.md',
    'my-packages/@cdk-cloudformation/tf-random-uuid/package.json',
    'my-packages/@cdk-cloudformation/tf-random-uuid/src/index.ts',
  ]);

  const pkgJson = snapshot['my-packages/@cdk-cloudformation/tf-random-uuid/package.json'];
  expect(pkgJson.description).toStrictEqual('CloudFormation equivalent of random_uuid');
  expect(pkgJson.version).toStrictEqual('1.0.0');
  expect(pkgJson.name).toStrictEqual('@cdk-cloudformation/tf-random-uuid');
  expect(pkgJson.jsii).toStrictEqual({
    outdir: 'dist',
    targets: {
      dotnet: {
        namespace: 'CdkCloudFormation.TFRandomUuid',
        packageId: 'CdkCloudFormation.TFRandomUuid',
      },
      java: {
        maven: {
          artifactId: 'tf-random-uuid',
          groupId: 'io.github.cdklabs.cdk_cloudformation',
        },
        package: 'io.github.cdklabs.cdk_cloudformation.tf_random_uuid',
      },
      python: {
        distName: 'cdk-cloudformation-tf-random-uuid',
        module: 'cdk_cloudformation_tf_random_uuid',
      },
    },
    tsc: {
      outDir: 'lib',
      rootDir: 'src',
      types: ['node'],
    },
  });
});

test('CloudFormationTypeProject with deprecation', () => {
  const root = new typescript.TypeScriptProject({
    name: 'test',
    defaultReleaseBranch: 'main',
  });

  const typedef = JSON.parse(readFileSync(join(__dirname, '../registry/types/tf-random-uuid.json'), 'utf-8'));

  new CloudFormationTypeProject(root, {
    packagesDir: 'my-packages',
    type: typedef,
    readmeDeprecatedMessage: 'this project is deprecated',
  });

  const snapshot = Testing.synth(root);
  const pkgJson = snapshot['my-packages/@cdk-cloudformation/tf-random-uuid/package.json'];
  const readme = snapshot['my-packages/@cdk-cloudformation/tf-random-uuid/README.md'];
  expect(readme).toEqual(expect.stringMatching(/.*this project is deprecated.*/));
  expect(pkgJson.deprecated).toStrictEqual(true);
});
