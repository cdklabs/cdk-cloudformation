import { join } from 'path';
import { App, Stack } from 'aws-cdk-lib';
import { DependencyType, Component, Project } from 'projen';

export interface AwsInfrastructureProps {
  readonly name: string;
  readonly account?: string;
  readonly region?: string;
}

export class AwsInfrastructure extends Component {
  /**
   * The AWS CDK stack.
   */
  public readonly stack: Stack;

  private readonly app: App;

  constructor(project: Project, options: AwsInfrastructureProps) {
    super(project);

    if (!/^[a-z][a-z\-0-9]*$/.test(options.name)) {
      throw new Error(`"name" can only contain lowercase alphanumerica characters and hyphens: ${options.name}`);
    }

    const cdkoutRoot = '.awscdk';
    const reloutdir = join(cdkoutRoot, options.name);

    this.app = new App({
      outdir: join(project.outdir, reloutdir),
    });

    project.addGitIgnore(`/${cdkoutRoot}/`);
    project.addPackageIgnore(`/${cdkoutRoot}/`);

    this.stack = new Stack(this.app, options.name, {
      env: { account: options.account, region: options.region },
    });

    project.deps.addDependency('@aws-cdk/core', DependencyType.BUILD);
    project.deps.addDependency('aws-cdk', DependencyType.BUILD);

    const deploy = project.addTask(`cdk-deploy:${options.name}`);
    deploy.exec(`cdk bootstrap aws://${options.account}/${options.region}`);
    deploy.exec(`cdk deploy --app ${reloutdir}`);
  }

  public synthesize() {
    this.app.synth();
  }
}