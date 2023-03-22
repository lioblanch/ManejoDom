import deleteIcon from "./components/deleteIcon.js";
import checkComplete from "./components/checkComplete.js";
    
    const btn = document.querySelector('[data-form-btn]');

    const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");

    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);
  
   
    //task.innerHTML = content;
    
    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());
};

//Arrrow functions o funciones anonimas
btn.addEventListener("click", createTask);

