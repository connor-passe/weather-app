/* eslint-disable prefer-destructuring */
const apiKey = '2356d9f05aa16f6fb4168d86141e10dd';

// Get Coordinates from Location Name
async function hitGetCoordinates(input) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`);
    const coordinateData = await response.json();
    return coordinateData[0];
}

// Get All Weather Data
async function hitGetWeather(coordinates) {
    const lat = coordinates.lat;
    const long = coordinates.lon;
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}`);
    const weatherData = await response.json();
    return weatherData;
}

// Data pipe from form to functions
async function handleForm(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchBar').value;
    const coordinates = await hitGetCoordinates(searchTerm);
    const weatherData = await hitGetWeather(coordinates);
    console.log(weatherData);
}

// prep for grip and left move

function prepLayout() {
    // slide to the left
    const searchFormHolder = document.getElementById('searchFormHolder');
    searchFormHolder.style.justifyContent = 'flex-start';
    const searchBar = document.getElementById('searchBar');
    searchBar.style.width = '150px';

    // create grid layout
    const content = document.getElementById('content');
    content.style.display = 'grid';
    content.style.gridTemplateColumns = 'auto 1fr auto';
    content.style.gridTemplateRows = 'auto 1fr auto';

    // create info box
    const topInfoBox = document.createElement('div')
}

// Display data on page
function displayWeather() {
    // put search bar to the side (if needed)

    // make info box
    // make extra info box
    // make daily cells
}

// slide to the side function


const form = document.getElementById('searchForm');
form.addEventListener('submit', handleForm);
