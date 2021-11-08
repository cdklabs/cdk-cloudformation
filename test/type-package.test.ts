import { readFileSync } from 'fs';
import { join } from 'path';
import { TypeScriptProject } from 'projen';
import { Testing } from 'projen/lib/testing';
import { CloudFormationTypeProject } from '../projenrc/type-package';

test('CloudFormationTypeProject', () => {
  const root = new TypeScriptProject({
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
  expect(keys).toStrictEqual([
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/.gitignore',
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/.projen/tasks.json',
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/LICENSE',
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/package.json',
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/README.md',
    'my-packages/@cdk-cloudformation-types/tf-random-uuid/src/index.ts',
  ]);

  const pkgJson = snapshot['my-packages/@cdk-cloudformation-types/tf-random-uuid/package.json'];
  expect(pkgJson.description).toStrictEqual('CloudFormation equivalent of random_uuid');
  expect(pkgJson.version).toStrictEqual('1.0.0');
  expect(pkgJson.name).toStrictEqual('@cdk-cloudformation-types/tf-random-uuid');
  expect(pkgJson.jsii).toStrictEqual({
    outdir: 'dist',
    targets: {
      dotnet: {
        namespace: 'Cdklabs.CdkCloudFormationTypes.TFRandomUuid',
        packageId: 'Cdklabs.CdkCloudFormationTypes.TFRandomUuid',
      },
      java: {
        maven: {
          artifactId: 'tf-random-uuid',
          groupId: 'io.github.cdklabs.cdk_cloudformation_types',
        },
        package: 'io.github.cdklabs.cdk_cloudformation_types.tf_random_uuid',
      },
      python: {
        distName: 'cdk-cloudformation-types-tf-random-uuid',
        module: 'cdk_cloudformation_types_tf_random_uuid',
      },
    },
    tsc: {
      outDir: 'lib',
      rootDir: 'src',
    },
  });
});