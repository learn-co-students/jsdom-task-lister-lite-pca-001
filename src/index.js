const form = document.getElementById('create-task-form');

const addContentToScreen = (event) => {
  let tasks = document.getElementById('tasks');
  let el = document.createElement('li');
  el.textContent = `${form.elements[0].value}`;
  tasks.appendChild(el);
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', addContentToScreen);
});
