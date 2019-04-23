document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create_task').addEventListener('submit', handleForm)
  document.querySelector('#deleteBtn').addEventListener('click', handleClick)


});

function handleForm(e){
    e.preventDefault()
    // console.log(e)
    const task ={new_task: e.target.new_task.value,
                 priority: e.target.priority.value,
                 user: e.target.user.value
            }
    console.log(e.target.new_task.value)
    addNewTask(task)
    e.target.reset()
}

function handleClick (e) {
  e.target.parentElement.remove()
}

function addNewTask(task) {
  const list = document.querySelector('#tasks')
  const li = document.createElement('li')
  li.style.color = task.priority
  li.textContent = `${task.new_task} for ${task.user}`
  const delBtn = document.createElement('button')
        delBtn.innerText = "Delete"
        delBtn.addEventListener('click',handleClick)
li.appendChild(delBtn)
list.appendChild(li)
}
