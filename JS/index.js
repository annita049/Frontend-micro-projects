document.querySelector('.card-body').style.display = "none";
document.querySelector('.error-msg').style.display = "none";

const api_key = "908e75c03c14814f31415de6968886f9";


async function Initialization (){
    document.querySelector('.card-body').style.display = "block";
    const city = "Dhaka";  // set to dhaka (defualt)
    try {
        const data = await GetWeather('Dhaka');
        document.querySelector('.error-msg').style.display = "none";
        DisplayWeather(data);
    }
    catch(error){
        document.querySelector('.error-msg').style.display = "block";
    }
}
Initialization();

async function GetWeather(city){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&"&appid=${api_key}`;

    const response = await fetch(api_url);
    return await response.json();
};

function DisplayWeather(data){

    document.querySelector('.temperature').innerText = data.main.temp;
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temperature').innerText = Math.round(data.main.temp) + "°C";
    document.querySelector('.weather-status').innerText = data.weather[0].description;
    document.querySelector('.humidity h2').innerText = data.main.humidity + " %";
    document.querySelector('.wind h2').innerText = data.wind.speed + " km/h";

    // to get weather icons
    document.querySelector('.weather-icon').src = "../Images/" +  data.weather[0].main + ".png";

}


const WeatherForm = document.querySelector('.WeatherForm');
WeatherForm.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const city = document.querySelector('.search-input').value;
    try {
        const weatherData = await GetWeather(city);
        document.querySelector('.error-msg').style.display = "none";
        DisplayWeather(weatherData);
    }
    catch(error){
        document.querySelector('.error-msg').style.display = "block";
    }
});
