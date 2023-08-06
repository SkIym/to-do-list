// control app flow
import { listRenderer } from "./render";
import TodoList from "./list";
import Project from "./projects";

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
    const addProjectBtn = document.getElementById('add-project');
    addProjectBtn.addEventListener('click', () => {
      // temp adding function
      this.list.addProject(new Project(prompt('Name?')))
      this.render();
    });
  }

  render() {
    this.listRenderer.renderProjects(); 
  }

}