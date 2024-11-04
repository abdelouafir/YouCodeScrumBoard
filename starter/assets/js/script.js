let button_add = document.getElementById("add-task");
let modalId = document.getElementById("modal-task");
let button_delete = document.getElementById("task-delete-btn");
let button_update = document.getElementById("task-update-btn");
let button_save = document.getElementById("task-save-btn");

let returne = document.getElementById("adding");
let todo = document.getElementById("to-do-tasks");
let Progress = document.getElementById("in-progress-tasks");
let Done_tasks = document.getElementById("done-tasks");

// modal fields
let title = document.getElementById("task-title");
let select1 = document.getElementById("task-priority");
let select2 = document.getElementById("task-status");
let dat = document.getElementById("task-date");
let description = document.getElementById("task-description");




////===============   span  ========== //// 
let do_tasks_count = document.getElementById("to-do-tasks-count");
let in_progress_tasks_count = document.getElementById("in-progress-tasks-count");
let done_tasks_count = document.getElementById("done-tasks-count")

button_delete.style.display = "none";
button_update.style.display = "none";

button_add.addEventListener('click', function () {
    let modal = new bootstrap.Modal(modalId);
    modal.show();
});



let tasks = [];

if(localStorage.tasck != null){
    tasks = JSON.parse(localStorage.tasck) ;
}
else{
    tasks = [] ;
}

let tasks_total = 1; 

// save function

//blockid le button save 
// button_save.disabled = true ;
button_save.addEventListener("click", save);
function save() {

let title_error = document.getElementById("title_error");
let type_error = document.getElementById("type_error");
let form_selec_error = document.getElementById("form-select-p");
let dtatus_error = document.getElementById("dtatus_error") ;
let dat_error = document.getElementById("dat_error");
let description_error = document.getElementById("description_error")


    let title_value = title.value.trim(); 
    let select1_value = select1.value;
    let select2_value = select2.value;
    let dat_value = dat.value;
    let description_value = description.value; 
    let task_type = document.getElementById("task-type-feature").value;
    

    if (
        title.value.trim() === "" ||
        select1.value.trim() === "" ||
        select2.value.trim() === "" ||
        dat.value.trim() === "" ||
        description.value.trim() === ""
    ) {
        if(title.value === "" ){
            title_error.textContent="please entrer title" ;
            title_error.style.color="red";
        }
        if (select1.value === ""){
            type_error.textContent ="please entre cette valeu";
            type_error.style.color="red";
        }
        if(select2.value == ""){
            form_selec_error.textContent="please entre cette valeu";
            form_selec_error.style.color="red"
        }
        if(dat.value === ""){
            dat_error.textContent="please entre cette valeu";
            dat_error.style.color="red";
        }
        if(description.value === ""){
            description_error.textContent="please entre cette valeu"
            description_error.style.color="red";
        }
            
    
        return
    } 
    let task = {
        id: tasks_total,
        title: title_value,
        priority: select1_value,
        status: select2_value,
        date: dat_value,
        description: description_value,
        type: task_type
    };
    tasks_total++;

    tasks.push(task);

    localStorage.setItem('tasck',JSON.stringify(tasks));


    let new_element = document.createElement("div");
    new_element.classList.add("list-group-item");
    new_element.innerHTML = `
      <div class="me-3 fs-16px">
        <i class="far fa-question-circle text-gray-500 fa-fw"></i> 
      </div>
      <div class="flex-fill">
        <div class="fs-14px lh-12 mb-2px fw-bold text-dark"> ${task.title} </div>
        <div class="mb-1 fs-12px">
            <div class="text-gray-600 flex-1"> ${task.priority}</div>
            <div class="text-gray-600 flex-2"> ${task.status}</div>
            <div class="text-gray-600 flex-3"> ${task.date}</div>
            <div class="text-gray-600 flex-4"> ${task.description}</div>
            <div class="text-gray-600 flex-5"> ${task.type}</div>
        </div>
        <div class="mb-1">
            <button class="delete-btn badge bg-blue">delete</button>
            <button class="update-btn badge bg-success" data-task-id="${task.id}">update</button>
        </div>
      </div>
   `;

   

    
    if (select2_value === "To Do") {
        todo.appendChild(new_element);
    } else if (select2_value === "In Progress") {
        Progress.appendChild(new_element);
    } else if (select2_value === "Done") {
        Done_tasks.appendChild(new_element);
    }
    
    //Dblokid le button save

    // if(title.value !== "" && select1.value !== ""  && select2.value !== "" && dat.value !== "" && description.value !== "") {
    //     console.log("corict")
    // }
    
   
    conteur();
    in_progress();
    done_tasks();

  title.value = " ";
  select1.value = " ";
  select2.value = " ";
//   dat.value = "jj/mm/aaaa";
  description.value = " ";
    new_element.querySelector(".delete-btn").addEventListener("click", delete_element);
    new_element.querySelector(".update-btn").addEventListener("click", () => update_element(task.id, new_element));
}

// delete function
function delete_element(event) {
    let new_element = event.target.closest(".list-group-item");
    if (new_element) {
       confirm("etes vous sur !! ")
        new_element.remove();
        let taskid = parseInt(new_element.querySelector(".update-btn").dataset.taskId);
        tasks = tasks.filter(task => task.id !== taskid);
    }
    //appel la function contrur
    conteur();
    in_progress();
    done_tasks();
}

// update function
function update_element(id, element) {
    let task = tasks.find(item => item.id === id);
    let modal = new bootstrap.Modal(modalId);
    modal.show();

    if (task) {
        title.value = task.title;
        select1.value = task.priority;
        select2.value = task.status;
        dat.value = task.date;
        description.value = task.description;
        document.getElementById("task-type-feature").value = task.type;
    }

    button_save.style.display = "none";
    button_delete.style.display = "inline";
    button_update.style.display = "inline";

    button_update.onclick = () => {
        confirm("etes vou suer !!")
        task.title = title.value.trim(); 
        task.priority = select1.value;
        task.status = select2.value;
        task.date = dat.value;
        task.description = description.value.trim(); 
        task.type = document.getElementById("task-type-feature").value;

        // chonger content don html
        element.querySelector(".fs-14px").textContent = task.title;
        element.querySelector(".text-gray-600.flex-1").textContent = task.priority;
        element.querySelector(".text-gray-600.flex-2").textContent = task.status;
        element.querySelector(".text-gray-600.flex-3").textContent = task.date;
        element.querySelector(".text-gray-600.flex-4").textContent = task.description;
        element.querySelector(".text-gray-600.flex-5").textContent = task.type;

        button_save.style.display = "inline";
        button_delete.style.display = "none";
        button_update.style.display = "none";

        modal.hide(); 
    };
}


//function de calcule les task
function conteur () {
  do_tasks_count.textContent = todo.childElementCount;
}

function in_progress () {
in_progress_tasks_count.textContent = Progress.childElementCount;
}

function done_tasks () {
    done_tasks_count.textContent = Done_tasks.childElementCount ;
}

