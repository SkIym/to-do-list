import editElmnt from "./editElmnt.js";

// Dom stuff

export const userInterface = (() => {

  // main-grid
  const appGrid = document.createElement('div');
  editElmnt.appendChildren(document.body, [appGrid]);
  editElmnt.addId(appGrid, 'main-grid')

  // header
  const header = document.createElement('header');
  editElmnt.addId(header, 'header')
  editElmnt.addText(header, 'TO-DO!')

  // projects view
  const overview = document.createElement('div');
  editElmnt.addId(overview, 'overview')

    const projectDisplay = document.createElement('div');
    editElmnt.addId(projectDisplay, 'project-display')

      const pdTag = document.createElement('p');
      editElmnt.addText(pdTag, 'Your Projects')
      
      const pdItems = document.createElement('div')
      editElmnt.addId(pdItems, 'project-items');

      editElmnt.appendChildren(projectDisplay, [pdTag, pdItems]);

    const projectAddBtn = document.createElement('div');
    editElmnt.addId(projectAddBtn, 'add-project-container');

      const addBtn = document.createElement('button');
      editElmnt.addId(addBtn, 'add-project')
      editElmnt.addText(addBtn, 'Add new project');
      editElmnt.appendChildren(projectAddBtn, [addBtn]);

  editElmnt.appendChildren(overview, [projectDisplay, projectAddBtn]);

  // editing bench, show tasks on a particular project
  const projBench = document.createElement('div');
  editElmnt.addId(projBench, 'project-bench')

    const projName = document.createElement('p');
    editElmnt.addText(projName, 'Create a project and start adding tasks!');
    editElmnt.addId(projName, 'project-name')
    
    const taskDisplay = document.createElement('div');
    editElmnt.addId(taskDisplay, 'task-display')

      const tdTag = document.createElement('p');
      editElmnt.addText(tdTag, 'Your Tasks')
      
      const tdItems = document.createElement('div')
      editElmnt.addId(tdItems, 'task-items');

      editElmnt.appendChildren(taskDisplay, [tdTag, tdItems]);

    // hidden task details div
    const taskDetails = document.createElement('div');
    editElmnt.addId(taskDetails, 'task-details');
      
      const taskTitle = document.createElement('div');
      taskTitle.id = 'task-title';
      const taskDescription = document.createElement('div');
      taskDescription.id = 'task-desc';
      const taskPriority = document.createElement('div');
      taskPriority.id = 'task-prio';
      const taskDueDate = document.createElement('div');
      taskDueDate.id = 'task-date';
      const taskNotes = document.createElement('div');
      taskNotes.id = 'task-notes';
      const taskChecklist = document.createElement('div');
      taskChecklist.id = 'task-checklist';
      const doneDetails = document.createElement('button');
      doneDetails.id = 'done-button-details';
      doneDetails.textContent = 'Done';
    
      editElmnt.appendChildren(taskDetails, [taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist, doneDetails])
  
  editElmnt.appendChildren(projBench, [projName, taskDisplay, taskDetails]);
 
  // add to DOM
  editElmnt.appendChildren(appGrid, [header, overview, projBench]);

})();

export const projectForm = (() => {


})();
