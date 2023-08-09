// control app flow and events
import { listRenderer, projectRendererInstance, taskRendererInstance } from "./render";
import Project from "./projects";
import Task from "./tasks";
import TodoList from './list';
import editElmnt from "./editElmnt";


export default class App {
  constructor() {
    this.list = null;
    this.listRenderer = null;
    this.projectRenderer = projectRendererInstance;
    this.taskRenderer = taskRendererInstance;
    this.loadFromLocalStorage();
    this.renderList();
    this.addEventsStatic();
  }

  // load storage 

  saveToLocalStorage() {
    localStorage.setItem('todolist', JSON.stringify(this.list));
  }

  loadFromLocalStorage() {
    const storedData = localStorage.getItem('todolist');
    console.log(JSON.parse(storedData))
    if (storedData) {
      this.list = TodoList.fromStorage(JSON.parse(storedData));
    }
    else {
      this.list = new TodoList();
      this.list.addProject(new Project('Home'));
      this.list.addProject(new Project('School'));
    }
    this.listRenderer = new listRenderer(this.list);
  }

  // add event listeners to static buttons
  addEventsStatic() {
    
    // user wants to add a project
    this.listRenderer.addProjectBtn.addEventListener('click', () => {
      this.refreshList();
      this.refreshProjectForm();
    });

    // user does not want to add a project
    this.listRenderer.addProjectCancel.addEventListener('click', () => {
      this.refreshList();
    });

    // user adds a project
   this.listRenderer.addProjectAdd.addEventListener('click', () => {
      let projectName = this.listRenderer.addProjField.value;
      if(projectName) {
        this.list.addProject(new Project(`${projectName}`))
        this.refreshList();
        this.saveToLocalStorage();
      }
    });

    // user adds or edits a task
    this.taskRenderer.edit.addEventListener('click', () => {
      const currentProject = this.projectRenderer.project;
      const currentTask = this.taskRenderer.task;
      this.taskRenderer.hideWarning();

      // Collect form values
      let title = this.taskRenderer.title.value;
      let desc = this.taskRenderer.desc.value;
      let date = this.taskRenderer.dueDate.value;
      let prio = parseInt(this.taskRenderer.prio.value);
      let time = this.taskRenderer.dueTime.value;

      if (date && title) {
        // form was reached through 'Add new Task'
        if (!currentTask) {
          currentProject.addTask(new Task(title, desc, date, time, prio))
        }

        // form was reached through the 'Edit' buttons
        else {
          currentTask.title = title;
          currentTask.description = desc;
          currentTask.dueDate = date;
          currentTask.dueTime = time;
          currentTask.priority = prio;
        }
        this.refreshProject(currentProject); 
        this.taskAddMode();
        this.taskRenderer.task = null;
      }
      else {
        this.taskRenderer.showWarning();
      }
    });


    // user deletes a task
    this.taskRenderer.delete.addEventListener('click', () => {
      const currentProject = this.taskRenderer.project;
      const currentTask = this.taskRenderer.task;
      currentProject.removeTask(currentTask);
      // this.hideDetails();
      this.refreshProject(currentProject);
      this.taskRenderer.task = null;
      this.taskAddMode();
    });
  }

  updateProjects() {
    // show tasks of the project when clicked
    this.listRenderer.projectItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.refreshProject(this.list.getProject(item.id));
        this.loadProjectDisplay();
      })
    });
  }

  updateTasks() {
    // user completes a task 
    this.projectRenderer.completeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentProject = this.projectRenderer.project;
        currentProject.removeTask(currentProject.getTask(btn.id));
        this.refreshProject(currentProject);
        this.taskAddMode();
      })
    });
    // user wamts to edit a task

    this.projectRenderer.editBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentProject = this.projectRenderer.project;
        const currentTask = currentProject.getTask(btn.id);
        this.taskRenderer.renderDetails(currentTask, currentProject);
        this.taskEditMode();
      })
    });
  }

  renderList() {
    this.listRenderer.renderProjects();
    this.updateProjects();
  }

  // Refresh list of projects
  refreshList() {
    this.renderList();
    this.refreshProjectForm();
    editElmnt.toggleToFlex(this.listRenderer.addProjectForm);
    editElmnt.toggleToFlex(this.listRenderer.addProjectBtn);
  }

  // Refresh project view
  refreshProject(project) {
    console.log(project)
    this.projectRenderer.renderTasks(project);
    this.updateTasks();
    this.refreshTaskForm();
    this.saveToLocalStorage();
  }

  // Hide task deatails
  hideDetails() {
    this.taskRenderer.details.style.display = 'none';
  }

  toggleTaskForm() {
    editElmnt.toggleToFlex(this.taskRenderer.details);
  }

  refreshTaskForm() {
    this.taskRenderer.title.value = '';
    this.taskRenderer.desc.value = '';
    this.taskRenderer.dueDate.value = '';
    this.taskRenderer.prio.value = 1;
    this.taskRenderer.dueTime.value = '';
    this.taskRenderer.tag.textContent = 'Add a task';
  }

  refreshProjectForm() {
    this.listRenderer.addProjField.value = '';
  }

  loadProjectDisplay() {
    this.projectRenderer.taskDisplay.style.display = 'flex';
    this.taskRenderer.details.style.display = 'flex';
  }

  taskEditMode() {
    this.taskRenderer.edit.textContent = 'Done';
    this.taskRenderer.tag.textContent = 'Edit task';
    this.taskRenderer.delete.style.display = 'block';
  }

  taskAddMode() {
    this.taskRenderer.edit.textContent = 'Add';
    this.taskRenderer.delete.style.display = 'none';
    this.refreshTaskForm();
  }
}


