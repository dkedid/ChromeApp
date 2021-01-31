const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); 
    delBtn.innerHTML = "🗑️";
    const span = document.createElement("span");
    span.innerText = `오늘 할 일은 ${text}입니다. `;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

    /* 여기까지 작성하면 엔터를 눌러 submit을 해도 기존 value가 남아있는 현상이 있음. 그래서 추가해주는 것이 아래 코드.*/
    toDoInput.value="";

}


function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos === null) {
        toDoForm.addEventListener("submit", handleSubmit)
    }
}

function init() {
    loadToDos();
}

init();