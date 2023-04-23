const searchBtn = document.querySelector("#search");
const resetBtn = document.querySelector("#reset");
const historyForm = document.querySelector("#history");
const weatherDiv = document.querySelector("#weather");
const cityNameEl = document.querySelector("#city-name");
const picEl = document.querySelector("#pic");
const temperatureEl = document.querySelector("#temperature");
const humidityEl = document.querySelector("#humidity");
const windEl = document.querySelector("#wind");
const daysDiv = document.querySelector("#days");
const API_KEY = "252319c9d59965743b1509362af81204"; 


searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    const city = document.querySelector("#city").value.trim();
    if (city !== "") {
      getWeatherData(city);
    }
  });


  resetBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    localStorage.clear();
    historyForm.innerHTML = "";
    location.reload();
  });


  async function getWeatherData(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(city, data);
      saveToLocalStorage(city);
    } else {
      alert("Unable to get weather data for the city.");
    }
  }


  function displayWeatherData(city, data) {
    cityNameEl.textContent = city;
    const icon = data.list[0].weather[0].icon;
    picEl.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
    const fahrenheit = (data.list[0].main.temp - 273.15) * 1.4 + 32;
    temperatureEl.textContent = `Temperature: ${fahrenheit.toFixed(1)}°F`;
    humidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    windEl.textContent = `Wind Speed: ${data.list[0].wind.speed} m/s`;
    daysDiv.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const dayData = data.list[i * 8];
      const day = new Date(dayData.dt * 1000).toLocaleDateString();
      const dayIcon = dayData.weather[0].icon;
      const dayTemp = Math.round((dayData.main.temp - 273.15) * 1.4 + 32); 
      const dayEl = document.createElement("div");
      dayEl.classList.add("Weather", "col-md-2", "bg-dark", "text-white", "m-2", "rounded-lg");
      dayEl.innerHTML = `
        <h5 class="font-weight-bold mb-2">${day}</h5>
        <img class="img-fluid" src="https://openweathermap.org/img/w/${dayIcon}.png" alt="${dayData.weather[0].description}">
        <p class="mb-0">Temp: ${dayTemp}°F</p>
        <p class="mb-0">Humidity: ${dayData.main.humidity}%</p>
        <p class="mb-0">Wind Speed: ${dayData.wind.speed}m/s<p>
      `;
      daysDiv.appendChild(dayEl);
    }
    weatherDiv.classList.remove("d-none");
    daysDiv.classList.add("d-none");
    daysDiv.classList.remove("d-none");  
  }


  function saveToLocalStorage(city) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    if (!history.includes(city)) {
      history.push(city);
      localStorage.setItem("history", JSON.stringify(history));
      const cityBtn = document.createElement("button");
      cityBtn.setAttribute("type", "button");
      cityBtn.classList.add("btn", "btn-secondary", "mb-2");
      cityBtn.textContent = city;
      cityBtn.addEventListener("click", () => {
        getWeatherData(city);
      });
      historyForm.appendChild(cityBtn);
    }
  }


  const history = JSON.parse(localStorage.getItem("history")) || [];
if (history.length > 0) {
  const lastCity = history[history.length - 1];
  getWeatherData(lastCity);
}
  