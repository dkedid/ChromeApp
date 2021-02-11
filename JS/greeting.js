const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
    
function askName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
} 


function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText =`Welcome, ${text} :)`;
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