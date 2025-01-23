let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Tasks
function renderTasks(filter = 'all') {
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) taskItem.classList.add('completed');
    taskItem.setAttribute('draggable', true);
    taskItem.dataset.index = index;

    taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskItem.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') toggleTaskCompletion(index);
    });

    taskItem.addEventListener('dragstart', () => taskItem.classList.add('dragging'));
    taskItem.addEventListener('dragend', () => taskItem.classList.remove('dragging'));

    taskList.appendChild(taskItem);
  });
}

// Add Task
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
});

// Edit Task
function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText) {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Toggle Completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Filter Tasks
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTasks(btn.dataset.filter);
  });
});

// Drag-and-Drop Reordering
taskList.addEventListener('dragover', (e) => e.preventDefault());
taskList.addEventListener('drop', (e) => {
  const draggingItem = taskList.querySelector('.dragging');
  const siblings = [...taskList.children];
  const dropIndex = siblings.indexOf(draggingItem);
  const targetIndex = siblings.indexOf(e.target.closest('.task-item'));

  if (targetIndex >= 0 && targetIndex !== dropIndex) {
    const [draggedTask] = tasks.splice(dropIndex, 1);
    tasks.splice(targetIndex, 0, draggedTask);
    saveTasks();
    renderTasks();
  }
});

// Save to LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial Render
renderTasks();
