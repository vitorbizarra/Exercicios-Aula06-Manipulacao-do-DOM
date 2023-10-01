function addTodo(e) {
    e.preventDefault()
    const input = document.getElementById('todo');

    if (input.value.length < 1) {
        alert('por favor, preencha o nome da tarefa');
        return;
    }

    const list = document.getElementById('todoList');
    const li = document.createElement('li')
    const liText = document.createTextNode(input.value);

    li.appendChild(liText);
    list.appendChild(li);

    input.value = null;
}

document.getElementById('addTodo').addEventListener('submit', (e) => addTodo(e))