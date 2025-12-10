// Step 4: Get references to HTML elements [cite: 37]
const taskInput = document.getElementById('taskInput'); // Input field [cite: 38]
const addButton = document.getElementById('addButton'); // Add button [cite: 39]
const taskList = document.getElementById('taskList'); // Task list <ul> [cite: 40]

// Function to create a new task list item
function createNewTask(taskText) {
    // Step 5: Create a new <li> element [cite: 45, 69]
    const listItem = document.createElement('li');

    // Add the task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.classList.add('task-content');
    listItem.appendChild(taskContent); // Add the task text to it [cite: 46, 70]

    // Step 6: Add Date/Time [cite: 50]
    const now = new Date();
    const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString(); // [cite: 52]

    const dateSpan = document.createElement('span');
    dateSpan.textContent = `Added: ${dateTimeString}`;
    dateSpan.classList.add('task-date');
    listItem.appendChild(dateSpan); // Append the date <span> to the <li> [cite: 53, 70]

    // Step 7: Add Task Buttons [cite: 55]
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('task-buttons');

    // Complete Button [cite: 56]
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = function() {
        // Toggle .completed class [cite: 56, 71]
        listItem.classList.toggle('completed');
    };
    buttonDiv.appendChild(completeBtn);

    // Edit Button [cite: 57]
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
        // Prompt the user to edit the task [cite: 57, 72]
        const newText = prompt('Edit your task:', taskContent.textContent);
        if (newText !== null && newText.trim() !== '') {
            // Update the task text if the input is not empty [cite: 58]
            taskContent.textContent = newText.trim();
        }
    };
    buttonDiv.appendChild(editBtn);

    // Delete Button [cite: 59]
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        // Show confirmation alert [cite: 59, 73]
        if (confirm('Are you sure you want to delete this task?')) {
            // Only delete if confirmed [cite: 59]
            taskList.removeChild(listItem);
        }
    };
    buttonDiv.appendChild(deleteBtn);

    listItem.appendChild(buttonDiv);
    
    // Append the <li> to the <ul> [cite: 47, 70]
    taskList.appendChild(listItem);
}


// Step 5: Add Tasks on Button Click [cite: 42]
function addTask() {
    // Get the value from the input field [cite: 44]
    const taskText = taskInput.value.trim();

    // Check if it's not empty [cite: 44]
    if (taskText !== '') {
        createNewTask(taskText);
        taskInput.value = ''; // Clear the input field after adding [cite: 48]
    } else {
        alert('Please enter a task!');
    }
}

// Attach click event to the Add button [cite: 42]
addButton.addEventListener('click', addTask);

// Optional: Add task when user presses Enter [cite: 49]
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});