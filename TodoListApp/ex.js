const addbtn=document.getElementById('add-btn');
const todoinput=document.getElementById('todo-input');
const todolist=document.getElementById('todo-list');
addbtn.addEventListener('click',addTodo);
function addTodo(){
    const task=todoinput.ariaValueMax.trim();
    if(task===" "){
        alert("Please Enter a task!!!!");
        return;
    }

    createTodoElement(task);
    saveTodo(task);

    todoinput.value=" ";
}