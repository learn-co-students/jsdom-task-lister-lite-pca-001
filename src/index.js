document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.onsubmit = e => {
    e.preventDefault()

    textField = document.getElementById("new-task-description")
    console.log(textField.value)
    li = document.createElement("li")
    text = document.createTextNode(textField.value)
    li.appendChild(text)

    tasks = document.getElementById("tasks").appendChild(li)
    li.onclick = removeElement
    textField.value = ""

  }
});

function removeElement() {
  this.remove()
}
