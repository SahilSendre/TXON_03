const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const deleteAllButton = document.getElementById("delete-all-button");

addButton.addEventListener("click", function(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const deleteButton = document.createElement("button");
    
    taskCheckbox.type = "checkbox";
    taskLabel.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
    
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });
    
    taskCheckbox.addEventListener("change", function() {
      if (taskCheckbox.checked) {
        taskLabel.classList.add("completed");
      } else {
        taskLabel.classList.remove("completed");
      }
    });
  }
});

deleteAllButton.addEventListener("click", function() {
  const taskItems = taskList.getElementsByTagName("li");
  while (taskItems.length > 0) {
    taskList.removeChild(taskItems[0]);
  }
});
