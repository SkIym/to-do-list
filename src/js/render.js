import editElmnt from "./editElmnt";
import Task from "./tasks";

// render projects list
export class listRenderer {

  constructor(list) {
    this.list = list;
    this.pdItems = document.getElementById('project-items');
  }

  renderProjects() {
    this.pdItems.innerHTML = '';
    for (const proj of this.list.projects) {
      const projItem = document.createElement('div');
      editElmnt.addClass(projItem, ['project-item'])
      editElmnt.addText(projItem, `${proj.name}`);
      editElmnt.appendChildren(this.pdItems, [projItem])
      
      // Clicking the div element will change project view and render the respective tasks
      projItem.addEventListener('click', () => {
        new projectRenderer(proj).renderTasks();
        document.getElementById('task-details').style.display = 'none';

      });
    }
  }
}

// render tasks of the project
class projectRenderer {
  constructor(project) {
    this.project = project;
    this.tdItems = document.getElementById('task-items');
    this.name = document.getElementById('project-name');
  }

  renderTasks() {
    this.tdItems.innerHTML = '';
    editElmnt.addText(this.name, this.project.name);

    for (const task of this.project.tasks) {
      const taskItem = document.createElement('div');
      editElmnt.addClass(taskItem, ['task-item']);
      taskItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.dueDate}</p>
      `;

      const editTaskBtn = document.createElement('button');
      editTaskBtn.addEventListener('click', () => {
        new taskRenderer(task, this.project).renderDetails();
      });
      editTaskBtn.textContent = 'Edit';
      taskItem.appendChild(editTaskBtn);

      const checkTaskBtn = document.createElement('button');
      checkTaskBtn.addEventListener('click', () => {
        this.project.removeTask(task);
        this.renderTasks();
      });
      checkTaskBtn.textContent = 'Complete';
      taskItem.appendChild(checkTaskBtn);


      editElmnt.appendChildren(this.tdItems, [taskItem])
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task';
    addTaskBtn.textContent = 'Add new task';
    addTaskBtn.addEventListener('click', () => {
      // temp adding funciton
      this.project.addTask(new Task('title','desc','duedate','priority'));
      this.renderTasks();
    });
    this.tdItems.appendChild(addTaskBtn);
  }
}


// render details of the tasks

class taskRenderer {
  constructor(task, project) {
    this.project = project;
    this.task = task;
    this.details = document.getElementById('task-details')
    this.title = document.getElementById('task-title');
    this.dueDate = document.getElementById('task-date');
    this.desc = document.getElementById('task-desc');
    this.prio = document.getElementById('task-prio');
    this.done = document.getElementById('done-button-details');
    this.delete = document.getElementById('delete-task-button');
  }

  renderDetails() {
    this.details.style.display = 'flex';
    this.title.textContent = `${this.task.title}`;
    this.desc.textContent = `${this.task.description}`;
    this.dueDate.textContent = `${this.task.dueDate}`;
    this.prio.textContent = `${this.task.priority}`;

    this.done.onclick = () => {
      this.details.style.display = 'none';
    }

    this.delete.onclick = () => {
      this.details.style.display = 'none';
      this.project.removeTask(this.task);
      new projectRenderer(this.project).renderTasks();
    }

  }
}