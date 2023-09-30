const apiKey = "a906b8b573241b3d8adbb75758e32a25";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search img");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.visibility = "visible";
    document.querySelector(".weather").style.visibility = "hidden";
    weatherIcon.style.display = "none";
  } 
  else {
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".feels").innerHTML =
      "Feels like " + Math.round(data.main.feels_like) + "°C";
    document.querySelector(".weather-type").innerHTML = data.weather[0].main;

    //set image according to the weather from api
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/clouds.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "./assets/haze.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./assets/snowflake.png";
    } else if (data.weather[0].main == "Sunny") {
      weatherIcon.src = "./assets/clear.png";
    }
    document.querySelector(".error").style.visibility = "hidden";
    document.querySelector(".weather").style.visibility = "visible";
    weatherIcon.style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=19f1c7646f1ca562a5b55173eb3a3e4e&contentType=json", {
//   method: 'GET',
//   headers: {

//   },

// }).then(response => {
//   if (!response.ok) {
//     throw response; //check the http response code and if isn't ok then throw the response as an error
//   }

//   return response.json(); //parse the result as JSON

// }).then(response => {
//   //response now contains parsed JSON ready for use
//   processWeatherData(response);

// }).catch((errorResponse) => {
//   if (errorResponse.text) { //additional error information
//     errorResponse.text().then( errorMessage => {
//       //errorMessage now returns the response body which includes the full error message
//     })
//   } else {
//     //no additional error information
//   }
// });
