import editElmnt from "./editElmnt";
import * as domElmnt from "./domElmnt";

class ProjectRenderer {
  constructor() {
    this.tdItems = document.getElementById("task-items");
    this.name = document.getElementById("project-name");
    this.project = null;
    this.taskDisplay = domElmnt.taskDisplay;
    this.completeBtns = domElmnt.completeButtons();
    this.editBtns = domElmnt.editButtons();
  }

  renderTasks(currentProject) {
    // Update rendered project
    this.project = currentProject;
    this.tdItems.innerHTML = "";
    editElmnt.addText(this.name, currentProject.name);

    let taskId = 0;

    currentProject.tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
      taskItem.innerHTML = `
        <div class='task-info'> 
          <p>${task.title} - </p>
          <p>${task.formattedDueDate()}</p>
        </div>
      `;

      // Append an edit button
      const taskBtns = document.createElement("div");
      taskBtns.id = "task-action-buttons";

      const editTaskBtn = document.createElement("button");
      editTaskBtn.textContent = "Edit";
      editTaskBtn.id = `${taskId}`;
      editElmnt.addClass(editTaskBtn, ["task-action", "edit-task"]);
      // Append a complete button
      const checkTaskBtn = document.createElement("button");
      checkTaskBtn.textContent = "Complete";
      checkTaskBtn.id = `${taskId}`;
      editElmnt.addClass(checkTaskBtn, ["task-action", "check-task"]);

      editElmnt.appendChildren(taskBtns, [editTaskBtn, checkTaskBtn]);
      taskItem.appendChild(taskBtns);
      this.tdItems.appendChild(taskItem);
      editElmnt.colorAccdgToPrio(task.priority, taskItem);
      taskId += 1;
    });
    // Recollect complete and edit buttons
    this.completeBtns = domElmnt.completeButtons();
    this.editBtns = domElmnt.editButtons();
  }
}

const projectRendererInstance = new ProjectRenderer();
export default projectRendererInstance;
