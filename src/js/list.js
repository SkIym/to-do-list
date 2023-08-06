// List of projects

export default class TodoList {
  constructor() {
    this._projects = [];
  }

  get projects() {
    return this._projects;
  }

  addProject(project) {
    this._projects.push(project);
  }

  removeProject(rm) {
    this._projects = this._projects.filter((project) => {
      return project !== rm;
     })
  }

}