import { GithubActionsIdentityProvider, GithubActionsRole } from 'aws-cdk-github-oidc';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Component, typescript } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { AwsInfrastructure } from './aws-infrastructure';

export class UpdateRegistry extends Component {
  constructor(project: typescript.TypeScriptProject) {
    super(project);

    const task = project.addTask('update-registry', {
      exec: 'node registry/refresh.js',
    });

    const infra = new AwsInfrastructure(project, {
      name: 'github-connect',
      account: '037840909260',
      region: 'us-east-1',
    });

    const stack = infra.stack;

    const roleName = 'github-cdklabs-cdk-cloudformation';
    const provider = new GithubActionsIdentityProvider(stack, 'GithubActionsIdentityProvider');
    const role = new GithubActionsRole(stack, 'GithubActionsRole', {
      roleName: roleName,
      owner: 'cdklabs',
      repo: 'cdk-cloudformation',
      provider: provider,
      description: 'Allows cdklabs/cdk-cloudformation to query the CloudFormation registry',
      filter: 'ref:refs/heads/main',
    });

    role.addToPolicy(new PolicyStatement({
      actions: ['cloudformation:ListTypes', 'cloudformation:DescribeType'],
      resources: ['*'],
    }));

    const workflow = project.github?.addWorkflow('update-registry');
    workflow?.on({
      workflowDispatch: {},
      schedule: [{ cron: '0 6 * * MON' }],
    });
    workflow?.addJobs({
      update: {
        permissions: {
          'id-token': JobPermission.WRITE,
          'contents': JobPermission.WRITE,
        } as any,
        runsOn: ['ubuntu-latest'],
        steps: [
          { uses: 'actions/checkout@v3' },
          {
            uses: 'aws-actions/configure-aws-credentials@v1-node16',
            with: {
              'role-to-assume': `arn:aws:iam::${infra.stack.account}:role/${roleName}`,
              'aws-region': infra.stack.region,
              'role-session-name': 'github-automation',
            },
          },
          { run: 'yarn install' },
          { run: this.project.runTaskCommand(task) },

          // create a pull request
          {
            uses: 'peter-evans/create-pull-request@v4',
            with: {
              'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
              'title': 'feat: cloudformation registry update',
              'commit-message': 'feat: cloudformation registry update',
              'branch': 'automation/update-registry',
              'committer': 'GitHub Automation <noreply@github.com>',
              'labels': 'auto-approve',
            },
          },

          // Auto-approve PR
          {
            uses: 'peter-evans/enable-pull-request-automerge@v2',
            with: {
              'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
              'pull-request-number': '${{ steps.create-pr.outputs.pull-request-number }}',
              'merge-method': 'squash',
            },
          },
        ],
      },
    });
  }
}
