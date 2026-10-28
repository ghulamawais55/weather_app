const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "702cf122414cbd6fc540417592b7a7cb";

let pressureBtn = document.querySelector("#pressure");
let feelsLikeBtn = document.querySelector("#feelsLike");
let descBtn = document.querySelector("#description");
let windBtn = document.querySelector("#wind");
let humidityBtn = document.querySelector("#humidity");
let tempBtn = document.querySelector("#temperature");
let searchBtn = document.querySelector("#searchBtn");
let cityInput = document.querySelector("#cityInput");
let countryBtn = document.querySelector("#country");
let latitudeBtn = document.querySelector("#latitude");
let longitudeBtn = document.querySelector("#longitude");
let cityName = document.querySelector("#cityName");

searchBtn.addEventListener("click", async function () {
    let city = cityInput.value;

    let url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod == "404") {
        alert("City not found!");
        return;
    }

    tempBtn.innerText = `Temperature: ${data.main.temp} °C`;
    humidityBtn.innerText = `Humidity: ${data.main.humidity}%`;
    windBtn.innerText = `Wind: ${data.wind.speed} m/s`;
    descBtn.innerText = `Description: ${data.weather[0].description}`;
    feelsLikeBtn.innerText = `Feels Like: ${data.main.feels_like} °C`;
    pressureBtn.innerText = `Pressure: ${data.main.pressure} hPa`;
    countryBtn.innerText = `Country: ${data.sys.country}`;
    latitudeBtn.innerText = `Latitude: ${data.coord.lat}`;
    longitudeBtn.innerText = `Longitude: ${data.coord.lon}`;
    cityName.innerText = data.name;
});

