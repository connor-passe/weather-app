/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* eslint-disable prefer-destructuring */
const apiKey = "2356d9f05aa16f6fb4168d86141e10dd";

// Get Coordinates from Location Name
async function hitGetCoordinates(input) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`
  );
  const coordinateData = await response.json();
  console.log(coordinateData);
  return coordinateData[0];
}

// Helper Function
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

// Get All Weather Data
async function hitGetWeather(coordinates) {
  const lat = coordinates.lat;
  const long = coordinates.lon;
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiKey}`
  );
  const weatherData = await response.json();
  return weatherData;
}

// Display data on page
function updateDisplay(weatherData, coordinates) {
  // Clear search bar
  const searchBar = document.getElementById("searchBar");
  searchBar.value = "";

  const tagLine = document.getElementById("tagLine");
  const description = weatherData.current.weather[0].description;
  tagLine.textContent = toTitleCase(description);

  // get location
  const locationElement = document.getElementById("locationName");
  const city = coordinates.name;
  const state = coordinates.state;
  locationElement.textContent = `${city}, ${state}`;

  // date
  const dateElement = document.getElementById("date");
  const timeZ = weatherData.timezone;

  // current datetime string in America/Chicago timezone
  const localDateStr = new Date().toLocaleString("en-US", { timeZone: timeZ });

  // create new Date object
  const localDate = new Date(localDateStr);

  // year as (YYYY) format
  const year = localDate.getFullYear();

  // month as (MM) format
  const month = `0${localDate.getMonth() + 1}`.slice(-2);

  // date as (DD) format
  const date = `0${localDate.getDate()}`.slice(-2);

  // date time in YYYY-MM-DD format
  const finalDateString = `${year}-${month}-${date}`;

  dateElement.textContent = finalDateString;

  // current temp
  const tempElement = document.getElementById("temp");
  const temp = Math.round(weatherData.current.temp);
  tempElement.textContent = `${temp} °F`;

  // image
  const mainImage = document.getElementById("tagImage");
  const iconCode = weatherData.current.weather[0].icon;
  mainImage.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Feels Like
  const feelElement = document.getElementById("FLI");
  const feel = Math.round(weatherData.current.feels_like);
  feelElement.textContent = `${feel} °F`;

  // Humidity
  const humidityElement = document.getElementById("HI");
  const humidity = weatherData.current.humidity;
  humidityElement.textContent = `${humidity} %`;

  // Pressure
  const pressureElement = document.getElementById("PI");
  const pressure = weatherData.current.pressure;
  pressureElement.textContent = `${pressure} mb`;

  // Wind Speed
  const windElement = document.getElementById("WSI");
  const wind = Math.round(weatherData.current.wind_speed);
  windElement.textContent = `${wind} m/h`;

  // Loop through bottom lads
  const dailyArray = weatherData.daily;
  const highTemps = document.getElementsByClassName("highTemp");
  const lowTemps = document.getElementsByClassName("lowTemp");
  const daysOfWeek = document.getElementsByClassName("dayOfWeek");
  const weatherIcons = document.getElementsByClassName('weatherIcon');

  const weekArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < 7; i += 1) {
    const maxTemp = Math.round(dailyArray[i + 1].temp.max);
    highTemps[i].textContent = `${maxTemp} °F`;
    const minTemp = Math.round(dailyArray[i + 1].temp.min);
    lowTemps[i].textContent = `${minTemp} °F`;
    const weekIndex = (localDate.getDay() + i + 1) % 7;
    daysOfWeek[i].textContent = weekArray[weekIndex];
    const iCode = dailyArray[i + 1].weather[0].icon;
    weatherIcons[i].src = `https://openweathermap.org/img/wn/${iCode}@2x.png`;
  }
}

// Data pipe from form to functions
async function handleForm(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchBar").value;
  const coordinates = await hitGetCoordinates(searchTerm);
  const errorBox = document.getElementById('searchErrorBox');
  if (coordinates === undefined) {
    errorBox.style.display = 'block';
  } else {
    const weatherData = await hitGetWeather(coordinates);
    errorBox.style.display ='none';
    console.log(weatherData);
    updateDisplay(weatherData, coordinates);
  }
}

async function initLoad() {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", handleForm);

    const searchTerm = 'Wabasha';
    const coordinates = await hitGetCoordinates(searchTerm);
    const errorBox = document.getElementById('searchErrorBox');
    if (coordinates === undefined) {
      errorBox.style.display = 'block';
    } else {
      const weatherData = await hitGetWeather(coordinates);
      errorBox.style.display ='none';
      console.log(weatherData);
      updateDisplay(weatherData, coordinates);
    }
}

initLoad();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU0saUJBQWlCLE9BQU87QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxLQUFLLHVEQUF1RCxPQUFPO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUssSUFBSSxNQUFNOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsaUJBQWlCOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCOztBQUU3QztBQUNBLG1CQUFtQixvQkFBb0I7O0FBRXZDO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE1BQU07O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxTQUFTOztBQUVoRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVOztBQUU3QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0RBQStELE1BQU07QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5jb25zdCBhcGlLZXkgPSBcIjIzNTZkOWYwNWFhMTZmNmZiNDE2OGQ4NjE0MWUxMGRkXCI7XG5cbi8vIEdldCBDb29yZGluYXRlcyBmcm9tIExvY2F0aW9uIE5hbWVcbmFzeW5jIGZ1bmN0aW9uIGhpdEdldENvb3JkaW5hdGVzKGlucHV0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtpbnB1dH0mbGltaXQ9MSZhcHBpZD0ke2FwaUtleX1gXG4gICk7XG4gIGNvbnN0IGNvb3JkaW5hdGVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhjb29yZGluYXRlRGF0YSk7XG4gIHJldHVybiBjb29yZGluYXRlRGF0YVswXTtcbn1cblxuLy8gSGVscGVyIEZ1bmN0aW9uXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFxuICAgIC9cXHdcXFMqL2csXG4gICAgKHR4dCkgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4gICk7XG59XG5cbi8vIEdldCBBbGwgV2VhdGhlciBEYXRhXG5hc3luYyBmdW5jdGlvbiBoaXRHZXRXZWF0aGVyKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGxhdCA9IGNvb3JkaW5hdGVzLmxhdDtcbiAgY29uc3QgbG9uZyA9IGNvb3JkaW5hdGVzLmxvbjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb25nfSZ1bml0cz1pbXBlcmlhbCZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxhbGVydHMmYXBwaWQ9JHthcGlLZXl9YFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG4vLyBEaXNwbGF5IGRhdGEgb24gcGFnZVxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSh3ZWF0aGVyRGF0YSwgY29vcmRpbmF0ZXMpIHtcbiAgLy8gQ2xlYXIgc2VhcmNoIGJhclxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKTtcbiAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcblxuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWdMaW5lXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgdGFnTGluZS50ZXh0Q29udGVudCA9IHRvVGl0bGVDYXNlKGRlc2NyaXB0aW9uKTtcblxuICAvLyBnZXQgbG9jYXRpb25cbiAgY29uc3QgbG9jYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbk5hbWVcIik7XG4gIGNvbnN0IGNpdHkgPSBjb29yZGluYXRlcy5uYW1lO1xuICBjb25zdCBzdGF0ZSA9IGNvb3JkaW5hdGVzLnN0YXRlO1xuICBsb2NhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjaXR5fSwgJHtzdGF0ZX1gO1xuXG4gIC8vIGRhdGVcbiAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIGNvbnN0IHRpbWVaID0gd2VhdGhlckRhdGEudGltZXpvbmU7XG5cbiAgLy8gY3VycmVudCBkYXRldGltZSBzdHJpbmcgaW4gQW1lcmljYS9DaGljYWdvIHRpbWV6b25lXG4gIGNvbnN0IGxvY2FsRGF0ZVN0ciA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHRpbWVab25lOiB0aW1lWiB9KTtcblxuICAvLyBjcmVhdGUgbmV3IERhdGUgb2JqZWN0XG4gIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsRGF0ZVN0cik7XG5cbiAgLy8geWVhciBhcyAoWVlZWSkgZm9ybWF0XG4gIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAvLyBtb250aCBhcyAoTU0pIGZvcm1hdFxuICBjb25zdCBtb250aCA9IGAwJHtsb2NhbERhdGUuZ2V0TW9udGgoKSArIDF9YC5zbGljZSgtMik7XG5cbiAgLy8gZGF0ZSBhcyAoREQpIGZvcm1hdFxuICBjb25zdCBkYXRlID0gYDAke2xvY2FsRGF0ZS5nZXREYXRlKCl9YC5zbGljZSgtMik7XG5cbiAgLy8gZGF0ZSB0aW1lIGluIFlZWVktTU0tREQgZm9ybWF0XG4gIGNvbnN0IGZpbmFsRGF0ZVN0cmluZyA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuXG4gIGRhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZmluYWxEYXRlU3RyaW5nO1xuXG4gIC8vIGN1cnJlbnQgdGVtcFxuICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgdGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKTtcbiAgdGVtcEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSDCsEZgO1xuXG4gIC8vIGltYWdlXG4gIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnSW1hZ2VcIik7XG4gIGNvbnN0IGljb25Db2RlID0gd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb247XG4gIG1haW5JbWFnZS5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkNvZGV9QDJ4LnBuZ2A7XG5cbiAgLy8gRmVlbHMgTGlrZVxuICBjb25zdCBmZWVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRkxJXCIpO1xuICBjb25zdCBmZWVsID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICBmZWVsRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2ZlZWx9IMKwRmA7XG5cbiAgLy8gSHVtaWRpdHlcbiAgY29uc3QgaHVtaWRpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJISVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBodW1pZGl0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0gJWA7XG5cbiAgLy8gUHJlc3N1cmVcbiAgY29uc3QgcHJlc3N1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQSVwiKTtcbiAgY29uc3QgcHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlO1xuICBwcmVzc3VyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwcmVzc3VyZX0gbWJgO1xuXG4gIC8vIFdpbmQgU3BlZWRcbiAgY29uc3Qgd2luZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldTSVwiKTtcbiAgY29uc3Qgd2luZCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC53aW5kX3NwZWVkKTtcbiAgd2luZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3aW5kfSBtL2hgO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBib3R0b20gbGFkc1xuICBjb25zdCBkYWlseUFycmF5ID0gd2VhdGhlckRhdGEuZGFpbHk7XG4gIGNvbnN0IGhpZ2hUZW1wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoaWdoVGVtcFwiKTtcbiAgY29uc3QgbG93VGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG93VGVtcFwiKTtcbiAgY29uc3QgZGF5c09mV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkYXlPZldlZWtcIik7XG4gIGNvbnN0IHdlYXRoZXJJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJJY29uJyk7XG5cbiAgY29uc3Qgd2Vla0FycmF5ID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IG1heFRlbXAgPSBNYXRoLnJvdW5kKGRhaWx5QXJyYXlbaSArIDFdLnRlbXAubWF4KTtcbiAgICBoaWdoVGVtcHNbaV0udGV4dENvbnRlbnQgPSBgJHttYXhUZW1wfSDCsEZgO1xuICAgIGNvbnN0IG1pblRlbXAgPSBNYXRoLnJvdW5kKGRhaWx5QXJyYXlbaSArIDFdLnRlbXAubWluKTtcbiAgICBsb3dUZW1wc1tpXS50ZXh0Q29udGVudCA9IGAke21pblRlbXB9IMKwRmA7XG4gICAgY29uc3Qgd2Vla0luZGV4ID0gKGxvY2FsRGF0ZS5nZXREYXkoKSArIGkgKyAxKSAlIDc7XG4gICAgZGF5c09mV2Vla1tpXS50ZXh0Q29udGVudCA9IHdlZWtBcnJheVt3ZWVrSW5kZXhdO1xuICAgIGNvbnN0IGlDb2RlID0gZGFpbHlBcnJheVtpICsgMV0ud2VhdGhlclswXS5pY29uO1xuICAgIHdlYXRoZXJJY29uc1tpXS5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aUNvZGV9QDJ4LnBuZ2A7XG4gIH1cbn1cblxuLy8gRGF0YSBwaXBlIGZyb20gZm9ybSB0byBmdW5jdGlvbnNcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2VhcmNoVGVybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpLnZhbHVlO1xuICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGhpdEdldENvb3JkaW5hdGVzKHNlYXJjaFRlcm0pO1xuICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hFcnJvckJveCcpO1xuICBpZiAoY29vcmRpbmF0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIGVycm9yQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgaGl0R2V0V2VhdGhlcihjb29yZGluYXRlcyk7XG4gICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB1cGRhdGVEaXNwbGF5KHdlYXRoZXJEYXRhLCBjb29yZGluYXRlcyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdExvYWQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoRm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybSk7XG5cbiAgICBjb25zdCBzZWFyY2hUZXJtID0gJ1dhYmFzaGEnO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgaGl0R2V0Q29vcmRpbmF0ZXMoc2VhcmNoVGVybSk7XG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRXJyb3JCb3gnKTtcbiAgICBpZiAoY29vcmRpbmF0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgaGl0R2V0V2VhdGhlcihjb29yZGluYXRlcyk7XG4gICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICB1cGRhdGVEaXNwbGF5KHdlYXRoZXJEYXRhLCBjb29yZGluYXRlcyk7XG4gICAgfVxufVxuXG5pbml0TG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==