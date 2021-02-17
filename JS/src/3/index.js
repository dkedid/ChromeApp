const titleText = document.querySelector(".title-text");
const range = document.querySelector(".range");
const formRange = document.querySelector(".form-range");
const formGuess = document.querySelector(".form-guess");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const result = document.querySelector(".result");
const resultWL = document.querySelector(".result-WL");

formRange.addEventListener("input", rangeHandler);
function rangeHandler(){
    const value = range.value;
    titleText.innerHTML = `Generate a number between 0 and ${value}.` 
}

function randomNumber() {
    const value = range.value;
    return randomNum = Math.floor((Math.random() + 0.5) * (value));
}

guessSubmit.addEventListener("click", submitHandler);
function submitHandler(event){
    event.preventDefault();
    const machineNum = randomNumber();
    const submitValue = guessInput.value;
    result.innerHTML = `You chose : ${submitValue}, the machine chose : ${machineNum}`
    guessInput.value="";
    const guess = parseInt(submitValue);

    if (guess === machineNum) {
        resultWL.innerHTML = "✨You Win!✨"
    } else {
        resultWL.innerHTML = "❌You Lost!❌"
    }
}











function play(){
    console.log('play');
}


function init(){
    setInterval(play, 1000);
}

init();