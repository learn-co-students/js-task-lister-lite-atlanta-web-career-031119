document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#submit').addEventListener('click', handleClick)


});

function addToList(task) {

  const ul = document.querySelector('#list')
  const li = document.createElement('li')
    li.className = 'todo'
    li.textContent = task
    
    ul.appendChild(li)
}

function handleClick(e){
  e.preventDefault()
  console.log(e.target)
  task = document.querySelector('#new-task-description').value
  
  
  addToList(task)
}




