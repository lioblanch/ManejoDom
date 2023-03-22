const checkComplete = () =>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeICon");
    element.classList.toggle("far");
};

export default checkComplete;