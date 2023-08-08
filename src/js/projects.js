// Projects (group of tasks)

export default class Project {
  constructor(name) {
    this._name = name;
    this._tasks = [];
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name;
  }

  get tasks() {
    return this._tasks.sort((a, b) => {
      return a.priority > b.priority ? -1 : 1;
    });
  }

  getTask(id) {
    return this._tasks[id]
  }

  addTask(task) {
    this._tasks.push(task)
  }

  removeTask(rm) {
    this._tasks = this._tasks.filter((task) => {
      return task !== rm;
     })
  }

}