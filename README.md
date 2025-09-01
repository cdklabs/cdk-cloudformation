# Construct Libraries for Public CloudFormation Extensions

> Maturity: this project is currently in alpha. This means that breaking changes
> may occur.

This project includes an AWS CDK construct library for every public extension in
the [AWS CloudFormation Registry].

[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Usage

Every public extension (module/resource) in the AWS CloudFormation Registry is
available in a separate code library in all AWS CDK supported languages. Each
library includes generated constructs and data types based on the extension's
schema.

For example, to use the `TF::Random::String` type in TypeScript:

Install the module:

```sh
npm install @cdk-cloudformation/tf-random-string
```

Import the construct to your code and add it to your app like any other
construct:

```typescript
import { CfnString } from '@cdk-cloudformation/tf-random-string';

new CfnString(this, 'MyString', {
  length: 100,
  lower: true,
  upper: true,
});
```

## Versioning

The version of each library is based on the version of the public extension.
This means that you should be able to obtain any version by simply requesting
that version from your package manager.

## Release Status

<!--STATUS-BEGIN-->

Release status for 155 libraries:

* [![aqua-enterprise-enforcer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-enforcer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-enforcer.yml)
* [![aqua-enterprise-kubeenforcer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-kubeenforcer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-kubeenforcer.yml)
* [![aqua-enterprise-scanner](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-scanner.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-scanner.yml)
* [![aqua-enterprise-server](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-server.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-aqua-enterprise-server.yml)
* [![atlassian-opsgenie-integration](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-integration.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-integration.yml)
* [![atlassian-opsgenie-team](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-team.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-team.yml)
* [![atlassian-opsgenie-user](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-user.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-atlassian-opsgenie-user.yml)
* [![awscommunity-account-alternatecontact](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-account-alternatecontact.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-account-alternatecontact.yml)
* [![awscommunity-applicationautoscaling-scheduledaction](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-applicationautoscaling-scheduledaction.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-applicationautoscaling-scheduledaction.yml)
* [![awscommunity-dynamodb-item](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-dynamodb-item.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-dynamodb-item.yml)
* [![awscommunity-resource-lookup](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-resource-lookup.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-resource-lookup.yml)
* [![awscommunity-s3-deletebucketcontents](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-s3-deletebucketcontents.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-s3-deletebucketcontents.yml)
* [![awscommunity-time-offset](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-offset.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-offset.yml)
* [![awscommunity-time-sleep](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-sleep.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-sleep.yml)
* [![awscommunity-time-static](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-static.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awscommunity-time-static.yml)
* [![awsqs-eks-cluster](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-eks-cluster.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-eks-cluster.yml)
* [![awsqs-kubernetes-get](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-get.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-get.yml)
* [![awsqs-kubernetes-helm](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-helm.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-helm.yml)
* [![awsqs-kubernetes-resource](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-resource.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-awsqs-kubernetes-resource.yml)
* [![bigid-datasource-dynamodb](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-bigid-datasource-dynamodb.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-bigid-datasource-dynamodb.yml)
* [![bigid-datasource-s3](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-bigid-datasource-s3.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-bigid-datasource-s3.yml)
* [![cloudflare-dns-record](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-dns-record.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-dns-record.yml)
* [![cloudflare-loadbalancer-loadbalancer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-loadbalancer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-loadbalancer.yml)
* [![cloudflare-loadbalancer-monitor](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-monitor.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-monitor.yml)
* [![cloudflare-loadbalancer-pool](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-pool.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-cloudflare-loadbalancer-pool.yml)
* [![confluentcloud-iam-serviceaccount](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-confluentcloud-iam-serviceaccount.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-confluentcloud-iam-serviceaccount.yml)
* [![databricks-clusters-cluster](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-databricks-clusters-cluster.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-databricks-clusters-cluster.yml)
* [![databricks-clusters-job](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-databricks-clusters-job.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-databricks-clusters-job.yml)
* [![datadog-dashboards-dashboard](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-dashboards-dashboard.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-dashboards-dashboard.yml)
* [![datadog-integrations-aws](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-integrations-aws.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-integrations-aws.yml)
* [![datadog-integrations-awsaccount](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-integrations-awsaccount.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-integrations-awsaccount.yml)
* [![datadog-monitors-downtime](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-downtime.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-downtime.yml)
* [![datadog-monitors-downtimeschedule](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-downtimeschedule.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-downtimeschedule.yml)
* [![datadog-monitors-monitor](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-monitor.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-monitors-monitor.yml)
* [![datadog-slos-slo](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-slos-slo.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-datadog-slos-slo.yml)
* [![dynatrace-automation-sitereliabilityguardian](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-automation-sitereliabilityguardian.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-automation-sitereliabilityguardian.yml)
* [![dynatrace-automation-workflow](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-automation-workflow.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-automation-workflow.yml)
* [![dynatrace-configuration-dashboard](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-configuration-dashboard.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-configuration-dashboard.yml)
* [![dynatrace-environment-metric](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-metric.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-metric.yml)
* [![dynatrace-environment-servicelevelobjective](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-servicelevelobjective.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-servicelevelobjective.yml)
* [![dynatrace-environment-syntheticlocation](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-syntheticlocation.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-syntheticlocation.yml)
* [![dynatrace-environment-syntheticmonitor](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-syntheticmonitor.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-dynatrace-environment-syntheticmonitor.yml)
* [![fastly-dictionary-dictionary](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-dictionary-dictionary.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-dictionary-dictionary.yml)
* [![fastly-dictionary-dictionaryitem](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-dictionary-dictionaryitem.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-dictionary-dictionaryitem.yml)
* [![fastly-logging-s3](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-logging-s3.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-logging-s3.yml)
* [![fastly-logging-splunk](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-logging-splunk.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-logging-splunk.yml)
* [![fastly-services-activeversion](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-activeversion.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-activeversion.yml)
* [![fastly-services-backend](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-backend.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-backend.yml)
* [![fastly-services-domain](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-domain.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-domain.yml)
* [![fastly-services-healthcheck](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-healthcheck.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-healthcheck.yml)
* [![fastly-services-service](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-service.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-service.yml)
* [![fastly-services-version](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-version.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-services-version.yml)
* [![fastly-tls-certificate](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-certificate.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-certificate.yml)
* [![fastly-tls-domain](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-domain.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-domain.yml)
* [![fastly-tls-privatekeys](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-privatekeys.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fastly-tls-privatekeys.yml)
* [![fireeye-cloudintegrations-cloudwatch](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fireeye-cloudintegrations-cloudwatch.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-fireeye-cloudintegrations-cloudwatch.yml)
* [![generic-database-schema](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-generic-database-schema.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-generic-database-schema.yml)
* [![generic-transcribe-vocabulary](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-generic-transcribe-vocabulary.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-generic-transcribe-vocabulary.yml)
* [![github-git-tag](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-git-tag.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-git-tag.yml)
* [![github-organizations-membership](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-organizations-membership.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-organizations-membership.yml)
* [![github-organizations-secret](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-organizations-secret.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-organizations-secret.yml)
* [![github-repositories-collaborator](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-collaborator.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-collaborator.yml)
* [![github-repositories-repository](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-repository.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-repository.yml)
* [![github-repositories-secret](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-secret.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-secret.yml)
* [![github-repositories-webhook](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-webhook.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-repositories-webhook.yml)
* [![github-teams-membership](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-membership.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-membership.yml)
* [![github-teams-repositoryaccess](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-repositoryaccess.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-repositoryaccess.yml)
* [![github-teams-team](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-team.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-github-teams-team.yml)
* [![gitlab-code-tag](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-code-tag.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-code-tag.yml)
* [![gitlab-groups-group](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-group.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-group.yml)
* [![gitlab-groups-groupaccesstogroup](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-groupaccesstogroup.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-groupaccesstogroup.yml)
* [![gitlab-groups-usermemberofgroup](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-usermemberofgroup.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-groups-usermemberofgroup.yml)
* [![gitlab-projects-accesstoken](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-accesstoken.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-accesstoken.yml)
* [![gitlab-projects-groupaccesstoproject](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-groupaccesstoproject.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-groupaccesstoproject.yml)
* [![gitlab-projects-project](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-project.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-project.yml)
* [![gitlab-projects-usermemberofproject](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-usermemberofproject.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gitlab-projects-usermemberofproject.yml)
* [![gremlin-agent-helm](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gremlin-agent-helm.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-gremlin-agent-helm.yml)
* [![netapp-fsxn-cifsshare](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-cifsshare.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-cifsshare.yml)
* [![netapp-fsxn-clusterpeer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-clusterpeer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-clusterpeer.yml)
* [![netapp-fsxn-exportpolicy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-exportpolicy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-exportpolicy.yml)
* [![netapp-fsxn-igroup](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-igroup.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-igroup.yml)
* [![netapp-fsxn-lun](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-lun.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-lun.yml)
* [![netapp-fsxn-snapmirror](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapmirror.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapmirror.yml)
* [![netapp-fsxn-snapshot](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapshot.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapshot.yml)
* [![netapp-fsxn-snapshotpolicy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapshotpolicy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-snapshotpolicy.yml)
* [![netapp-fsxn-svmpeer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-svmpeer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-svmpeer.yml)
* [![netapp-fsxn-volume](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-volume.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-netapp-fsxn-volume.yml)
* [![newrelic-agent-configuration](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-agent-configuration.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-agent-configuration.yml)
* [![newrelic-alert-alertspolicy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-alert-alertspolicy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-alert-alertspolicy.yml)
* [![newrelic-alert-nrqlconditionstatic](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-alert-nrqlconditionstatic.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-alert-nrqlconditionstatic.yml)
* [![newrelic-cloudformation-dashboards](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-dashboards.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-dashboards.yml)
* [![newrelic-cloudformation-tagging](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-tagging.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-tagging.yml)
* [![newrelic-cloudformation-workloads](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-workloads.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-cloudformation-workloads.yml)
* [![newrelic-observability-ainotificationschannel](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-ainotificationschannel.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-ainotificationschannel.yml)
* [![newrelic-observability-ainotificationsdestination](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-ainotificationsdestination.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-ainotificationsdestination.yml)
* [![newrelic-observability-aiworkflows](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-aiworkflows.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-aiworkflows.yml)
* [![newrelic-observability-alertsmutingrule](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertsmutingrule.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertsmutingrule.yml)
* [![newrelic-observability-alertsnrqlcondition](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertsnrqlcondition.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertsnrqlcondition.yml)
* [![newrelic-observability-alertspolicy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertspolicy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-alertspolicy.yml)
* [![newrelic-observability-dashboards](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-dashboards.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-dashboards.yml)
* [![newrelic-observability-workloads](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-workloads.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-newrelic-observability-workloads.yml)
* [![okta-application-application](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-application-application.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-application-application.yml)
* [![okta-group-group](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-group.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-group.yml)
* [![okta-group-groupapplicationassociation](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-groupapplicationassociation.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-groupapplicationassociation.yml)
* [![okta-group-membership](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-membership.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-group-membership.yml)
* [![okta-policy-policy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-policy-policy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-okta-policy-policy.yml)
* [![pagerduty-escalationpolicies-escalationpolicy](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-escalationpolicies-escalationpolicy.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-escalationpolicies-escalationpolicy.yml)
* [![pagerduty-responseplays-responseplay](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-responseplays-responseplay.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-responseplays-responseplay.yml)
* [![pagerduty-schedules-schedule](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-schedules-schedule.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-schedules-schedule.yml)
* [![pagerduty-services-integration](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-services-integration.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-services-integration.yml)
* [![pagerduty-services-service](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-services-service.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-services-service.yml)
* [![pagerduty-teams-membership](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-teams-membership.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-teams-membership.yml)
* [![pagerduty-teams-team](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-teams-team.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-teams-team.yml)
* [![pagerduty-users-user](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-users-user.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-pagerduty-users-user.yml)
* [![paloaltonetworks-cloudngfw-ngfw](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-paloaltonetworks-cloudngfw-ngfw.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-paloaltonetworks-cloudngfw-ngfw.yml)
* [![paloaltonetworks-cloudngfw-rulestack](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-paloaltonetworks-cloudngfw-rulestack.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-paloaltonetworks-cloudngfw-rulestack.yml)
* [![poc-azure-blobstorage](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-poc-azure-blobstorage.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-poc-azure-blobstorage.yml)
* [![redis-cloud-database](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-database.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-database.yml)
* [![redis-cloud-peering](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-peering.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-peering.yml)
* [![redis-cloud-subscription](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-subscription.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloud-subscription.yml)
* [![redis-cloudformation-prodatabase](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-prodatabase.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-prodatabase.yml)
* [![redis-cloudformation-prosubscription](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-prosubscription.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-prosubscription.yml)
* [![redis-cloudformation-subscriptionpeering](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-subscriptionpeering.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-redis-cloudformation-subscriptionpeering.yml)
* [![rollbar-notifications-rule](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-notifications-rule.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-notifications-rule.yml)
* [![rollbar-projects-accesstoken](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-projects-accesstoken.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-projects-accesstoken.yml)
* [![rollbar-projects-project](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-projects-project.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-projects-project.yml)
* [![rollbar-teams-membership](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-teams-membership.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-teams-membership.yml)
* [![rollbar-teams-team](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-teams-team.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-rollbar-teams-team.yml)
* [![snowflake-database-database](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-database-database.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-database-database.yml)
* [![snowflake-database-grant](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-database-grant.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-database-grant.yml)
* [![snowflake-role-grant](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-role-grant.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-role-grant.yml)
* [![snowflake-role-role](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-role-role.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-role-role.yml)
* [![snowflake-user-user](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-user-user.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-user-user.yml)
* [![snowflake-warehouse-grant](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-warehouse-grant.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snowflake-warehouse-grant.yml)
* [![snyk-container-helm](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snyk-container-helm.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-snyk-container-helm.yml)
* [![spot-elastigroup-group](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-spot-elastigroup-group.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-spot-elastigroup-group.yml)
* [![stocks-orders-marketorder](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-stocks-orders-marketorder.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-stocks-orders-marketorder.yml)
* [![svectordb-vectordatabase-apikey](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-svectordb-vectordatabase-apikey.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-svectordb-vectordatabase-apikey.yml)
* [![svectordb-vectordatabase-database](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-svectordb-vectordatabase-database.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-svectordb-vectordatabase-database.yml)
* [![sysdig-helm-agent](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-sysdig-helm-agent.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-sysdig-helm-agent.yml)
* [![tf-ad-computer](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-ad-computer.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-ad-computer.yml)
* [![tf-ad-user](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-ad-user.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-ad-user.yml)
* [![tf-aws-keypair](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-keypair.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-keypair.yml)
* [![tf-aws-s3bucket](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-s3bucket.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-s3bucket.yml)
* [![tf-aws-s3bucketobject](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-s3bucketobject.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-aws-s3bucketobject.yml)
* [![tf-azuread-application](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-azuread-application.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-azuread-application.yml)
* [![tf-azuread-user](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-azuread-user.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-azuread-user.yml)
* [![tf-cloudflare-record](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-cloudflare-record.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-cloudflare-record.yml)
* [![tf-digitalocean-droplet](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-digitalocean-droplet.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-digitalocean-droplet.yml)
* [![tf-github-repository](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-github-repository.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-github-repository.yml)
* [![tf-google-storagebucket](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-google-storagebucket.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-google-storagebucket.yml)
* [![tf-pagerduty-service](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-pagerduty-service.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-pagerduty-service.yml)
* [![tf-random-string](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-random-string.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-random-string.yml)
* [![tf-random-uuid](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-random-uuid.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-tf-random-uuid.yml)
* [![trendmicro-cloudonecontainer-helm](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-trendmicro-cloudonecontainer-helm.yml/badge.svg)](https://github.com/cdklabs/cdk-cloudformation/actions/workflows/release-trendmicro-cloudonecontainer-helm.yml)

<!--STATUS-END-->

## Contributing

Contributions are welcome and celebrated. See
[CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more
information.

## License

This project is licensed under the [Apache-2.0](./LICENSE) License.
