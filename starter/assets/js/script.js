// taraville sur button add task start 


//stocky les id a l'nterier les variabel
let button_add = document.getElementById("add-task");
let form = document.getElementById("modal-task");
let button_delete = document.getElementById("task-delete-btn");
let button_update = document.getElementById("task-update-btn");
let button_save = document.getElementById("task-save-btn");
let returne = document.getElementById("adding");
let todo = document.getElementById("to-do-tasks")

//les form
let title = document.getElementById("task-title");
let title_valeu = document.getElementById("task-title").valeu;
let select1 = document.getElementById("task-priority");
let select1_valeu = document.getElementById("task-priority").valeu;
let select2 = document.getElementById("task-status");
let select2_valeu = document.getElementById("task-status").valeu;
let dat = document.getElementById("task-date");
let dat_valeu = document.getElementById("task-date").valeu;
let description= document.getElementById("task-description");
let description_valeu= document.getElementById("task-description").valeu;


//blokid les button 
button_delete.style.display="none";
button_update.style.display="none";


// fonction pendant clickid
button_add.addEventListener("click",f_click)
function f_click () {
   form.classList.remove('modal','fade');//remve to suprmer les classe
}

returne.addEventListener("click",reverce)
function reverce () {
   form.classList.add('modal','fade');//remve to suprmer les classe
}

// taraville sur button add task End 

//saise les donnees 

//ajoutee new tasck

// Tableau pour stocker les tâches
let tasks = [];


let mayElement = document.createElement("div")

button_save.addEventListener("click",save);
function save () {
   todo.innerHTML +=`
                <div class="list-group list-group-flush rounded-bottom overflow-hidden panel-body p-0">
        <div class="list-group-item d-flex border-top-0">
          <div class="me-3 fs-16px">
            <i class="far fa-question-circle text-gray-500 fa-fw"></i> 
          </div>
          <div class="flex-fill">
            <div class="fs-14px lh-12 mb-2px fw-bold text-dark">Enable open search</div>
            <div class="mb-1 fs-12px">
              <div class="text-gray-600 flex-1">#29949 opened yesterday by Terry</div>
            </div>


            <div class="mb-1">
              <button class="badge bg-blue">delete</button>
              <button class="badge bg-success">update</button>
            </div>
   `
}





// //function ajoute
// function addTask(taskText) {
//    const task = {
//        title_valeu: taskText,
//        completed: false
//    };
//    tasks.push(task);
//    renderTasks();
// }
// // Gestionnaire d'événements pour le bouton d'ajout de tâche
// button_save.addEventListener('click', () => {
//    const taskText = title_valeu.value.trim();
//    if (taskText) {
//        addTask(taskText);
//        newTaskInput.value = ''; // Réinitialiser le champ de saisie
//    } else {
//        Swal.fire({
//            title: 'Error!',
//            text: 'Task description cannot be empty.',
//            icon: 'error',
//            confirmButtonText: 'Try Again'
//        });
//    }
// });
