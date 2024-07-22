document.addEventListener("DOMContentLoaded", function() {
    axios.get("https://api.vschool.io/anre/todo/").then(function(response) {
        let todoList = response.data;
        renderTodos(todoList);
    });

    const form = document.querySelector('form');
    const submitButton = document.querySelector('#submit-btn');
    let isEditMode = false;
    let currentTodoId = null;

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const imgUrl = form.imgUrl.value;

        if (isEditMode) {
            axios.put(`https://api.vschool.io/anre/todo/${currentTodoId}`, {
                title, price, description, imgUrl
            }).then(function(response) {
                isEditMode = false;
                currentTodoId = null;
                form.reset();
                axios.get("https://api.vschool.io/anre/todo/").then(function(response) {
                    var todoList = response.data;
                    renderTodos(todoList);
                });
            });
        } else {
            axios.post("https://api.vschool.io/anre/todo", {
                title, price, description, imgUrl
            }).then(function(response) {
                form.reset();
                axios.get("https://api.vschool.io/anre/todo/").then(function(response) {
                    var todoList = response.data;
                    renderTodos(todoList);
                });
            });
        }
    });

    function renderTodos(todoList) {
        const list = document.getElementById('list');
        list.innerHTML = '';
        todoList.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const title = document.createElement('h1');
            title.classList.add('todo-item-title');
            title.textContent = todo.title;

            const description = document.createElement('p');
            description.classList.add('todo-item-details');
            description.textContent = todo.description;

            const price = document.createElement('p');
            price.classList.add('todo-item-details');
            price.textContent = `$${todo.price}`;

            const img = document.createElement('img');
            img.classList.add('todo-item-img');
            img.src = todo.imgUrl;

            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('button-div');

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('todo-item-buttons');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteTodo(todo);
            });

            const editButton = document.createElement('button');
            editButton.classList.add('todo-item-buttons');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                editTodo(todo);
            });

            const completedLabel = document.createElement('label');
            completedLabel.textContent = 'Completed';

            const completedCheckbox = document.createElement('input');
            completedCheckbox.type = 'checkbox';
            completedCheckbox.classList.add('checkbox');
            completedCheckbox.checked = todo.completed;
            completedCheckbox.addEventListener('change', function() {
                toggleComplete(todo, title, description, price);
            });

            if (todo.completed) {
                title.style.textDecoration = "line-through";
                description.style.textDecoration = "line-through";
                price.style.textDecoration = "line-through";
            }

            buttonDiv.appendChild(deleteButton);
            buttonDiv.appendChild(editButton);
            todoItem.appendChild(title);
            todoItem.appendChild(description);
            todoItem.appendChild(price);
            todoItem.appendChild(img);
            todoItem.appendChild(buttonDiv);
            todoItem.appendChild(completedLabel);
            todoItem.appendChild(completedCheckbox);

            list.appendChild(todoItem);
        });
    }

    function deleteTodo(todo) {
        axios.delete(`https://api.vschool.io/anre/todo/${todo._id}`).then(function(response) {
            axios.get("https://api.vschool.io/anre/todo/").then(function(response) {
                var todoList = response.data;
                renderTodos(todoList);
            });
        });
    }

    function editTodo(todo) {
        form.title.value = todo.title;
        form.price.value = todo.price;
        form.description.value = todo.description;
        form.imgUrl.value = todo.imgUrl;
        isEditMode = true;
        currentTodoId = todo._id;
    }

    function toggleComplete(todo, title, description, price) {
        const updatedCompletedStatus = !todo.completed;
        axios.put(`https://api.vschool.io/anre/todo/${todo._id}`, {
            completed: updatedCompletedStatus
        }).then(function(response) {
            title.style.textDecoration = updatedCompletedStatus ? "line-through" : "none";
            description.style.textDecoration = updatedCompletedStatus ? "line-through" : "none";
            price.style.textDecoration = updatedCompletedStatus ? "line-through" : "none";
            axios.get("https://api.vschool.io/anre/todo/").then(function(response) {
                var todoList = response.data;
                renderTodos(todoList);
            });
        });
    }
});
