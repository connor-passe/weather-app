/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixNQUFNLGlCQUFpQixPQUFPO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLElBQUksT0FBTyxLQUFLLHVEQUF1RCxPQUFPO0FBQ3RLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuY29uc3QgYXBpS2V5ID0gJzIzNTZkOWYwNWFhMTZmNmZiNDE2OGQ4NjE0MWUxMGRkJztcblxuLy8gR2V0IENvb3JkaW5hdGVzIGZyb20gTG9jYXRpb24gTmFtZVxuYXN5bmMgZnVuY3Rpb24gaGl0R2V0Q29vcmRpbmF0ZXMoaW5wdXQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7aW5wdXR9JmxpbWl0PTEmYXBwaWQ9JHthcGlLZXl9YCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coY29vcmRpbmF0ZURhdGEpO1xuICAgIHJldHVybiBjb29yZGluYXRlRGF0YVswXTtcbn1cblxuLy8gSGVscGVyIEZ1bmN0aW9uXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgKHR4dCkgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuLy8gR2V0IEFsbCBXZWF0aGVyIERhdGFcbmFzeW5jIGZ1bmN0aW9uIGhpdEdldFdlYXRoZXIoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBsYXQgPSBjb29yZGluYXRlcy5sYXQ7XG4gICAgY29uc3QgbG9uZyA9IGNvb3JkaW5hdGVzLmxvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbmd9JnVuaXRzPWltcGVyaWFsJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbi8vIERpc3BsYXkgZGF0YSBvbiBwYWdlXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KHdlYXRoZXJEYXRhKSB7XG4gICAgLy8gQ2xlYXIgc2VhcmNoIGJhclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXInKTtcbiAgICBzZWFyY2hCYXIudmFsdWUgPSAnJztcblxuICAgIGNvbnN0IHRhZ0xpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnTGluZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHRhZ0xpbmUudGV4dENvbnRlbnQgPSB0b1RpdGxlQ2FzZShkZXNjcmlwdGlvbik7XG5cbiAgICAvLyBnZXQgbG9jYXRpb25cblxuICAgIC8vIGRhdGVcblxuICAgIC8vIHRpbWVcblxuICAgIC8vIGN1cnJlbnQgdGVtcFxuICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbiAgICBjb25zdCB0ZW1wID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXApO1xuICAgIHRlbXBFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGVtcH3CsEZgO1xuXG4gICAgLy8gaW1hZ2VcblxuICAgIC8vIEZlZWxzIExpa2VcbiAgICBjb25zdCBmZWVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGTEknKTtcbiAgICBjb25zdCBmZWVsID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICAgIGZlZWxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZmVlbH3CsEZgO1xuXG4gICAgLy8gSHVtaWRpdHlcbiAgICBjb25zdCBodW1pZGl0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSEknKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgaHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XG5cbiAgICAvLyBQcmVzc3VyZVxuICAgIGNvbnN0IHByZXNzdXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQSScpO1xuICAgIGNvbnN0IHByZXNzdXJlID0gd2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZTtcbiAgICBwcmVzc3VyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwcmVzc3VyZX0gbWJgO1xuXG4gICAgLy8gV2luZCBTcGVlZFxuICAgIGNvbnN0IHdpbmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1dTSScpO1xuICAgIGNvbnN0IHdpbmQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQ7XG4gICAgd2luZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3aW5kfSBtL2hgO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGJvdHRvbSBsYWRzXG4gICAgY29uc3QgZGFpbHlBcnJheSA9IHdlYXRoZXJEYXRhLmRhaWx5O1xuICAgIGNvbnN0IGhpZ2hUZW1wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2hUZW1wJyk7XG4gICAgY29uc3QgbG93VGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3dUZW1wJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICAgICAgaGlnaFRlbXBzW2ldLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYWlseUFycmF5W2ldLnRlbXAubWF4KTtcbiAgICAgICAgbG93VGVtcHNbaV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhaWx5QXJyYXlbaV0udGVtcC5taW4pO1xuICAgIH1cbn1cblxuLy8gRGF0YSBwaXBlIGZyb20gZm9ybSB0byBmdW5jdGlvbnNcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQmFyJykudmFsdWU7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBoaXRHZXRDb29yZGluYXRlcyhzZWFyY2hUZXJtKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGhpdEdldFdlYXRoZXIoY29vcmRpbmF0ZXMpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB1cGRhdGVEaXNwbGF5KHdlYXRoZXJEYXRhKTtcbn1cblxuLy8gc2xpZGUgdG8gdGhlIHNpZGUgZnVuY3Rpb25cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9