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
