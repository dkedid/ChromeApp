const doneToggle = document.querySelector(".done-toggle");
const toDoAnchor = document.querySelector(".todo-anchor");

const TOGGLE_HIDE = "todo-toggle__hide"
const TOGGLE_SHOW = "todo-toggle__show"
let openTF = false;



function paintDone(){
    if (openTF) {
        doneToggle.classList.remove(TOGGLE_SHOW);
        doneToggle.classList.add(TOGGLE_HIDE);
        openTF = false;
        console.log('close')
        console.log(openTF)
    } else {
        doneToggle.classList.remove(TOGGLE_HIDE);
        doneToggle.classList.add(TOGGLE_SHOW);
        openTF = true;
        console.log('open')
        console.log(openTF)
    }
}

toDoAnchor.addEventListener("click", paintDone);

function init(){
}
init();