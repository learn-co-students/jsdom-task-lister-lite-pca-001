document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form")

  const newTaskDescription = document.getElementById("new-task-description")

  const tasksUl = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const liItem = document.createElement("li")
    liItem.innerText = newTaskDescription.value
    tasksUl.append(liItem)
  })
});
