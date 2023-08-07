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

    const projectAddForm = document.createElement('div');
    projectAddForm.id = 'add-project-form';
    projectAddForm.style.display ='none';

      const txtField = document.createElement('input');
      txtField.type = 'text';
      txtField.id = 'add-project-input';
      txtField.pattern = '[A-Za-z]+';

      const actionBtns = document.createElement('div');
      actionBtns.id = 'project-add-buttons'

      const add = document.createElement('button');
      add.textContent = 'Add';
      add.id = 'add-project-button';

      const cancel = document.createElement('button');
      cancel.textContent = 'Cancel';
      cancel.id = 'cancel-add-project-button';

      editElmnt.appendChildren(actionBtns, [add, cancel]);
      editElmnt.appendChildren(projectAddForm, [txtField, actionBtns]);

  editElmnt.appendChildren(overview, [projectDisplay, projectAddBtn, projectAddForm]);

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

    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task';
    addTaskBtn.textContent = 'Add new task';

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
      const doneDetails = document.createElement('button');
      doneDetails.id = 'done-button-details';
      doneDetails.textContent = 'Done';

      const deteleTask = document.createElement('button');
      deteleTask.id = 'delete-task-button';
      deteleTask.textContent = 'Delete';
    
      editElmnt.appendChildren(taskDetails, [taskTitle, taskDescription, taskDueDate, taskPriority, doneDetails,deteleTask])

    const addTaskForm = document.createElement('div');
    addTaskForm.id = 'add-task-form';
    addTaskForm.style.display = 'none';

      const titleInput = document.createElement('input');
      titleInput.id = 'task-title-input';
      titleInput.type = 'text';

      const descInput = document.createElement('input');
      descInput.id = 'task-desc-input';
      descInput.type = 'text';

      const dueDateInput = document.createElement('input');
      dueDateInput.id = 'task-date-input';
      dueDateInput.type = 'date';

      const priorityInput = document.createElement('select');
      priorityInput.id = 'task-prio-input';

        const high = document.createElement('option');
        high.textContent = 'High';
        high.value = 3;

        const mid = document.createElement('option');
        mid.textContent = 'Mid';
        mid.value = 2;

        const low = document.createElement('option');
        low.textContent = 'Low';
        low.value = 1;
    
        editElmnt.appendChildren(priorityInput, [high, mid, low])

      const addTaskActions = document.createElement('div')
      
        const addTaskAdd = document.createElement('button');
        addTaskAdd.id = 'add-task-add'
        addTaskAdd.textContent = 'Add';

        const addTaskCancel = document.createElement('button');
        addTaskCancel.id = 'add-task-cancel'
        addTaskCancel.textContent = 'Cancel';

        editElmnt.appendChildren(addTaskActions, [addTaskAdd, addTaskCancel]);

      editElmnt.appendChildren(addTaskForm, [titleInput, descInput, dueDateInput, priorityInput, addTaskActions]);

  editElmnt.appendChildren(projBench, [projName, taskDisplay, addTaskBtn, taskDetails, addTaskForm]);
 
  // add to DOM
  editElmnt.appendChildren(appGrid, [header, overview, projBench]);

})();

export const projectForm = (() => {


})();