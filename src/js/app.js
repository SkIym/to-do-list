// control app flow
import { listRenderer } from "./render";
import TodoList from "./list";
import Project from "./projects";
import * as domElmnt from './domElmnt';
import editElmnt from "./editElmnt";

export default class App {
  constructor() {
    this.list = new TodoList();
    this.list.addProject(new Project('Home'));
    this.list.addProject(new Project('School'));
    this.listRenderer = new listRenderer(this.list);

    this.addEvents();
  }

  // load storage

  // add event listeners to buttons
  addEvents() {
    domElmnt.addProjectBtn.addEventListener('click', () => {
      this.refreshList();
    });

    domElmnt.addProjectCancel.addEventListener('click', () => {
      this.refreshList();
    })

    domElmnt.addProjectAdd.addEventListener('click', () => {
      this.list.addProject(new Project(`${domElmnt.addProjectField.value}`))
      domElmnt.addProjectField.value = '';
      this.refreshList();
    })

  }

  renderList() {
    this.listRenderer.renderProjects(); 
  }

  refreshList() {
    this.renderList();
    editElmnt.toggleToFlex(domElmnt.addProjectForm);
    editElmnt.toggleToFlex(domElmnt.addProjectBtn);
  }

}