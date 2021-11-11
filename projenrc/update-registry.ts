import { Component, TypeScriptProject } from 'projen';

export class UpdateRegistry extends Component {
  constructor(project: TypeScriptProject) {
    super(project);

    project.addTask('update-registry', {
      exec: 'node registry/refresh.js',
    });
  }
}

