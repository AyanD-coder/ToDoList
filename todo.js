document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Add Task Button Click
    addButton.addEventListener("click", () => {
      const taskText = taskInput.value;
  
      if (taskText === "") {
        return; // Skip if input is empty
      }
  
      // Create list item
      const listItem = document.createElement("li");
      listItem.className = "task-item";
  
      // Task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      // Mark Complete button
      const completeButton = document.createElement("button");
      completeButton.textContent = "Mark Complete";
      completeButton.className = "complete-btn";
  
      completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
        completeButton.textContent = listItem.classList.contains("completed")
          ? "Undo"
          : "Mark Complete";
      });
  
      // Remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
  
      removeButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });
  
      // Append elements to list item
      listItem.appendChild(taskSpan);
      listItem.appendChild(completeButton);
      listItem.appendChild(removeButton);
  
      // Append list item to task list
      taskList.appendChild(listItem);
  
      // Clear and focus input
      taskInput.value = "";
      taskInput.focus();
    });
  
    // Allow Enter key to add task
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addButton.click();
      }
    });
  });
  