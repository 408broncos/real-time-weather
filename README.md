# real-time-weather


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Javascript    | [https://www.w3schools.com/jsref/met_loc_reload.asp](https://www.w3schools.com/jsref/met_loc_reload.asp)  
| Javascript   | [https://teamtreehouse.com/community/why-do-i-get-my-calculation-from-fahrenheit-to-celsius-wrong-in-my-database](https://teamtreehouse.com/community/why-do-i-get-my-calculation-from-fahrenheit-to-celsius-wrong-in-my-database) 
| JSON| [https://www.w3schools.com/js/js_json_intro.asp](https://www.w3schools.com/js/js_json_intro.asp) |


## Description 

[Visit the Deployed Site](https://408broncos.github.io/real-time-weather/)

For this project I was given a task to create a 5 day weather forecast. Our first task was to create a search bar where the user could look up a city. After the user looks up their chosen city there should display a 5 day weather report of that city. Finally the 5 day weather report should have the following: a temperature, humidity levels and wind speed.

## Markdown



## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
function displayWeatherData(city, data) {
    cityNameEl.textContent = city;
    const icon = data.list[0].weather[0].icon;
    picEl.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
    const fahrenheit = (data.list[0].main.temp - 273.15) * 1.4 + 32;
    temperatureEl.textContent = `Temperature: ${fahrenheit.toFixed(1)}°F`;
    humidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    windEl.textContent = `Wind Speed: ${data.list[0].wind.speed} m/s`;
    daysDiv.innerHTML = "";
```

For this example I really struggled with displaying the temperature in Fahrenheit and getting the correct degree count. I discovered, after a lot of trial and errors, that my equation to grab the Fahrenheit temperature was completely wrong and as well as the way I had formatted the code was incorrect. After correcting these errors I was able to have a functioning display of temperature.


## Usage 

For usages I found that all of the websites I have listed at the top of the page to be extremely helpful. For this assignment I also found that stack overflow has a lot of helpful solutions to certain problems, I had a lot of questions about how to get a certain function or how to write a certain code and looking at the helpful responses was super helpful.


## Learning Points 

This assignment for me was a little challenging at times but overrall I was able to really work through it and find the solutions I was struggling with.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
