const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn-normal");

let tofuTF = false;
let tofu = "+"
let resultX = 0;
let resultY = 0;
let outPut = 0;

screen.innerHTML = "";



function handler(event){    
    const value = event.target.value

    if (isNaN(value)) {
        if (value === "+"){
            tofuTF = true;
            tofu = value;
            screen.innerHTML = value;
        } else if (value === "-"){
            tofuTF = true;
            tofu = value;
            screen.innerHTML = value;
        } else if (value === "*"){
            tofuTF = true;
            tofu = value;
            screen.innerHTML = value;
        } else if (value === "/"){
            tofuTF = true;
            tofu = value;
            screen.innerHTML = value;
        } else if (value === "C"){
            resultX = 0;
            resultY = 0;
            tofuTF = false;
            screen.innerHTML = "0";
        } else if (value === "="){
            if (tofu === "+") {
                outPut = resultX + resultY;
                screen.innerHTML = outPut;
                resultY = 0;
                resultX = outPut;
                tofuTF = false;
            } else if (tofu === "-") {
                outPut = resultX - resultY;
                screen.innerHTML = outPut;
                resultY = 0;
                resultX = outPut;
                tofuTF = false;
            } else if (tofu === "*") {
                outPut = resultX * resultY;
                screen.innerHTML = outPut;
                resultY = 0;
                resultX = outPut;
                tofuTF = false;
            } else if (tofu === "/") {
                outPut = resultX / resultY;
                screen.innerHTML = outPut;
                resultY = 0;
                resultX = outPut;
                tofuTF = false;
            }
        }
    } else {
        if (tofuTF) {
            resultY = parseInt(value) + parseInt(10 * resultY);
            screen.innerHTML = resultY;
            return resultY;
        } else {
            resultX = parseInt(value) + parseInt(10 * resultX);
            screen.innerHTML = resultX;
            return resultX;
        }
        
    }
}



function init() {
    btn.forEach(function(btn) {
        btn.addEventListener("click", handler)
    });
}

init();