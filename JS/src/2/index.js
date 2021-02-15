/* Form태그 */
const form = document.querySelector(".js-form");
/* input태그 */
const input = form.querySelector("input");
/* html의 ul태그 변수 선언 */
const pendingUl = document.querySelector(".Pending-ul");
const finishedUl = document.querySelector(".finished-ul");
/* LocalStorage에 사용되는 변수 */
const PENDING_LS = "pendingList";
const FINISHED_LS = "finishedList";




/* form태그에 이벤트리스너 submit발생시 handleData실행 */
form.addEventListener("submit", handleData);


/* hadleData 함수 */
function handleData(event){
    /* submit 이벤트 발생시 새로고침 되는 것 방지 */
    event.preventDefault();

    /* 현재 submit한 값 따오기*/
    const submitValue = input.value;

    /* 그 값 리스트에 추가 후 html구현하는 함수 - 1)*/
    paintPending(submitValue);

    /* submit하고 입력한 value값 안사라지고 남아있는거 방지. input의 value를 지우는 것이기 때문에 반드시 마지막에 두어야 함.*/
    input.value="";
}



/* 그 값 리스트에 추가 후 html구현하는 함수 - 1) 변수는 handleData에서 submit한 text임 */
let pendingList = [];
let finishedList = [];




/* 일단 얘는 Input -> Pending으로 넘어가는 애임. */
function paintPending(submitValue){
    const li = document.createElement("li");
    const span = document.createElement("span");

    /* Finish 버튼 추가 및 이벤트리스너 */
    const finBtn = document.createElement("button");
    finBtn.innerText = "🗸"
    finBtn.addEventListener("click", finishFunc);

    /* Delete 버튼 추가 및 이벤트리스너 */
    const delBtn = document.createElement("button");
    delBtn.innerText = "🗑️"
    delBtn.addEventListener("click", PendDelFunc);

    const pendingId = pendingList.length + 1;
    
    /* submitValue(사용자가 input에 적은 값)그대로 return */
    span.innerText = `${submitValue}`;
    
    /* li 자체가 document.createElement("li");이기 때문에 li를 써도 리스트가 만들어짐.  append로 자식 태그 추가해주면 됨. */
    li.appendChild(span);
    li.appendChild(finBtn);
    li.appendChild(delBtn);
    li.id = pendingId;

    /* pendingList에 추가. 현재 이 list는 모든 정보들이 저장된 리스트임 */
    pendingUl.appendChild(li);
    /* Object화 해서 저장. */
    const pendingObj = {
        text: submitValue,
        id: pendingList + 1
    }

    /* pendingList에 Object를 push하고 그것을 저장. */
    pendingList.push(pendingObj);
    savePendings();
}

/* 저장하는 함수 */
function savePendings(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingList));
}



/* 36, 41번째 줄에 들어가는 finishFunc, delFunc구현 */
function finishFunc(event){
    const targetBtn = event.target;
    const targetLi = targetBtn.parentNode;
    pendingUl.removeChild(targetLi);

    const finishedId = finishedList.length + 1;
    finishedUl.appendChild(targetLi);
    console.log(targetLi, targetLi.childNode, finishedId);

    
    const finishedObj = {
        text: 'test' /* span 어떻게 따올지 생각해보기 */,
        id: finishedList + 1
    }

    /* finishedList에 Object를 push하고 그것을 저장. */
    finishedList.push(finishedObj);
    saveFinished();
}





function saveFinished(){
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedList));
}







/* Pending ul태그에서 자식 삭제 아마 finished 전용 del함수도 짜야할듯 */
function PendDelFunc(event){
    /* 수 많은 버튼 중 어느 버튼 눌렸나 확인. */
    const targetBtn = event.target;
    /* 누른 버튼은 li로 둘러쌓여진 자식태그이기 때문에 target이 들어있는 target의 부모(li) 확인 */
    const targetLi = targetBtn.parentNode;
    /* Pending ul태그에서 자식 삭제*/
    pendingUl.removeChild(targetLi);
    
    const cleanPendings = pendingList.filter(function(pending){
        return pending.id !== parseInt(targetLi.id);
    });
    pendingList = cleanPendings;
    savePendings();
}

/* finished -> pending 롤백 버튼 pending -> finished 뒤집기만 하면 될 듯 , finished del 버튼 */