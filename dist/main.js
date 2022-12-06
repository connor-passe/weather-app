/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const apiKey = '2356d9f05aa16f6fb4168d86141e10dd';

// Get Coordinates from Location Name
async function hitGetCoordinates(input) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`);
    const coordinateData = await response.json();
    console.log(coordinateData);
}

// Get current weather
async function hitGetWeather(lat, long) {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}`);
    const weatherData = await response.json();
    console.log(weatherData);
}

// hitGetCoordinates('Wabasha, Minnesota');
hitGetWeather(44.3755, 92.0236);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUYsTUFBTSxpQkFBaUIsT0FBTztBQUNqSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdGQUF3RixJQUFJLE9BQU8sS0FBSyx3Q0FBd0MsT0FBTztBQUN2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9ICcyMzU2ZDlmMDVhYTE2ZjZmYjQxNjhkODYxNDFlMTBkZCc7XG5cbi8vIEdldCBDb29yZGluYXRlcyBmcm9tIExvY2F0aW9uIE5hbWVcbmFzeW5jIGZ1bmN0aW9uIGhpdEdldENvb3JkaW5hdGVzKGlucHV0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2lucHV0fSZsaW1pdD0xJmFwcGlkPSR7YXBpS2V5fWApO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVEYXRhKTtcbn1cblxuLy8gR2V0IGN1cnJlbnQgd2VhdGhlclxuYXN5bmMgZnVuY3Rpb24gaGl0R2V0V2VhdGhlcihsYXQsIGxvbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbmd9JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG59XG5cbi8vIGhpdEdldENvb3JkaW5hdGVzKCdXYWJhc2hhLCBNaW5uZXNvdGEnKTtcbmhpdEdldFdlYXRoZXIoNDQuMzc1NSwgOTIuMDIzNik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=