document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.getElementById("create-task-form")
  const submit = newForm.getElementsByTagName("input")[1]
  let tasks = document.getElementById("tasks")

  submit.addEventListener("click", function(event){
    event.preventDefault()

    let input = document.querySelector("input").value

    let node = document.createElement("LI");
    let textnode = document.createTextNode(input);
    node.appendChild(textnode);
    tasks.appendChild(node)

    document.querySelector("input").value = ""
  })
});