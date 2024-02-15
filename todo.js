function fetchAndMarkTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => markTasksWithCheckboxes(todos))
        .catch(error => console.error('Error fetching tasks:', error));
}

function markTasksWithCheckboxes(todos) {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = ''; // Clear previous content

    todos.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input';
        checkbox.id = `task-${task.id}`;
        checkbox.addEventListener('change', () => checkCompletedTasks(todos));

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.setAttribute('for', `task-${task.id}`);
        label.textContent = task.title;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        todoListContainer.appendChild(listItem);
    });
}

function checkCompletedTasks(todos) {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkedCheckboxes.length === 5) {
        showAlert('Congrats. 5 Tasks have been Successfully Completed');
    }
}

function showAlert(message) {
    alert(message);
}

// function logout() {
//     // Implement logout functionality if needed
//     console.log('Logout clicked');
// }
