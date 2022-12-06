/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const apiKey = '2356d9f05aa16f6fb4168d86141e10dd';

// Function to hit openWeather API
async function hitWeatherAPI(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const weatherData = await response.json();
    console.log(weatherData);
}

hitWeatherAPI(44.3755, 92.0236);

async function hitGetCoordinates(input) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`);
    const coordinateData = await response.json();
    console.log(coordinateData);
}

hitGetCoordinates('Wabasha');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSx3RkFBd0YsSUFBSSxPQUFPLElBQUksU0FBUyxPQUFPO0FBQ3ZIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1GQUFtRixNQUFNLGlCQUFpQixPQUFPO0FBQ2pIO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9ICcyMzU2ZDlmMDVhYTE2ZjZmYjQxNjhkODYxNDFlMTBkZCc7XG5cbi8vIEZ1bmN0aW9uIHRvIGhpdCBvcGVuV2VhdGhlciBBUElcbmFzeW5jIGZ1bmN0aW9uIGhpdFdlYXRoZXJBUEkobGF0LCBsb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHthcGlLZXl9YCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuXG5oaXRXZWF0aGVyQVBJKDQ0LjM3NTUsIDkyLjAyMzYpO1xuXG5hc3luYyBmdW5jdGlvbiBoaXRHZXRDb29yZGluYXRlcyhpbnB1dCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtpbnB1dH0mbGltaXQ9MSZhcHBpZD0ke2FwaUtleX1gKTtcbiAgICBjb25zdCBjb29yZGluYXRlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlRGF0YSk7XG59XG5cbmhpdEdldENvb3JkaW5hdGVzKCdXYWJhc2hhJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=