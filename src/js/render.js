import editElmnt from "./editElmnt";
import * as domElmnt from './domElmnt';

// render details of the task
class taskRenderer {
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
    this.warning.textContent = '';
    this.details.style.display = 'flex';
    this.title.value = `${this.task.title}`;
    this.dueTime.value = `${this.task.dueTime}`;
    this.desc.value = `${this.task.description}`;
    this.dueDate.value = `${this.task.dueDate}`;
    this.prio.value = `${this.task.priority}`;
  }

  showWarning() {
    this.warning.textContent = 'Please input task title and due date';
  }

  hideWarning() {
    this.warning.textContent = '';
  }
}

export const taskRendererInstance = new taskRenderer();

// render tasks of the project
class projectRenderer {
  constructor() {
    this.tdItems = document.getElementById('task-items');
    this.name = document.getElementById('project-name');
    this.project = null;
    this.taskDisplay = domElmnt.taskDisplay;
    this.completeBtns = domElmnt.completeButtons();
    this.editBtns = domElmnt.editButtons();
  }

  renderTasks(currentProject) {
    // Update rendered project
    this.project = currentProject;
    this.tdItems.innerHTML = '';
    editElmnt.addText(this.name, currentProject.name);

    let task_id = 0;
    for (const task of currentProject.tasks) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item')
      taskItem.innerHTML = `
        <div class='task-info'> 
          <p>${task.title} - </p>
          <p>${task.formattedDueDate()}</p>
        </div>
      `;

      // Append an edit button
      const taskBtns = document.createElement('div');
      taskBtns.id = 'task-action-buttons';

      const editTaskBtn = document.createElement('button');
      editTaskBtn.textContent = 'Edit';
      editTaskBtn.id = `${task_id}`;
      editElmnt.addClass(editTaskBtn, ['task-action', 'edit-task'])
      // Append a complete button
      const checkTaskBtn = document.createElement('button');
      checkTaskBtn.textContent = 'Complete';
      checkTaskBtn.id = `${task_id}`;
      editElmnt.addClass(checkTaskBtn, ['task-action', 'check-task'])

      editElmnt.appendChildren(taskBtns, [editTaskBtn, checkTaskBtn]);
      taskItem.appendChild(taskBtns);
      this.tdItems.appendChild(taskItem);
      this.colorAccdgToPrio(task.priority, taskItem)
      task_id++;
    }

    // Recollect complete and edit buttons
    this.completeBtns = domElmnt.completeButtons();
    this.editBtns = domElmnt.editButtons();
  }
  
  colorAccdgToPrio(prio, element) {
    if (prio === 1) {
      element.classList.add('low-prio');
    }
    else if (prio === 2) {
      element.classList.add('mid-prio');
    }
    else {
      element.classList.add('high-prio');
    }
  }

}

export const projectRendererInstance = new projectRenderer();

// render list of projects
export class listRenderer {

  constructor(list) {
    this.list = list;
    this.pdItems = document.getElementById('project-items');
    this.addProjField = domElmnt.addProjectField;
    this.addProjectForm = domElmnt.addProjectForm;
    this.addProjectBtn = domElmnt.addProjectBtn;
    this.addProjectCancel = domElmnt.addProjectCancel;
    this.addProjectAdd = domElmnt.addProjectAdd;
    this.projectItems = domElmnt.projectItems();
  }

  renderProjects() {
    this.pdItems.innerHTML = '';
    let project_id = 0;
    
    for (const proj of this.list.projects) {
      const projItem = document.createElement('div');
      projItem.classList.add('project-item');
      projItem.textContent = `${proj.name}`;
      editElmnt.appendChildren(this.pdItems, [projItem])
      projItem.id = `${project_id}`;
      project_id++;
    }
    // Recollect project items for render
    this.projectItems = domElmnt.projectItems();
  }
}

// export const listRendererInstance = new listRenderer(LIST);