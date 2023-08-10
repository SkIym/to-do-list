export const addProjectForm = document.getElementById("add-project-form");
export const addProjectBtn = document.getElementById("add-project");
export const addProjectField = document.getElementById("add-project-input");
export const addProjectAdd = document.getElementById("add-project-button");
export const addProjectCancel = document.getElementById(
  "cancel-add-project-button",
);

export function projectItems() {
  return document.querySelectorAll(".project-item");
}

export function editButtons() {
  return document.querySelectorAll(".edit-task");
}

export function completeButtons() {
  return document.querySelectorAll(".check-task");
}

export const taskDisplay = document.getElementById("task-display");

// export const addTaskBtn = document.getElementById('add-task');
export const addTaskForm = document.getElementById("add-task-form");
export const addTaskAdd = document.getElementById("add-task-add");
// export const addTaskCancel = document.getElementById('add-task-cancel');
export const taskTag = document.getElementById("add-task-tag");

export const addTitle = document.getElementById("task-title-input");
export const addDesc = document.getElementById("task-desc-input");
export const addDate = document.getElementById("task-date-input");
export const addPrio = document.getElementById("task-prio-input");
export const addTime = document.getElementById("task-time-input");
export const inputWarning = document.getElementById("input-warning");

export const deleteTaskBtn = document.getElementById("delete-task-button");
export const taskMoreDetails = document.getElementById("task-details");
