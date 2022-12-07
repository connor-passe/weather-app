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