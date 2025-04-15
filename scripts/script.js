document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const filterButtons = document.querySelectorAll('.filter-button');
    const clearCompletedButton = document.getElementById('clearCompletedButton');

    let tasks = [];
    let filter = 'all';

    // Function to render tasks based on the current filter
    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = getFilteredTasks();

        if (filteredTasks.length === 0) {
            const noTasksMessage = document.createElement('li');
            noTasksMessage.textContent = 'Нет задач';
            noTasksMessage.classList.add('no-tasks');
            taskList.appendChild(noTasksMessage);
            return;
        }

        filteredTasks.forEach(task => {
            const taskItem = createTaskElement(task);
            taskList.appendChild(taskItem);
        });
    }

    // Function to get tasks based on the current filter
    function getFilteredTasks() {
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }

    // Function to create a task list item element
    function createTaskElement(task) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleComplete(task.id));

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.classList.toggle('completed', task.completed);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            taskInput.value = '';
        }
    }

    // Function to delete a task
    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
    }

    // Function to toggle task completion
    function toggleComplete(taskId) {
        tasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        renderTasks();
    }

    // Function to clear completed tasks
    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
    }

    // Function to set the filter and rerender tasks
    function setFilter(newFilter) {
        filter = newFilter;
        filterButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.filter-button[data-filter="${filter}"]`).classList.add('active');
        renderTasks();
    }

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from local storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    }

    // Event listeners
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.dataset.filter;
            setFilter(filterType);
        });
    });

    clearCompletedButton.addEventListener('click', clearCompletedTasks);

    // Initialization
    loadTasks();
    renderTasks();
    setFilter('all'); // Initialize filter to 'all'
});
