const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoAnchor = document.querySelector("#toDoAnchor");

const TODOS_LS = 'toDos';


/*To Do Anchor*/
function inOut(){
    //continue
}

toDoAnchor.addEventListener("clicked", inOut);




let toDos = [];

function filterFn(toDo) {
    return toDo.id === 1;
}



function deleteToDo(event) {
    /* 누른 버튼 확인 */
    const btn = event.target;
    /* 누른 버튼에 대한 부모 확인(∵부모에 id를 부여) */
    const li = btn.parentNode;
    /*해당 버튼 삭제*/
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
         return toDo.id !== parseInt(li.id);
    });
    
    console.log(cleanToDos, toDos);
    toDos = cleanToDos;
    saveToDos();
}




/* paintToDo에서 생성한 li들을 Local Storage에 저장하는 함수*/
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); 
    delBtn.innerHTML = "🗑️";
    delBtn.addEventListener("click", deleteToDo); 
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = `${text}`;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: toDos.length + 1
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

    /* 여기까지 작성하면 엔터를 눌러 submit을 해도 기존 value가 남아있는 현상이 있음. 그래서 추가해주는 것이 아래 코드.*/
    toDoInput.value="";

}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();