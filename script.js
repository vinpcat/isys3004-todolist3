// Empty script file to start with

// 1. Assgin variables to DOM elemetns
let addtaskbutton = document.getElementById("add-button");
let newtaskinput = document.getElementById("task-input");
let todolistcontainer = document.getElementById("todo-list");
let templateelement = document.getelementbydid("todo-item-template")
let template = templateelement.innerhtml

// 2. Write function to handle the wevents
function onaddtaskclicked(event){
    lettaskname = newtaskinput.ariaValueMax;
    newtaskinput.value = ""


    let todohtml = template.replace("<!-- Task_Name -->", taskname)
    todoContainer.insertAdjacentHTML('afterbegin',taskname)
}

function ontodoclicked(event){
    
    let targetelement = event.toelement

    while(!targetelement.classlist.containts("task")) {
        targetelement = targetelement.parentelement

    }
    let checkbox = targetelement.queryselector(".checkbox")
    if (checkbox.checked){
        targetelement.classlist.add("completed")
    } else {
        targetelement.classlist.remove("completed")
    }
}

// 3. link,element, event to the function
addtaskbutton.addEventListener('click', onaddtaskclicked)
todocontainer.addEventListener('click', ontodoclicked)