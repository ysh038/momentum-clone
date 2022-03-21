const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    if(this.childNodes[1].childNodes[0].classList.contains("hidden")){
        this.childNodes[1].childNodes[0].classList.remove("hidden");
        
        this.childNodes[1].childNodes[0].classList.add("dropdown");
        this.childNodes[1].childNodes[0].classList.add("scale-up-ver-top");
    }else{
        this.childNodes[1].childNodes[0].classList.add("hidden");
        this.childNodes[1].childNodes[0].classList.remove("dropdown");
        this.childNodes[1].childNodes[0].classList.remove("scale-up-ver-top");
    }
    /*const dropDown = document.createElement("li");
    const dotButton = document.createElement("button");
    dotButton.type="button";
    dotButton.innerText="delete";
    dotButton.addEventListener("click",realDelete);
    dropDown.appendChild(dotButton);
    this.appendChild(dropDown);
*/

    /*const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //const li = this.parentElement;
    li.remove();
    */
    saveToDos();
}

function realDelete(event){
    const menuButton = this.parentElement.parentElement;
    const list = this.parentElement.parentElement.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
    list.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");    
    span.innerText = newTodo.text+" ";
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "···";
    button.addEventListener("click", deleteToDo);

    const dropDown = document.createElement("li");
    const dotButton = document.createElement("button");
    const finishbutton = document.createElement("button");

    dotButton.type="button";
    dotButton.innerText="delete";
    dotButton.addEventListener("click",realDelete);

    finishbutton.type="button";
    finishbutton.innerText="finish";

    dotButton.classList.add("hidden");
    finishbutton.classList.add("hidden");

    dropDown.appendChild(dotButton);
    dropDown.appendChild(finishbutton);
    button.appendChild(dropDown);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function writetoToForm(){
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.add(FADEIN_CLASSNAME);
    toDoInput.classList.remove(HIDDEN_CLASSNAME);
    toDoInput.classList.add(FADEIN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.add(FADEIN_CLASSNAME);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

