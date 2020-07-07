document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
    // setting whole form variable
  let textBox =  document.getElementById("new-task-description")
    // setting text vaiable
  let tasks = document.getElementById('tasks') // ul
    // setting task box variable
  form.addEventListener("submit", function(event) {
    event.preventDefault() // doesnt let submit go to new page
    let li = document.createElement("li") // creating an li to go in the ul task box
    li.innerText = textBox.value
      // here we are saying that the inner text of the li is going to be the value from our textbox
    tasks.append(li)
      // The append() method inserts specified content at the end of the selected elements.
        // in this case tasks is the ul so we are appending the li onto it
  })
});

