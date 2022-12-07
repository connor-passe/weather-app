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
    const content = document.getElementById('content');
    content.style.display = 'none';

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
    content.style.display = 'grid';
}

initLoad();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU0saUJBQWlCLE9BQU87QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxLQUFLLHVEQUF1RCxPQUFPO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUssSUFBSSxNQUFNOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsaUJBQWlCOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCOztBQUU3QztBQUNBLG1CQUFtQixvQkFBb0I7O0FBRXZDO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE1BQU07O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxTQUFTOztBQUVoRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVOztBQUU3QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0RBQStELE1BQU07QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuY29uc3QgYXBpS2V5ID0gXCIyMzU2ZDlmMDVhYTE2ZjZmYjQxNjhkODYxNDFlMTBkZFwiO1xuXG4vLyBHZXQgQ29vcmRpbmF0ZXMgZnJvbSBMb2NhdGlvbiBOYW1lXG5hc3luYyBmdW5jdGlvbiBoaXRHZXRDb29yZGluYXRlcyhpbnB1dCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7aW5wdXR9JmxpbWl0PTEmYXBwaWQ9JHthcGlLZXl9YFxuICApO1xuICBjb25zdCBjb29yZGluYXRlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coY29vcmRpbmF0ZURhdGEpO1xuICByZXR1cm4gY29vcmRpbmF0ZURhdGFbMF07XG59XG5cbi8vIEhlbHBlciBGdW5jdGlvblxuZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvXFx3XFxTKi9nLFxuICAgICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuICApO1xufVxuXG4vLyBHZXQgQWxsIFdlYXRoZXIgRGF0YVxuYXN5bmMgZnVuY3Rpb24gaGl0R2V0V2VhdGhlcihjb29yZGluYXRlcykge1xuICBjb25zdCBsYXQgPSBjb29yZGluYXRlcy5sYXQ7XG4gIGNvbnN0IGxvbmcgPSBjb29yZGluYXRlcy5sb247XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9uZ30mdW5pdHM9aW1wZXJpYWwmZXhjbHVkZT1taW51dGVseSxob3VybHksYWxlcnRzJmFwcGlkPSR7YXBpS2V5fWBcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuLy8gRGlzcGxheSBkYXRhIG9uIHBhZ2VcbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkod2VhdGhlckRhdGEsIGNvb3JkaW5hdGVzKSB7XG4gIC8vIENsZWFyIHNlYXJjaCBiYXJcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIik7XG4gIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XG5cbiAgY29uc3QgdGFnTGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnTGluZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIHRhZ0xpbmUudGV4dENvbnRlbnQgPSB0b1RpdGxlQ2FzZShkZXNjcmlwdGlvbik7XG5cbiAgLy8gZ2V0IGxvY2F0aW9uXG4gIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25OYW1lXCIpO1xuICBjb25zdCBjaXR5ID0gY29vcmRpbmF0ZXMubmFtZTtcbiAgY29uc3Qgc3RhdGUgPSBjb29yZGluYXRlcy5zdGF0ZTtcbiAgbG9jYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y2l0eX0sICR7c3RhdGV9YDtcblxuICAvLyBkYXRlXG4gIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICBjb25zdCB0aW1lWiA9IHdlYXRoZXJEYXRhLnRpbWV6b25lO1xuXG4gIC8vIGN1cnJlbnQgZGF0ZXRpbWUgc3RyaW5nIGluIEFtZXJpY2EvQ2hpY2FnbyB0aW1lem9uZVxuICBjb25zdCBsb2NhbERhdGVTdHIgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogdGltZVogfSk7XG5cbiAgLy8gY3JlYXRlIG5ldyBEYXRlIG9iamVjdFxuICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShsb2NhbERhdGVTdHIpO1xuXG4gIC8vIHllYXIgYXMgKFlZWVkpIGZvcm1hdFxuICBjb25zdCB5ZWFyID0gbG9jYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgLy8gbW9udGggYXMgKE1NKSBmb3JtYXRcbiAgY29uc3QgbW9udGggPSBgMCR7bG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxfWAuc2xpY2UoLTIpO1xuXG4gIC8vIGRhdGUgYXMgKEREKSBmb3JtYXRcbiAgY29uc3QgZGF0ZSA9IGAwJHtsb2NhbERhdGUuZ2V0RGF0ZSgpfWAuc2xpY2UoLTIpO1xuXG4gIC8vIGRhdGUgdGltZSBpbiBZWVlZLU1NLUREIGZvcm1hdFxuICBjb25zdCBmaW5hbERhdGVTdHJpbmcgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcblxuICBkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGZpbmFsRGF0ZVN0cmluZztcblxuICAvLyBjdXJyZW50IHRlbXBcbiAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XG4gIGNvbnN0IHRlbXAgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCk7XG4gIHRlbXBFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGVtcH0gwrBGYDtcblxuICAvLyBpbWFnZVxuICBjb25zdCBtYWluSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhZ0ltYWdlXCIpO1xuICBjb25zdCBpY29uQ29kZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uO1xuICBtYWluSW1hZ2Uuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25Db2RlfUAyeC5wbmdgO1xuXG4gIC8vIEZlZWxzIExpa2VcbiAgY29uc3QgZmVlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZMSVwiKTtcbiAgY29uc3QgZmVlbCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC5mZWVsc19saWtlKTtcbiAgZmVlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtmZWVsfSDCsEZgO1xuXG4gIC8vIEh1bWlkaXR5XG4gIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSElcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgaHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9ICVgO1xuXG4gIC8vIFByZXNzdXJlXG4gIGNvbnN0IHByZXNzdXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUElcIik7XG4gIGNvbnN0IHByZXNzdXJlID0gd2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZTtcbiAgcHJlc3N1cmVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cHJlc3N1cmV9IG1iYDtcblxuICAvLyBXaW5kIFNwZWVkXG4gIGNvbnN0IHdpbmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXU0lcIik7XG4gIGNvbnN0IHdpbmQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9zcGVlZCk7XG4gIHdpbmRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7d2luZH0gbS9oYDtcblxuICAvLyBMb29wIHRocm91Z2ggYm90dG9tIGxhZHNcbiAgY29uc3QgZGFpbHlBcnJheSA9IHdlYXRoZXJEYXRhLmRhaWx5O1xuICBjb25zdCBoaWdoVGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlnaFRlbXBcIik7XG4gIGNvbnN0IGxvd1RlbXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvd1RlbXBcIik7XG4gIGNvbnN0IGRheXNPZldlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF5T2ZXZWVrXCIpO1xuICBjb25zdCB3ZWF0aGVySWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVySWNvbicpO1xuXG4gIGNvbnN0IHdlZWtBcnJheSA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjb25zdCBtYXhUZW1wID0gTWF0aC5yb3VuZChkYWlseUFycmF5W2kgKyAxXS50ZW1wLm1heCk7XG4gICAgaGlnaFRlbXBzW2ldLnRleHRDb250ZW50ID0gYCR7bWF4VGVtcH0gwrBGYDtcbiAgICBjb25zdCBtaW5UZW1wID0gTWF0aC5yb3VuZChkYWlseUFycmF5W2kgKyAxXS50ZW1wLm1pbik7XG4gICAgbG93VGVtcHNbaV0udGV4dENvbnRlbnQgPSBgJHttaW5UZW1wfSDCsEZgO1xuICAgIGNvbnN0IHdlZWtJbmRleCA9IChsb2NhbERhdGUuZ2V0RGF5KCkgKyBpICsgMSkgJSA3O1xuICAgIGRheXNPZldlZWtbaV0udGV4dENvbnRlbnQgPSB3ZWVrQXJyYXlbd2Vla0luZGV4XTtcbiAgICBjb25zdCBpQ29kZSA9IGRhaWx5QXJyYXlbaSArIDFdLndlYXRoZXJbMF0uaWNvbjtcbiAgICB3ZWF0aGVySWNvbnNbaV0uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2lDb2RlfUAyeC5wbmdgO1xuICB9XG59XG5cbi8vIERhdGEgcGlwZSBmcm9tIGZvcm0gdG8gZnVuY3Rpb25zXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKS52YWx1ZTtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBoaXRHZXRDb29yZGluYXRlcyhzZWFyY2hUZXJtKTtcbiAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRXJyb3JCb3gnKTtcbiAgaWYgKGNvb3JkaW5hdGVzID09PSB1bmRlZmluZWQpIHtcbiAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGhpdEdldFdlYXRoZXIoY29vcmRpbmF0ZXMpO1xuICAgIGVycm9yQm94LnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgdXBkYXRlRGlzcGxheSh3ZWF0aGVyRGF0YSwgY29vcmRpbmF0ZXMpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm0pO1xuXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9ICdXYWJhc2hhJztcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGhpdEdldENvb3JkaW5hdGVzKHNlYXJjaFRlcm0pO1xuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEVycm9yQm94Jyk7XG4gICAgaWYgKGNvb3JkaW5hdGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGhpdEdldFdlYXRoZXIoY29vcmRpbmF0ZXMpO1xuICAgICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgdXBkYXRlRGlzcGxheSh3ZWF0aGVyRGF0YSwgY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG59XG5cbmluaXRMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9