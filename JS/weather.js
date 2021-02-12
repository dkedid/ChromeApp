const API_KEY = "c1a9fe2dc3040f1f0a92964b01f41166"
const COORDS = 'coords';
const weather__temp = document.querySelector(".js-weather__temp");
const weather__location = document.querySelector(".js-weather__location");
const weather__temperatureMin = document.querySelector(".js-weather__temp-min");
const weather__temperatureMax = document.querySelector(".js-weather__temp-max");
const weather__humidity = document.querySelector(".js-weather__humidity");
const weather__weatherMain = document.querySelector(".js-weather__main");
const weather__weatherDescription = document.querySelector(".js-weather__description");

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(Response){
        return Response.json();
    }).then(function(json){
        /* 온도 */
        const temperature = json.main.temp;
        /* 최저기온 */
        const temperatureMin = json.main.temp_min;
        /* 최고기온 */
        const temperatureMax = json.main.temp_max;
        /* 습도 */
        const humidity = json.main.humidity;
        /* 기타 날씨 */
        const weatherMain = json.weather[0].main;
        const weatherDescription = json.weather[0].description;
        

        const place = json.name;
        weather__location.innerHTML = `Location : ${place}`
        weather__temp.innerHTML = ` Temperature : ${temperatureMin}℃ ~ ${temperatureMax}℃`
        weather__humidity.innerHTML = ` Humidity : ${humidity}%`
        weather__weatherMain.innerHTML = ` Weather : ${weatherMain}`
        weather__weatherDescription.innerHTML = ` Description : ${weatherDescription}`
    })
}




function saveCoords(coordsObject){
    localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObject);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();