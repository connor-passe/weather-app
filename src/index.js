/* eslint-disable prefer-destructuring */
const apiKey = '2356d9f05aa16f6fb4168d86141e10dd';

// Get Coordinates from Location Name
async function hitGetCoordinates(input) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`);
    const coordinateData = await response.json();
    console.log(coordinateData);
    return coordinateData[0];
}

// Helper Function
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Get All Weather Data
async function hitGetWeather(coordinates) {
    const lat = coordinates.lat;
    const long = coordinates.lon;
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiKey}`);
    const weatherData = await response.json();
    return weatherData;
}

// Display data on page
function updateDisplay(weatherData) {
    // Clear search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.value = '';

    const tagLine = document.getElementById('tagLine');
    const description = weatherData.current.weather[0].description;
    tagLine.textContent = toTitleCase(description);

    // get location

    // date

    // time

    // current temp
    const tempElement = document.getElementById('temp');
    const temp = Math.round(weatherData.current.temp);
    tempElement.textContent = `${temp}°F`;

    // image

    // Feels Like
    const feelElement = document.getElementById('FLI');
    const feel = Math.round(weatherData.current.feels_like);
    feelElement.textContent = `${feel}°F`;

    // Humidity
    const humidityElement = document.getElementById('HI');
    const humidity = weatherData.current.humidity;
    humidityElement.textContent = `${humidity}%`;

    // Pressure
    const pressureElement = document.getElementById('PI');
    const pressure = weatherData.current.pressure;
    pressureElement.textContent = `${pressure} mb`;

    // Wind Speed
    const windElement = document.getElementById('WSI');
    const wind = weatherData.current.wind_speed;
    windElement.textContent = `${wind} m/h`;

    // Loop through bottom lads
    const dailyArray = weatherData.daily;
    const highTemps = document.getElementsByClassName('highTemp');
    const lowTemps = document.getElementsByClassName('lowTemp');
    for (let i = 0; i < 7; i += 1) {
        highTemps[i].textContent = Math.round(dailyArray[i].temp.max);
        lowTemps[i].textContent = Math.round(dailyArray[i].temp.min);
    }
}

// Data pipe from form to functions
async function handleForm(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchBar').value;
    const coordinates = await hitGetCoordinates(searchTerm);
    const weatherData = await hitGetWeather(coordinates);
    console.log(weatherData);
    updateDisplay(weatherData);
}

// slide to the side function

const form = document.getElementById('searchForm');
form.addEventListener('submit', handleForm);
