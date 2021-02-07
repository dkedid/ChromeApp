const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-time-now");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    let dn = undefined;

    if (hours >= 12) {
        dn = "오후"
    } else {
        dn = "오전"
    }
    
    clockTitle.innerText = ` ${dn} ${
        hours < 10 ? `0${hours}` : hours
    } : ${
        minutes < 10 ? `0${minutes}` : minutes
    } : ${
        seconds < 10 ? `0${seconds}` : seconds 
    }`;

}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();