const JSform = document.querySelector(".js-form");
const JSinput = JSform.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const nameToggleBox = document.querySelector(".name-toggle-box");

const USER_LS = "currentUser",
    SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = JSinput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
    
function askName() {
    JSform.classList.add(SHOWING);
    JSform.addEventListener("submit", handleSubmit);
} 


function paintGreeting(text){
    JSform.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    nameToggleBox.classList.add(SHOWING);
    greeting.innerText =`${text} #1398 :)`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();