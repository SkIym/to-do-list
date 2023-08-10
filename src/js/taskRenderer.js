import * as domElmnt from "./domElmnt";

class TaskRenderer {
  constructor() {
    this.task = null;
    this.project = null;
    this.details = domElmnt.addTaskForm;
    this.title = domElmnt.addTitle;
    this.dueDate = domElmnt.addDate;
    this.dueTime = domElmnt.addTime;
    this.desc = domElmnt.addDesc;
    this.prio = domElmnt.addPrio;
    this.edit = domElmnt.addTaskAdd;
    this.tag = domElmnt.taskTag;
    this.delete = domElmnt.deleteTaskBtn;
    this.warning = domElmnt.inputWarning;
  }

  renderDetails(currentTask, currentProject) {
    this.task = currentTask;
    this.project = currentProject;
    this.warning.textContent = "";
    this.details.style.display = "flex";
    this.title.value = `${this.task.title}`;
    this.dueTime.value = `${this.task.dueTime}`;
    this.desc.value = `${this.task.description}`;
    this.dueDate.value = `${this.task.dueDate}`;
    this.prio.value = `${this.task.priority}`;
  }

  showWarning() {
    this.warning.textContent = "Please input task title and due date";
  }

  hideWarning() {
    this.warning.textContent = "";
  }
}

const taskRendererInstance = new TaskRenderer();
export default taskRendererInstance;
