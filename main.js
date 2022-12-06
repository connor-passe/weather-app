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

const form = document.getElementById('searchForm');
form.addEventListener('submit', handleForm);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixNQUFNLGlCQUFpQixPQUFPO0FBQ2pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixJQUFJLE9BQU8sS0FBSyx3Q0FBd0MsT0FBTztBQUN2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmNvbnN0IGFwaUtleSA9ICcyMzU2ZDlmMDVhYTE2ZjZmYjQxNjhkODYxNDFlMTBkZCc7XG5cbi8vIEdldCBDb29yZGluYXRlcyBmcm9tIExvY2F0aW9uIE5hbWVcbmFzeW5jIGZ1bmN0aW9uIGhpdEdldENvb3JkaW5hdGVzKGlucHV0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2lucHV0fSZsaW1pdD0xJmFwcGlkPSR7YXBpS2V5fWApO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjb29yZGluYXRlRGF0YVswXTtcbn1cblxuLy8gR2V0IEFsbCBXZWF0aGVyIERhdGFcbmFzeW5jIGZ1bmN0aW9uIGhpdEdldFdlYXRoZXIoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBsYXQgPSBjb29yZGluYXRlcy5sYXQ7XG4gICAgY29uc3QgbG9uZyA9IGNvb3JkaW5hdGVzLmxvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbmd9JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbi8vIERhdGEgcGlwZSBmcm9tIGZvcm0gdG8gZnVuY3Rpb25zXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpLnZhbHVlO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgaGl0R2V0Q29vcmRpbmF0ZXMoc2VhcmNoVGVybSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBoaXRHZXRXZWF0aGVyKGNvb3JkaW5hdGVzKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==