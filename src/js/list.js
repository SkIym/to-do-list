// List of projects
import Project from "./projects";

export default class TodoList {
  constructor() {
    this._projects = [];
  }

  get projects() {
    return this._projects;
  }

  set projects(projects) {
    this._projects = projects;
  }

  getProject(id) {
    return this._projects[id];
  }

  addProject(project) {
    this._projects.push(project);
  }

  removeProject(rm) {
    this._projects = this._projects.filter((project) => project !== rm);
  }

  static fromStorage(listData) {
    const list = new TodoList();
    list.projects = listData._projects.map((projectData) =>
      Project.fromStorage(projectData),
    );
    return list;
  }
}
