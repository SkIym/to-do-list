import editElmnt from "./editElmnt";
import TodoList from "./list";
import * as domElmnt from './domElmnt';

// render details of the task
class taskRenderer {
  constructor() {
    this.task = null;
    this.project = null;
    this.details = domElmnt.addTaskForm;
    this.title = domElmnt.addTitle;
    this.dueDate = domElmnt.addDate;
    this.desc = domElmnt.addDesc;
    this.prio = domElmnt.addPrio;
    this.edit = domElmnt.addTaskAdd;
    this.cancel = domElmnt.addTaskCancel;
    this.delete = domElmnt.deleteTaskBtn;
  }

  renderDetails(currentTask, currentProject) {
    this.task = currentTask;
    this.project = currentProject;
    this.details.style.display = 'flex';
    this.edit.textContent = 'Done';
    this.title.value = `${this.task.title}`;
    this.desc.value = `${this.task.description}`;
    this.dueDate.value = `${this.task.dueDate}`;
    this.prio.value = `${this.task.priority}`;
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
    this.addTaskBtn = domElmnt.addTaskBtn;
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
      editElmnt.addClass(taskItem, ['task-item']);
      taskItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.dueDate}</p>
      `;

      // Append an edit button
      const editTaskBtn = document.createElement('button');
      editTaskBtn.textContent = 'Edit';
      editTaskBtn.id = `${task_id}`;
      editTaskBtn.classList.add('edit-task');
      taskItem.appendChild(editTaskBtn);

      // Append a complete button
      const checkTaskBtn = document.createElement('button');
      checkTaskBtn.textContent = 'Complete';
      checkTaskBtn.id = `${task_id}`;
      checkTaskBtn.classList.add('check-task');
      taskItem.appendChild(checkTaskBtn);
      
      this.tdItems.appendChild(taskItem);
      task_id++;
    }

    // Recollect complete and edit buttons
    this.completeBtns = domElmnt.completeButtons();
    this.editBtns = domElmnt.editButtons();
  }
}

export const projectRendererInstance = new projectRenderer();

// render list of projects
class listRenderer {

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

export const LIST = new TodoList();
export const listRendererInstance = new listRenderer(LIST);