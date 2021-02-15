// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selectValue = document.querySelector("select");
const h1 = document.querySelector("h1");

const greetingDF = "Where are you from?",
  greetingKR = "안녕하세요",
  greetingGR = "γεια",
  greetingTK = "Selam",
  greetingFL = "Hei";

selectValue.addEventListener("input", saveValue);
function saveValue() {
  let country = selectValue.value;
  localStorage.setItem("Country", country);
  /* Greeting */
  if (country == "default") {
    h1.innerText = `${greetingDF}! :)`;
  } else if (country == "Korea") {
    h1.innerText = `${greetingKR}! :)`;
  } else if (country == "Greece") {
    h1.innerText = `${greetingGR}! :)`;
  } else if (country == "Turkey") {
    h1.innerText = `${greetingTK}! :)`;
  } else if (country == "Finland") {
    h1.innerText = `${greetingFL}! :)`;
  }
}

function loadData() {
  const countryData = localStorage.getItem("Country");
  let country = countryData;
  if (countryData === null) {
    //nothing
  } else {
    if (country == "default") {
      h1.innerText = `${greetingDF}! :)`;
    } else if (country == "Korea") {
      h1.innerText = `${greetingKR}! :)`;
    } else if (country == "Greece") {
      h1.innerText = `${greetingGR}! :)`;
    } else if (country == "Turkey") {
      h1.innerText = `${greetingTK}! :)`;
    } else if (country == "Finland") {
      h1.innerText = `${greetingFL}! :)`;
    }
  }
}

function init() {
  loadData();
}
init();
