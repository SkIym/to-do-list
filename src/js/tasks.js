// todo-items

export default class Task {
  constructor(title, description, dueDate, priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  get dueDate() {
    return this._dueDate; 
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority = priority;
  }

}
