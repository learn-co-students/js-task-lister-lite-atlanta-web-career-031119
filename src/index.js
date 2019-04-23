document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("create-task-form").addEventListener("submit", handleSubmit)
})

function handleSubmit(e){
  e.preventDefault()
  let form = e.target
  const task = {new_task_description: form.querySelector("#new-task-description").value}
  addNewTask(task)
  e.target.reset()
}

function addNewTask(task){
  const tasks = document.getElementById("tasks")
  const li = document.createElement("li")
  li.textContent = task.new_task_description
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "X"
  deleteButton.addEventListener("click", handleClick)
  tasks.appendChild(li)
  li.className = ""
  li.appendChild(deleteButton)
}

function handleClick(e){
  e.target.parentElement.remove()
}
