// control app flow and events
import { listRendererInstance, projectRendererInstance, taskRendererInstance, LIST } from "./render";
import Project from "./projects";
import Task from "./tasks";
import editElmnt from "./editElmnt";


export default class App {
  constructor() {
    this.list = LIST;
    this.list.addProject(new Project('Home'));
    this.list.addProject(new Project('School'));
    this.listRenderer = listRendererInstance;
    this.projectRenderer = projectRendererInstance;
    this.taskRenderer = taskRendererInstance;
    this.renderList();
    this.addEventsStatic();
    this.updateProjects();
  }

  // load storage - WIP

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
      this.list.addProject(new Project(`${this.listRenderer.addProjField.value}`))
      this.refreshList();
    });

    // user wants to add a task
    this.projectRenderer.addTaskBtn.addEventListener('click', () => {
      this.toggleTaskForm();
      this.refreshTaskForm();
      this.taskAddMode();
      this.taskRenderer.hideWarning();
    });

    // user adds or edits a task
    this.taskRenderer.edit.addEventListener('click', () => {
      const currentProject = this.projectRenderer.project;
      const currentTask = this.taskRenderer.task;

      // Collect form values
      let title = this.taskRenderer.title.value;
      let desc = this.taskRenderer.desc.value;
      let date = this.taskRenderer.dueDate.value;
      let prio = this.taskRenderer.prio.value;
      let time = this.taskRenderer.dueTime.value;

      if (date && title) {
        // div was reached through 'Add new Task'
        if (!currentTask) {
          currentProject.addTask(new Task(title, desc, date, time, prio))
        }

        // div was reached through the 'Edit' buttons
        else {
          console.log('editing')
          currentTask.title = title;
          currentTask.description = desc;
          currentTask.dueDate = date;
          currentTask.dueTime = time;
          currentTask.priority = prio;
        }
        this.refreshProject(currentProject); 
        this.toggleTaskForm();
        this.taskRenderer.task = null;
      }
      else {
        this.taskRenderer.showWarning();
      }
    });

    // user cancels task edit
    this.taskRenderer.cancel.addEventListener('click', () => {
      this.toggleTaskForm();
      this.hideDetails();
    });

    // user wants to delete task
    this.taskRenderer.delete.addEventListener('click', () => {
      const currentProject = this.taskRenderer.project;
      const currentTask = this.taskRenderer.task;
      currentProject.removeTask(currentTask);
      this.hideDetails();
      this.refreshProject(currentProject);
      this.taskRenderer.task = null;
    });
  }

  updateProjects() {
    // show tasks of the project when clicked
    this.listRenderer.projectItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.refreshProject(LIST.getProject(item.id));
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
  }

  // Refresh list of projects
  refreshList() {
    this.renderList();
    this.refreshProjectForm();
    this.updateProjects();
    editElmnt.toggleToFlex(this.listRenderer.addProjectForm);
    editElmnt.toggleToFlex(this.listRenderer.addProjectBtn);
  }

  // Refresh project view
  refreshProject(project) {
    this.projectRenderer.renderTasks(project);
    this.updateTasks();
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
    this.taskRenderer.prio.value = '';
    this.taskRenderer.dueTime.value = '';
  }

  refreshProjectForm() {
    this.listRenderer.addProjField.value = '';
  }

  loadProjectDisplay() {
    this.hideDetails();
    this.projectRenderer.addTaskBtn.style.display = 'flex';
    this.projectRenderer.taskDisplay.style.display = 'flex';
  }

  taskEditMode() {
    this.taskRenderer.edit.textContent = 'Done';
    this.taskRenderer.delete.style.display = 'block';
    this.taskRenderer.cancel.style.display = 'none';
  }

  taskAddMode() {
    this.taskRenderer.edit.textContent = 'Add';
    this.taskRenderer.delete.style.display = 'none';
    this.taskRenderer.cancel.style.display = 'block';
  }
}


