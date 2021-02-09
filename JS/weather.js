const API_KEY = "c1a9fe2dc3040f1f0a92964b01f41166"
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");
function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(Response){
        return Response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @ ${place}`
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