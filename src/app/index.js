require("./index.css");

const { Weather } = require("./weather");
const { UI } = require("./ui");
const { Store } = require("./store");

const store = new Store();
const {city, countryCode} = store.getLocationData();

const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", function(e) {
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("country-code").value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);