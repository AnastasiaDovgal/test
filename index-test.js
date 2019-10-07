// let modal = document.getElementById("modal");
// let btnCreate = document.getElementById("btnCreate");

// btnCreate.onclick = function () {
//     modal.style.display = "flex";
//     renderForm({
//         id: Date.now(),
//         title: "",
//         description: "",
//         priority: "",
//         deadline: "",
//         completed: false
//     }, false);
// };

// function closeForm() {
//     modal.style.display = "none";
// }

// window.onload = renderItems;

// function updateToDos(toDoList) {
//     localStorage.setItem("toDo-list", JSON.stringify(toDoList));
//     renderItems();
// }

// function loadToDos() {
//     return JSON.parse(localStorage.getItem("toDo-list") || "[]");
// }

// function renderForm(toDo, edit) {

//     modal.innerHTML = `
// <div id="modal-content" class="modal-content">
//     <div class="modal-caption">
//         <h3>${edit ? "Edit toDo" : "Add To-Do item"}</h3>
//         <i class="fas fa-times" id="cancel" onclick='closeForm()'></i>
//     </div>
//     <form id="toDoList" action="#">
//         <div class="modal-form" onsubmit="return false;">
//             <input value="${toDo.title}" placeholder="Name *" type="text" name="title" maxlength="20"
//             autofocus required>
//             <input placeholder="Description" value="${toDo.description}" type="text" name="description">
//             <select name="priority" required>
//                 <option value="Priority"  ${toDo.priority || "selected"} hidden>Priority *</option>
//                 <option value="Low" ${toDo.priority !== "low" || "selected"}>Low</option>
//                 <option value="Middle" ${toDo.priority !== "middle" || "selected"}>Middle</option>
//                 <option value="High" ${toDo.priority !== "high" || "selected"}>High</option>
//             </select>
//             <input value="${toDo.deadline}" type="date" name="deadline">
//         </div>
//         <div class="modal-footer">
//             <button type="reset" id="cancel" onclick="closeForm()">Cancel</button>
//             <button type="submit" id="add">Add</button>
//         </div>
//     </form>
// </div>
//     `;

//     modal.querySelector("form").onsubmit = () => submitForm(toDo);
// }

// function renderItems() {

//     document.getElementsByClassName("listOfItems")[0].innerHTML = "";

//     loadToDos().forEach((item) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <!-- <i class="fas fa-times" id="close" onclick='deleteItem(${item.id})'></i> -->
//             <p>${item.title}</p>
//             <p>${item.description}</p>
//             <p>${item.priority}</p>
//                 <p>${item.deadline}</p>
//                 <div class="toDoFooter">
//                 <button id="close" onclick='deleteItem(${item.id})'>Delete</button>
//                 <button onclick="switchDone(${item.id})">
//                     ${item.done ? "Mark as undone" : "Mark as done"}
//                 </button>
//                 ${item.done ? "" : `<button onclick='editItem(${item.id})'>Edit</button>
// `}
//                 </div>           
// `;
//         div.className = "toDo";
//         if (item.done)
//             div.className += " done";
//         document.getElementsByClassName("listOfItems")[0].appendChild(div);
//     });
// }

// function switchDone(id) {

//     const toDoList = loadToDos();
//     const toDo = toDoList.find((item) => (item.id === id));
//     toDo.done = !toDo.done;

//     updateToDos(toDoList);

// }

// function editItem(id) {
//     const toDoList = loadToDos();
//     const toDo = toDoList.find((item) => (item.id === id));

//     renderForm(toDo, true);

//     modal.style.display = "flex";
// }

// function deleteItem(id) {

//     const newtoDoList = loadToDos().filter((item) => (item.id !== id));
//     updateToDos(newtoDoList);
// }

// function submitForm(toDo) {
//     const form = document.getElementById("toDoList");

//     toDo.title = form["title"].value;
//     toDo.description = form["description"].value;
//     toDo.priority = form["priority"].value;
//     toDo.deadline = form["deadline"].value;

//     const toDoList = loadToDos();

//     const oldIndex = toDoList.findIndex((item) => (item.id === toDo.id));

//     if (oldIndex >= 0)
//         toDoList[oldIndex] = toDo;
//     else
//         toDoList.push(toDo);

//     updateToDos(toDoList);

//     modal.style.display = "none";

//     return false;
// }

// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// };


let name = document.getElementById('name');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let deadline = document.getElementById('deadline');


let modal = document.getElementById('modal');
let open = document.getElementById('click');
let close = document.getElementById('close');
let add = document.getElementById('add');


function click() {
    modal.style.display = 'flex';
};

function closeModal() {
    modal.style.display = 'none';
};

function addToForm(name, description, priority, deadline) {
    if (typeof (Storage) !== "undefined") {

        localStorage.setItem('name', name.value);
        localStorage.setItem('description', description.value);
        localStorage.setItem('priority', priority.value);
        localStorage.setItem('deadline', deadline.value);

        // let items = [];

        // let item = {
        //     nameItem: name.value,
        //     descriptionItem: description.value,
        //     priorityItem: priority.value
        // }


        let nameSet = document.getElementById('nameSet').innerHTML;
        let descriptionSet = document.getElementById('descriptionSet').innerHTML;
        let deadlineSet = document.getElementById('deadlineSet').innerHTML;

        nameSet = name.value;
        descriptionSet = description.value;
        deadlineSet = priority.value;

        add.innerHTML = 'Edit';
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
};


open.addEventListener('click', click);
close.addEventListener('click', closeModal);
cancel.addEventListener('click', closeModal);
add.addEventListener('click', function () { addToForm(name, description, priority, deadline); });


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function saveTask(e) {
    //get form values
    let taskName = document.getElementById('name').value;
    let taskDescription = document.getElementById('description').value;
    let taskpPriority = document.getElementById('priority').value;

    //create an object to store the variables
    let tasks = {
        name: taskName,
        description: taskDescription,
        priority: taskpPriority
    }
    e.preventDefault();

    if (localStroage.getItem('tasks') == null) {
        let task = [];
        task.push(tasks);
        localStorage.SetItem('task', JSON.stringyfy(task));
    } else {
        let myTask = localStorage.getItem('task');
        myTask.push(task);
        // then reset the localStorage
        localStorage.setItem('task', JSON.stringify(myTask));
        console.log(task);
        console.log(tasks);
    }
}
