// control app flow
import { listRendererInstance, projectRendererInstance, taskRendererInstance, LIST } from "./render";
import Project from "./projects";
import Task from "./tasks";
import * as domElmnt from './domElmnt';
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
    this.addEventsDynamic();
  }

  // load storage

  // add event listeners to buttons
  addEventsStatic() {
    
    // user wants to add a project
    domElmnt.addProjectBtn.addEventListener('click', () => {
      this.refreshList();
    });

    // user changes mind
    domElmnt.addProjectCancel.addEventListener('click', () => {
      this.refreshList();
    });

    // user adds a project
    domElmnt.addProjectAdd.addEventListener('click', () => {
      this.list.addProject(new Project(`${domElmnt.addProjectField.value}`))
      domElmnt.addProjectField.value = '';
      this.refreshList();
      this.addEventsDynamic();
    });

    // user adds a task
    domElmnt.addTaskBtn.addEventListener('click', () => {
      this.toggleTaskForm();
      this.refreshTaskForm();
      domElmnt.addTaskAdd.textContent = 'Add';
    });

    domElmnt.addTaskAdd.addEventListener('click', () => {
      const currentProject = this.projectRenderer.project;
      const currentTask = this.taskRenderer.task;
      const title = domElmnt.addTitle.value;
      const desc = domElmnt.addDesc.value
      const date = domElmnt.addDate.value;
      const prio = domElmnt.addPrio.value;

      console.log(currentTask)
      if (!currentTask) {
        currentProject.addTask(new Task(title, desc, date, prio))
      }
      else {
        currentTask.title = title;
        currentTask.description = desc;
        currentTask.dueDate = date;
        currentTask.priority = prio;
      }

      this.refreshProject(currentProject); 
      this.addEventsDynamic();
      this.toggleTaskForm();
      this.taskRenderer.task = null;
    });

    domElmnt.addTaskCancel.addEventListener('click', () => {
      this.toggleTaskForm();
    });

    // user is done editing
    domElmnt.doneEditBtn.addEventListener('click', () => {
      this.hideDetails();
    });

    // user wants to delete task
    domElmnt.deleteTaskBtn.addEventListener('click', () => {
      const currentProject = this.taskRenderer.project;
      const currentTask = this.taskRenderer.task;
      currentProject.removeTask(currentTask);
      this.hideDetails();
      this.refreshProject(currentProject);
      this.addEventsDynamic();
    });
  }

  addEventsDynamic() {

    // show tasks of the project when clicked
    domElmnt.projectItems().forEach((item) => {
      item.addEventListener('click', () => {
        this.refreshProject(LIST.getProject(item.id));
        domElmnt.taskMoreDetails.style.display = 'none';
      })
    });
    
    // user completes task 
    domElmnt.checkButtons().forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentProject = this.projectRenderer.project;
        currentProject.removeTask(currentProject.getTask(btn.id));
        this.refreshProject(currentProject);
        this.addEventsDynamic();
      })
    });

    // user wamts to edit task
    domElmnt.editButtons().forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentProject = this.projectRenderer.project;
        const currentTask = currentProject.getTask(btn.id);
        this.taskRenderer.task = currentTask;
        this.taskRenderer.renderDetails(currentTask, currentProject);
        // console.log(currentTask.priority);
      })
    });
  }

  // Render list of projects
  renderList() {
    this.listRenderer.renderProjects(); 
  }

  // Refresh list of projects
  refreshList() {
    this.renderList();
    editElmnt.toggleToFlex(domElmnt.addProjectForm);
    editElmnt.toggleToFlex(domElmnt.addProjectBtn);
  }

  // Refresh project view
  refreshProject(project) {
    this.projectRenderer.renderTasks(project);
  }

  // Hide task deatails
  hideDetails() {
    this.taskRenderer.details.style.display = 'none';
  }

  toggleTaskForm() {
    editElmnt.toggleToFlex(domElmnt.addTaskForm)
  }
  refreshTaskForm() {
    domElmnt.addTitle.value = '';
    domElmnt.addDesc.value = '';
    domElmnt.addDate.value = '';
    domElmnt.addPrio.value = '';
  }

}


