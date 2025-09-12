// // save get-todo save-todo and todo-input-bar in a variable so that we can we that variable whenever we need.
//                 //<div class="row">
//                 //<div class="to-do-heading d-flex flex-row justify-content-center">
//                     //<div class="todo-no ">No.</div>
//                     //<div class="todo-details">To Do Item</div>
//                     //<div class="todo-status">Status</div>
//                     //<div class="todo-actions">Actions</div>
//                 //</div>
//                 //</div>;


// // first we will make the todo data section div which will store our row div
// //we need to make an empty div and save it in a variable that will make us a row div and then same with the inner div 
// //we need to make all the div we need and then to move div in another div we need to use append child property to put one div in another
// // then we add all the class that we have in css in the js file div by div using the variable name 
// // then the variable we made earlier we will give them text content, that what that div should have in it 
// // 


let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-input-bar');
let wrapper = document.getElementById("todo-wrapper")

let todoArray = []

todoInputBar.addEventListener("input", ()=>{
   let  inputValue = todoInputBar.value;
    if (inputValue.length == 0){
        saveButton.classList.add("disabled");
        
    }else{
        saveButton.classList.remove("disabled");
        
    }
});

saveButton.addEventListener("click", ()=>{
    let  inputValue = todoInputBar.value;
    if (inputValue.length == 0){
        return;
    }else{
        todoArray.push(inputValue)
        addTodo(inputValue,todoArray.length);
        todoInputBar.value = ''
    }
})

function deleteTodo (event){
    // let wrapperDeleter = event.target.parentElement.parentElement.parentElement.parentElement;
    // wrapperDeleter.remove()
    let deleteButtonPressed = event.target; //targeting the delete button. Event always got applied to the element that got addEventListener. In thsi case deleteButton.
    let indexToBeRemoved = Number(deleteButtonPressed.getAttribute("todo-index")); 
    todoArray.splice(indexToBeRemoved, 1);
     todoDataList.innerHTML = '';
     todoArray.forEach((element, index)=>{
        addTodo(element, index+1);
     })
   
    
}

let todoDataList = document.getElementById("todo-data-list");

function addTodo(todoData,todoCount) {
    // created html structure
    let wrapper = document.createElement("div")
    let rowDiv = document.createElement("div");
    let todoItems = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoAction = document.createElement("div");
    let deleteButton = document.createElement("div");
    let finishedButton = document.createElement("div");
    let hr = document.createElement("hr")

    deleteButton.setAttribute("todo-index", todoCount-1) //first we set the attribute to the delete button using setAttribute which will add the  attribute by todo-index name in the delete button div and give it value of 
    deleteButton.onclick = deleteTodo;

    // gave content that should present in the divs
    todoNumber.textContent = `${todoCount}.` //(todoCount+".") we can also write it like this.
    todoDetail.textContent = todoData;
    todoStatus.textContent = "In Progress";
    deleteButton.textContent = "Delete";
    finishedButton.textContent = "Finished";

    // added the css classes here so that if we add anoter data here it should also have the same editing
    rowDiv.classList.add("row");
    todoItems.classList.add("to-do-heading", "d-flex", "flex-row", "justify-content-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-details", "text-secondary");
    todoStatus.classList.add("todo-status", "text-secondary");
    todoAction.classList.add("todo-actions", "d-flex", "flex-row", "justify-content-center", "gap-3");
    deleteButton.classList.add("btn", "btn-danger");
    finishedButton.classList.add("btn", "btn-success");
    
    // put delete button and finished button in todo action div
    todoAction.appendChild(deleteButton);
    todoAction.appendChild(finishedButton);
    
    // put no, detail, satus, action div in the item div
    todoItems.appendChild(todoNumber);
    todoItems.appendChild(todoDetail);
    todoItems.appendChild(todoStatus);
    todoItems.appendChild(todoAction);

    // put item div in the row div
    rowDiv.appendChild(todoItems);


    // put row div in the wrapper and hr div also to give horizontal line at the end of each todo data.
    wrapper.appendChild(rowDiv);
    wrapper.appendChild(hr);  

    todoDataList.appendChild(wrapper )
};


// // ✅ Get required elements once
// const saveButton = document.getElementById("save-todo");
// const todoInputBar = document.getElementById("todo-input-bar");
// const todoDataList = document.getElementById("todo-data-list");

// let todoArray = [];

// // ✅ Enable/Disable save button based on input
// todoInputBar.addEventListener("input", () => {
//   saveButton.classList.toggle("disabled", todoInputBar.value.length === 0);
// });

// // ✅ Add new todo function
// function addNewTodo() {
//   const inputValue = todoInputBar.value.trim();
//   if (!inputValue) return;

//   todoArray.push(inputValue);
//   renderTodos();
//   todoInputBar.value = "";
//   saveButton.classList.add("disabled");
// }

// // ✅ Save todo on button click
// saveButton.addEventListener("click", addNewTodo);

// // ✅ Save todo on pressing Enter
// todoInputBar.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addNewTodo();
//   }
// });

// // ✅ Delete todo
// function deleteTodo(index) {
//   todoArray.splice(index, 1);
//   renderTodos();
// }

// // ✅ Render all todos
// function renderTodos() {
//   todoDataList.innerHTML = ""; // clear list

//   todoArray.forEach((todo, index) => {
//     // Create structure
//     const wrapper = document.createElement("div");
//     const rowDiv = document.createElement("div");
//     const todoItems = document.createElement("div");
//     const todoNumber = document.createElement("div");
//     const todoDetail = document.createElement("div");
//     const todoStatus = document.createElement("div");
//     const todoAction = document.createElement("div");
//     const deleteButton = document.createElement("button");
//     const finishedButton = document.createElement("button");
//     const hr = document.createElement("hr");

//     // Content
//     todoNumber.textContent = `${index + 1}.`;
//     todoDetail.textContent = todo;
//     todoStatus.textContent = "In Progress";
//     deleteButton.textContent = "Delete";
//     finishedButton.textContent = "Finished";

//     // Classes
//     rowDiv.classList.add("row");
//     todoItems.classList.add(
//       "to-do-heading",
//       "d-flex",
//       "flex-row",
//       "justify-content-center"
//     );
//     todoNumber.classList.add("todo-no");
//     todoDetail.classList.add("todo-details", "text-secondary");
//     todoStatus.classList.add("todo-status", "text-secondary");
//     todoAction.classList.add(
//       "todo-actions",
//       "d-flex",
//       "flex-row",
//       "justify-content-center",
//       "gap-3"
//     );
//     deleteButton.classList.add("btn", "btn-danger");
//     finishedButton.classList.add("btn", "btn-success");

//     // Actions
//     deleteButton.onclick = () => deleteTodo(index);

//     // Append structure
//     todoAction.append(deleteButton, finishedButton);
//     todoItems.append(todoNumber, todoDetail, todoStatus, todoAction);
//     rowDiv.appendChild(todoItems);
//     wrapper.append(rowDiv, hr);
//     todoDataList.appendChild(wrapper);
//   });
// }

// // ✅ Get required elements once
// const saveButton = document.getElementById("save-todo");
// const todoInputBar = document.getElementById("todo-input-bar");
// const todoDataList = document.getElementById("todo-data-list");

// let todoArray = [];

// // ✅ Enable/Disable save button based on input
// todoInputBar.addEventListener("input", () => {
//   saveButton.classList.toggle("disabled", todoInputBar.value.length === 0);
// });

// // ✅ Add new todo function
// function addNewTodo() {
//   const inputValue = todoInputBar.value.trim();
//   if (!inputValue) return;

//   // store as object { text, status }
//   todoArray.push({ text: inputValue, status: "In Progress" });
//   renderTodos();
//   todoInputBar.value = "";
//   saveButton.classList.add("disabled");
// }

// // ✅ Save todo on button click
// saveButton.addEventListener("click", addNewTodo);

// // ✅ Save todo on pressing Enter
// todoInputBar.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addNewTodo();
//   }
// });

// // ✅ Delete todo
// function deleteTodo(index) {
//   todoArray.splice(index, 1);
//   renderTodos();
// }

// // ✅ Toggle todo status (Finished <-> In Progress)
// function toggleTodoStatus(index) {
//   if (todoArray[index].status === "In Progress") {
//     todoArray[index].status = "Finished";
//   } else {
//     todoArray[index].status = "In Progress";
//   }
//   renderTodos();
// }

// // ✅ Render all todos
// function renderTodos() {
//   todoDataList.innerHTML = ""; // clear list

//   todoArray.forEach((todo, index) => {
//     // Create structure
//     const wrapper = document.createElement("div");
//     const rowDiv = document.createElement("div");
//     const todoItems = document.createElement("div");
//     const todoNumber = document.createElement("div");
//     const todoDetail = document.createElement("div");
//     const todoStatus = document.createElement("div");
//     const todoAction = document.createElement("div");
//     const deleteButton = document.createElement("button");
//     const finishedButton = document.createElement("button");
//     const hr = document.createElement("hr");

//     // Content
//     todoNumber.textContent = `${index + 1}.`;
//     todoDetail.textContent = todo.text;
//     todoStatus.textContent = todo.status;
//     deleteButton.textContent = "Delete";
//     finishedButton.textContent =
//       todo.status === "In Progress" ? "Finished" : "Undo";

//     // Classes
//     rowDiv.classList.add("row");
//     todoItems.classList.add(
//       "to-do-heading",
//       "d-flex",
//       "flex-row",
//       "justify-content-center"
//     );
//     todoNumber.classList.add("todo-no");
//     todoDetail.classList.add("todo-details", "text-secondary");
//     todoStatus.classList.add(
//       "todo-status",
//       todo.status === "Finished" ? "text-success" : "text-secondary"
//     );
//     todoAction.classList.add(
//       "todo-actions",
//       "d-flex",
//       "flex-row",
//       "justify-content-center",
//       "gap-3"
//     );
//     deleteButton.classList.add("btn", "btn-danger");
//     finishedButton.classList.add(
//       "btn",
//       todo.status === "Finished" ? "btn-warning" : "btn-success"
//     );

//     // Actions
//     deleteButton.onclick = () => deleteTodo(index);
//     finishedButton.onclick = () => toggleTodoStatus(index);

//     // Append structure
//     todoAction.append(deleteButton, finishedButton);
//     todoItems.append(todoNumber, todoDetail, todoStatus, todoAction);
//     rowDiv.appendChild(todoItems);
//     wrapper.append(rowDiv, hr);
//     todoDataList.appendChild(wrapper);
//   });
// }









