export const addProjectForm = document.getElementById('add-project-form');
export const addProjectBtn = document.getElementById('add-project');
export const addProjectField = document.getElementById('add-project-input');
export const addProjectAdd = document.getElementById('add-project-button');
export const addProjectCancel = document.getElementById('cancel-add-project-button');

export function projectItems() {
  return document.querySelectorAll('.project-item');
}

export function editButtons() {
  return document.querySelectorAll('.edit-task');
}

export function checkButtons() {
  return document.querySelectorAll('.check-task');
}

export const addTaskBtn = document.getElementById('add-task');
export const doneEditBtn = document.getElementById('done-button-details');
export const deleteTaskBtn = document.getElementById('delete-task-button');

export const taskMoreDetails = document.getElementById('task-details');