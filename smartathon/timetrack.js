// Task management system
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add task event listener
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const taskName = document.getElementById('task-name').value;
  const assignee = document.getElementById('assignee').value;
  const deadline = document.getElementById('deadline').value;
  const priority = document.getElementById('priority').value;

  // Create task object
  const task = {
    name: taskName,
    assignee: assignee,
    deadline: deadline,
    priority: priority
  };

  // Add task to the list
  addTaskToList(task);

  // Clear form inputs
  taskForm.reset();
});

// Add task to the list
function addTaskToList(task) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  taskItem.innerHTML = `
    <strong>${task.name}</strong>
    <br>
    <span>Assigned to: ${task.assignee}</span>
    <br>
    <span>Deadline: ${task.deadline}</span>
    <br>
    <span>Priority: ${task.priority}</span>
  `;

  taskList.appendChild(taskItem);
}
