import editElmnt from "./editElmnt";
import * as domElmnt from "./domElmnt";

export default class ListRenderer {
  constructor(list) {
    this.list = list;
    this.pdItems = document.getElementById("project-items");
    this.addProjField = domElmnt.addProjectField;
    this.addProjectForm = domElmnt.addProjectForm;
    this.addProjectBtn = domElmnt.addProjectBtn;
    this.addProjectCancel = domElmnt.addProjectCancel;
    this.addProjectAdd = domElmnt.addProjectAdd;
    this.projectItems = domElmnt.projectItems();
  }

  renderProjects() {
    this.pdItems.innerHTML = "";
    let projectId = 0;

    this.list.projects.forEach((proj) => {
      const projItem = document.createElement("div");
      projItem.classList.add("project-item");
      projItem.textContent = `${proj.name}`;
      editElmnt.appendChildren(this.pdItems, [projItem]);
      projItem.id = `${projectId}`;
      projectId += 1;
    });

    // Recollect project items for render
    this.projectItems = domElmnt.projectItems();
  }
}
