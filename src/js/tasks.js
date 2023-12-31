// todo-items
import { format } from "date-fns";

export default class Task {
  constructor(title, description, dueDate, dueTime, priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._dueTime = dueTime;
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

  formattedDueDate() {
    return format(new Date(this._dueDate), "MMM dd");
  }

  get dueTime() {
    return this._dueTime;
  }

  set dueTime(time) {
    this._dueTime = time;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority = priority;
  }

  static fromStorage(taskData) {
    // eslint-disable-next-line max-len
    const task = new Task(
      taskData._title,
      taskData._description,
      taskData._dueDate,
      taskData._dueTime,
      taskData._priority,
    );
    return task;
  }
}
