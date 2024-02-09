let input = document.getElementById('input')
let btn = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = [] 
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todoskey')) || []
    todos.forEach(t => displayTodo(t))
} 

btn.addEventListener('click',() => {
    todos.push(input.value)
    localStorage.setItem('todoskey',JSON.stringify(todos))
    displayTodo(input.value)
    input.value = ''
})
function displayTodo(to){
    let para = document.createElement('p')
    para.innerHTML = to
    todoList.appendChild(para)

    para.addEventListener('click',() =>{
        para.style.textDecoration = 'line-through'
        remove(to)
    })
    para.addEventListener('dblclick',() =>{
        todoList.removeChild(para)
        remove(to)
    })
}
function remove(to){
    let index = todos.indexOf(to)
    if(index > -1)
        todos.splice(index,1)
    localStorage.setItem('todoskey',JSON.stringify(todos))
}