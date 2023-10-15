// Initialize the search history array
let searchHistory = [];

// Function to make an API request to OpenWeatherMap
function getWeatherData(city) {
  const apiKey = "3189cd4ec46063aea4b7457f96dfc938";
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const queryUrl = `${apiUrl}?q=${city}&appid=${apiKey}`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process the data and update the UI
      displayWeatherData(data);
      updateSearchHistory(city);
    })
    .catch((error) => {
      console.error("An error occurred while fetching weather data:", error);
    });
}

// Function to update the UI with weather data, including the 5-day forecast
function displayWeatherData(data) {
  // Clear previous data
  clearSubContainers();

  // Display current weather data
  const cityName = data.city.name;
  const temperature = (data.list[0].main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
  const humidity = data.list[0].main.humidity;

  const currentWeather = document.querySelector(".subContainer3");
  currentWeather.innerHTML = `<p>City: ${cityName}</p><p>Temperature: ${temperature}°C</p><p>Humidity: ${humidity}%</p>`;

  // Display 5-day forecast
  const forecast = data.list.slice(1, 6); // Get the next 5 entries for the forecast

  for (let i = 0; i < forecast.length; i++) {
    const subContainer = document.querySelector(`.subContainer${i + 4}`);
    const date = new Date(forecast[i].dt * 1000); // Convert timestamp to date
    const forecastTemp = (forecast[i].main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
    const humidity = forecast[i].main.humidity;

    subContainer.innerHTML = `<p>Date: ${date.toDateString()}</p><p>Temperature: ${forecastTemp}°C</p><p>Humidity: ${humidity}%</p>`;
  }
}

// Function to clear previous data in subContainers
function clearSubContainers() {
  for (let i = 3; i <= 8; i++) { // Change the upper limit to 8
    const subContainer = document.querySelector(`.subContainer${i}`);
    subContainer.innerHTML = "";
  }
}

// Function to update the search history
function updateSearchHistory(city) {
  // Add the city to the search history
  searchHistory.push(city);
  
  // Save the search history to local storage as a JSON string
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  // Display the search history as interactive buttons in subContainer2
  const historyList = document.querySelector(".subContainer2");
  historyList.innerHTML = ""; // Clear the history list

  searchHistory.forEach((city) => {
    const listItem = document.createElement("button");
    listItem.textContent = city;
    listItem.addEventListener("click", function () {
      getWeatherData(city);
    });
    historyList.appendChild(listItem);
  });
}

// Load the search history from local storage on page load
if (localStorage.getItem("searchHistory")) {
  searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
  // Update the displayed history
  const historyList = document.querySelector(".subContainer2");
  historyList.innerHTML = "";
  searchHistory.forEach((city) => {
    const listItem = document.createElement("button");
    listItem.textContent = city;
    listItem.addEventListener("click", function () {
      getWeatherData(city);
    });
    historyList.appendChild(listItem);
  });
}

// Function to reset the search history and update the UI
function resetSearchHistory() {
  // Clear the search history
  searchHistory = [];
  
  // Remove the search history from local storage
  localStorage.removeItem("searchHistory");

  // Clear the history list in subContainer2
  const historyList = document.querySelector(".subContainer2");
  historyList.innerHTML = "";

  // Clear the weather data as well
  clearSubContainers();
}

// Add an event listener for the reset history button
const resetHistoryButton = document.getElementById("resetHistory");
resetHistoryButton.addEventListener("click", resetSearchHistory);

// Add an event listener for the search button
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", function () {
  const inputField = document.querySelector("input");
  const cityName = inputField.value;

  if (cityName) {
    // Call the function to get weather data for the entered city
    getWeatherData(cityName);

    // Clear the input field
    inputField.value = "";
  }
});
