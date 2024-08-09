// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"))|| [];
console.log(taskList)
let nextId = JSON.parse(localStorage.getItem("nextId"));

console.log(new Date().toTimeString())

// Todo: create a function to generate a unique task id
function generateTaskId() {
  
    
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  


}

// Todo: create a function to handle adding a new task
function handleAddTask(event){


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){



}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {





}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    
});


