document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', clickMe)
});

function clickMe(e) {
  e.preventDefault();
  let newTask=document.createElement('li');
  newTask.innerHTML=e.target.description.value;
  let dltBtn=document.createElement('button');
  dltBtn.innerText='THIS WAS A HORRIBLE IDEA!';
  dltBtn.addEventListener('click', delTask);
  newTask.appendChild(dltBtn);
  document.querySelector('#tasks').appendChild(newTask)
};

function delTask(e){
  e.target.parentElement.remove()
}
