const apiKey = "47b3b61560ebfccd3bbea057994d0ccc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");



async function fetchWeather(city) {
    
    const cityInput = document.getElementById("city");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const speed = document.getElementById("speed");
    const searchBox = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");
    const contentHolder = document.getElementById("holding");

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    
 
        if(response.status == 404 ){
            document.getElementById("city").innerText= "input valid city";
        } else{
            temperature.style.fontSize = "40px";
            cityInput.innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            humidity.innerHTML = "Humidity" + data.main.humidity + "%";
            speed.innerHTML = "Speed:" + data.wind.speed + " Km/hr";
            document.getElementById("holding").style.removeProperty('display');
        }

}

searchBtn.addEventListener("click", ()=>{
    fetchWeather(searchBox.value);
});



fetchWeather();