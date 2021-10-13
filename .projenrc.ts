import { AwsCdkConstructLibrary } from 'projen';
const project = new AwsCdkConstructLibrary({
  author: 'Elad Ben-Israel',
  authorAddress: 'benisrae@amazon.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudformation-types',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdklabs/cdk-cloudformation-types',

  // cdkDependencies: undefined,      /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();