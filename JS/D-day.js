const text = document.querySelector(".blossom-time");
function getTime() {
  const BlossomDay = new Date("2021-04-01:00:00:00+0900");
  let now = new Date();

  let month = BlossomDay.getMonth() - now.getMonth();
  let day = BlossomDay.getDay() - now.getDay();
  let hours = BlossomDay.getHours() - now.getHours();
  let minutes = BlossomDay.getMinutes() - now.getMinutes();
  let seconds = BlossomDay.getSeconds() - now.getSeconds();

  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }

  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }

  if (hours < 0) {
    day -= 1;
    hours += 24;
  }

  if (day < 0) {
    month -= 1;
    day += 31;
  }

  text.innerHTML = `${month < 10 ? `0${month}` : month}월 
  ${day < 10 ? `0${day}` : day}일 
  ${hours < 10 ? `0${hours}` : hours}:
  ${minutes < 10 ? `0${minutes}` : minutes}:
  ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
