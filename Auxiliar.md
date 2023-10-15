I need you to fix this code to have subContainer2 aside, left side, as a menu, and subContainer 3 to subContainer7 displayed flexbox side by side inline, separated each for a 10px gap 

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="./Assets/CSS/style.css">
</head>
<body>
    <header>
        <h1>Weather Dashboard</h1>
    </header>
    <main>
        <section class="mainContainer">
            <section class="subContainer1">
              <input type="text">
              <button>Search</button>
            </section>
            <section class="subContainer2">
                <aside>
                </aside>
            </section>
            <section class="subContainer3">
            </section>
            <section class="subContainer4">
            </section>
            <section class="subContainer5">
            </section>
            <section class="subContainer6">
            </section>
            <section class="subContainer7">
            </section>
        </section>
    </main>
    <script>
    </script>
</body>
</html>


Styles

* {
  background-color: #091f36;
  color: beige;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}
  h1 {
     text-align: center; 
     font-size: 50px;
  }

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

  li {
      float: right;
  }

  li a {
      display: block;
      color: beige;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 20px;
      margin: 10px;
      padding: 10px;
  }

  li a:hover {
      background-color: #111;
      cursor: pointer;
  }

.subContainer1 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer2 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

img {
  height: 100%;
  width: 100%;
}

.subContainer3 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer4 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer5 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer6 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer7 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}


_______________________________________________________________


Using the code I provided above, create the code for index.js to acomplish the following requirements:

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city


The Open Weather key is "3189cd4ec46063aea4b7457f96dfc938", and the API call is "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"



________________________________________________________________


Please add subContainer8 to the HTML and CSS files, and center the input field and the search button:

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="./Assets/CSS/style.css">
</head>
<body>
    <header>
        <h1>Weather Dashboard</h1>
    </header>
    <main>
        <section class="mainContainer">
            <section class="searchBar">
                <input type="text">
                <button>Search</button>
            </section>
            <section class="subContainer2">
                <aside>
                    <!-- Add menu items here -->
                </aside>
            </section>
            <section class="subContainers">
                <section class="subContainer3"></section>
                <section class="subContainer4"></section>
                <section class="subContainer5"></section>
                <section class="subContainer6"></section>
                <section class="subContainer7"></section>
            </section>
        </section>
    </main>
    <script src="./Assets/JS/script.js"></script>
</body>
</html>


CSS

* {
  background-color: #091f36;
  color: beige;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

h1 {
  text-align: center;
  font-size: 50px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

li a {
  display: block;
  color: beige;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
}

li a:hover {
  background-color: #111;
  cursor: pointer;
}

.subContainer1 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
}

.subContainer2 {
  padding: 30px;
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  /* Add styles for the menu here */
}

.subContainers {
  display: flex;
  margin: 30px;
}

.subContainer3, .subContainer4, .subContainer5, .subContainer6, .subContainer7 {
  padding: 30px;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  margin-right: 10px;
}

.subContainer3:last-child, .subContainer4:last-child, .subContainer5:last-child, .subContainer6:last-child, .subContainer7:last-child {
  margin-right: 0;
}

_________________________

Please add to the following code all the necessary to store the search history using json in local storage, and display the name of the cities consulted previosly in interactive buttons on subContainer2


// Define the API key and base URL for OpenWeatherMap API
const apiKey = "3189cd4ec46063aea4b7457f96dfc938";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

// Function to make an API request to OpenWeatherMap
function getWeatherData(city) {
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
  const temperature = data.list[0].main.temp;
  const humidity = data.list[0].main.humidity;

  const currentWeather = document.querySelector(".subContainer3");
  currentWeather.innerHTML = `<p>City: ${cityName}</p><p>Temperature: ${temperature}°C</p><p>Humidity: ${humidity}%</p>`;

  // Display 5-day forecast
  const forecast = data.list.slice(1, 6); // Get the next 5 entries for the forecast

  for (let i = 0; i < forecast.length; i++) {
    const subContainer = document.querySelector(`.subContainer${i + 4}`);
    const date = new Date(forecast[i].dt * 1000); // Convert timestamp to date
    const temperature = forecast[i].main.temp;
    const humidity = forecast[i].main.humidity;

    subContainer.innerHTML = `<p>Date: ${date.toDateString()}</p><p>Temperature: ${temperature}°C</p><p>Humidity: ${humidity}%</p>`;
  }
}

// Function to clear previous data in subContainers
function clearSubContainers() {
  for (let i = 3; i <= 7; i++) {
    const subContainer = document.querySelector(`.subContainer${i}`);
    subContainer.innerHTML = "";
  }
}

// Function to update the search history
function updateSearchHistory(city) {
  const historyList = document.querySelector(".search-history");
  const listItem = document.createElement("li");
  listItem.textContent = city;
  listItem.addEventListener("click", function () {
    getWeatherData(city);
  });
  historyList.appendChild(listItem);
}

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
