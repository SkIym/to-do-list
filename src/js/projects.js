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
    return this._tasks
  }

  addTask(task) {
    this._tasks.push(task)
  }

  removeTask(rm) {
    this._tasks = this._tasks.filter((task) => {
      return tasks !== rm;
     })
  }

}