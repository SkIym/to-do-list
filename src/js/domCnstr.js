import editElmnt from "./editElmnt.js";
import addIcon from '../assets/add.png';

// Dom stuff

export const userInterface = (() => {

  // main-grid
  const appGrid = document.createElement('div');
  editElmnt.appendChildren(document.body, [appGrid]);
  editElmnt.addId(appGrid, 'main-grid')

  // projects view
  const overview = document.createElement('div');
  editElmnt.addId(overview, 'overview')

    const projectDisplay = document.createElement('div');
    editElmnt.addId(projectDisplay, 'project-display')

      const pdTag = document.createElement('p');
      editElmnt.addText(pdTag, 'Your Projects')
      
      const pdItems = document.createElement('div')
      editElmnt.addId(pdItems, 'project-items');

      const addBtn = document.createElement('button');
      editElmnt.addId(addBtn, 'add-project')
      const img = new Image();
      img.src = addIcon;
      img.style.width = '10px';
      addBtn.appendChild(img);
      addBtn.innerHTML += 'Add project';

    const projectAddForm = document.createElement('div');
    projectAddForm.id = 'add-project-form';
    projectAddForm.style.display ='none';

      const txtField = document.createElement('input');
      txtField.name = 'add-project-input';
      txtField.type = 'text';
      txtField.id = 'add-project-input';
      txtField.placeholder = 'Input a valid project name';
      txtField.pattern = '[A-Za-z]+';

      const actionBtns = document.createElement('div');
      actionBtns.id = 'project-add-buttons'

      const add = document.createElement('button');
      add.textContent = 'Add';
      add.type = 'button';
      add.id = 'add-project-button';

      const cancel = document.createElement('button');
      cancel.textContent = 'Cancel';
      add.type = 'button';
      cancel.id = 'cancel-add-project-button';

      editElmnt.appendChildren(actionBtns, [add, cancel]);
      editElmnt.appendChildren(projectAddForm, [txtField, actionBtns]);

      editElmnt.appendChildren(projectDisplay, [pdTag, pdItems, addBtn, projectAddForm]);

  editElmnt.appendChildren(overview, [projectDisplay]);

  // editing bench, show tasks on a particular project
  const projBench = document.createElement('div');
  projBench.id = 'project-bench';

    const projName = document.createElement('p');
    editElmnt.addText(projName, 'Create a project and start adding tasks!');
    editElmnt.addId(projName, 'project-name')

    const projectDisp = document.createElement('div');
    projectDisp.id = 'task-display-container';
    
    const taskDisplay = document.createElement('div');
    editElmnt.addId(taskDisplay, 'task-display')
    taskDisplay.style.display = 'none';

      const tdTag = document.createElement('p');
      editElmnt.addText(tdTag, 'Your Tasks')
      
      const tdItems = document.createElement('div')
      editElmnt.addId(tdItems, 'task-items');

    editElmnt.appendChildren(taskDisplay, [tdTag, tdItems]);

    const addTaskForm = document.createElement('div');
    addTaskForm.id = 'add-task-form';
    addTaskForm.style.display = 'none';

      const tag = document.createElement('p');
      tag.textContent = 'Add a task';
      tag.id = 'add-task-tag'

      const titleInput = document.createElement('input');
      titleInput.id = 'task-title-input';
      titleInput.type = 'text';

      const descInput = document.createElement('input');
      descInput.id = 'task-desc-input';
      descInput.type = 'text';

      const dueDateInput = document.createElement('input');
      dueDateInput.id = 'task-date-input';
      dueDateInput.type = 'date';

      const dueTimeInput = document.createElement('input');
      dueTimeInput.id = 'task-time-input';
      dueTimeInput.type = 'time';

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
        low.setAttribute('selected', '');
    
        editElmnt.appendChildren(priorityInput, [high, mid, low])

      const addTaskActions = document.createElement('div')
      
        const addTaskAdd = document.createElement('button');
        addTaskAdd.id = 'add-task-add'
        addTaskAdd.textContent = 'Add';


        const deteleTask = document.createElement('button');
        deteleTask.id = 'delete-task-button';
        deteleTask.textContent = 'Delete';
        deteleTask.style.display = 'none';

        console.log(addTaskAdd)

        editElmnt.appendChildren(addTaskActions, [addTaskAdd, deteleTask]);
      
        const warning = document.createElement('p');
        warning.id = 'input-warning';

      editElmnt.appendChildren(addTaskForm, [tag, titleInput, descInput, dueDateInput, dueTimeInput, priorityInput, addTaskActions, warning]);

      editElmnt.appendChildren(projectDisp, [taskDisplay, addTaskForm])
  editElmnt.appendChildren(projBench, [projName, projectDisp]);
  
  

  // add to DOM
  editElmnt.appendChildren(appGrid, [overview, projBench]);
  document.querySelectorAll('input').forEach((elm) => {
    elm.setAttribute('required', '');
  });

})();
