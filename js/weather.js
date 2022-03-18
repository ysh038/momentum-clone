const API_KEY = "eebefea3f4043570f4275895e75e03aa";

function onGeoOk(Position){
    const lat = Position.coords.latitude;
    const lon = Position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

function writeWeather(){
    weather.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.add(FADEIN_CLASSNAME);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
