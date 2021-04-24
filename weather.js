const weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    weatherDescription = document.querySelector('.weather-description'),
    city = document.querySelector('.city'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=202bd36a288ec19c44132aa3f0cb4513&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.cod != "404") {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed.toFixed(0)} m/s`;
    } else {
        //city.textContent = data.message;
        humidity.textContent = data.message;
        weatherIcon.classList = null;
        weatherDescription.textContent = '';
        temperature.textContent = '';
        wind.textContent = '';
    }


}

function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.textContent = '[Enter city]';
    } else {
        city.textContent = localStorage.getItem('city');
        getWeather();
    }
}

// Set Name
function setCity(e) {
    if (e.keyCode == 13) {
        city.blur();
    }
}

// Blur Name
function blurCity() {
    if (city.textContent != '') {
        getWeather();
        localStorage.setItem('city', city.textContent);
    } else {
        getCity();
        //getWeather();
    }
}

// Click Name
function clickCity() {
    city.textContent = '';
}

city.addEventListener('keypress', setCity);
city.addEventListener('blur', blurCity);
city.addEventListener('click', clickCity);

document.addEventListener('DOMContentLoaded', getWeather);
//city.addEventListener('keypress', setCity);

getCity();
