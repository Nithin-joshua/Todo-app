const addbtn=document.getElementById('add-btn');
const todoinput=document.getElementById('todo-input');
const todolist=document.getElementById('todo-list');

document.addEventListener('DOMContentLoaded', loadTodos);


addbtn.addEventListener('click',addTodo);

todolist.addEventListener('click',handletodoClick);
function addTodo(){
    const task = todoinput.value.trim();
    if(task===" "){
        alert("Please Enter a task!!!!");
        return;
    }

    createTodoElement(task);
    saveTodo(task);

    todoinput.value=" ";
}
function createTodoElement(task,completed=false){
    const li = document.createElement('li');
    li.className=`todo-item ${completed ? 'completed':' ' }`;
    li.innerHTML= `
    <span>${task}</span>
    <button class ="delete-btn>X<button>
    `;

    todoinput.appendChild(li);
}

function handletodoClick(e) {
    if(e.target.classList.contains('delete-btn')){
        const item = e.target.parentElement;
        removeTodo(item);
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.classList.toggle('completed');
        updateTodoStorage();
    }
}
function saveTodo(task) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ task, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => createTodoElement(todo.task, todo.completed));
}

function removeTodo(item) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.task !== item.querySelector('span').innerText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTodoStorage() {
    const allTodos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
    allTodos.push({
        task: item.querySelector('span').innerText,
        completed: item.classList.contains('completed')
    });
    });
    localStorage.setItem('todos', JSON.stringify(allTodos));
}
