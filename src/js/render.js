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
      });
    }
  }
}

// render tasks of the project
export class projectRenderer {
  constructor(project) {
    this.project = project;
    this.tdItems = document.getElementById('task-items');
    this.name = document.getElementById('project-name');
  }

  renderTasks() {
    this.tdItems.innerHTML = '';
    editElmnt.addText(this.name, this.project.name);

    // console.log(this.project.tasks)
    for (const task of this.project.tasks) {
      const taskItem = document.createElement('div');
      taskItem.innerHTML = `
        <p>${task.title}<p>
        <p>${task.dueDate}<p>
      `;
      editElmnt.appendChildren(this.tdItems, [taskItem])
    }

    const addTaskBtn = document.createElement('button');
    editElmnt.addId(addTaskBtn, 'add-task')
    editElmnt.addText(addTaskBtn, 'Add new task');
    addTaskBtn.addEventListener('click', () => {
      // temp adding funciton
      this.project.addTask(new Task('0','1','2','3','4','5'));
      this.renderTasks();
      console.log(this.project.tasks)
    });

    this.tdItems.appendChild(addTaskBtn);
  }
}


// render details of the tasks

export class taskRenderer {
  constructor(task) {
    this.task = task;
    this.details = document.getElementById('task-details')
    this.title = document.getElementById('task-title');
    this.dueDate = document.getElementById('task-date');
    this.desc = document.getElementById('task-desc');
    this.notes = document.getElementById('task-notes');
    this.checklist = document.getElementById('task-checklist');
    this.prio = document.getElementById('task-prio');
  }

  renderDetails() {
    this.title.textContent = `${this.task.title}`;
    this.desc.textContent = `${this.task.description}`;
    this.dueDate.textContent = `${this.task.dueDate}`;
    this.prio.textContent = `${this.task.priority}`;
    this.notes.textContent = `${this.task.notes}`;
    this.checklist.textContent = `${this.task.checklist}`;
  }
}