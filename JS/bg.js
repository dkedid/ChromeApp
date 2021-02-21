const body = document.querySelector(".img-box");
const IMG_NUMBER = 31;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./data/${imgNumber + 1}.jpg`;
    image.classList.add("img-box__img");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
} 

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();