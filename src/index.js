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
