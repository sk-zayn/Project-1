// save get-todo save-todo and todo-input-bar in a variable so that we can we that variable whenever we need.
                //<div class="row">
                //<div class="to-do-heading d-flex flex-row justify-content-center">
                    //<div class="todo-no ">No.</div>
                    //<div class="todo-details">To Do Item</div>
                    //<div class="todo-status">Status</div>
                    //<div class="todo-actions">Actions</div>
                //</div>
                //</div>;


// first we will make the todo data section div which will store our row div
//we need to make an empty div and save it in a variable that will make us a row div and then same with the inner div 
//we need to make all the div we need and then to move div in another div we need to use append child property to put one div in another
// then we add all the class that we have in css in the js file div by div using the variable name 
// then the variable we made earlier we will give them text content, that what that div should have in it 
// 


let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-input-bar');

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

let todoDataSection = document.getElementById("todo-data");

function addTodo(todoData,todoCount) {
    // created html structure
    let rowDiv = document.createElement("div");
    let todoItems = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoAction = document.createElement("div");
    let deleteButton = document.createElement("div");
    let finishedButton = document.createElement("div");
    let hr = document.createElement("hr")

    // gave content that should present in the divs
    todoNumber.textContent = `${todoCount}.`
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


    // put row div in the datasection and hr div also to give horizontal line at the end of each todo data.
    todoDataSection.appendChild(rowDiv);
    todoDataSection.appendChild(hr);  
};