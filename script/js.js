let currentDateTime = new Date();

function formatDate(dateInput) {
  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = dateInput.getDate();
  let weekDay = weekDays[dateInput.getDay()];
  let month = months[dateInput.getMonth()];
  let hrs = dateInput.getHours();
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  let mins = dateInput.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  let formattedDate = `${weekDay}, ${date}. ${month}, ${hrs}:${mins}`;

  return formattedDate;
}

let elemementDateTime = document.querySelector(".dayHour");
elemementDateTime.innerHTML = formatDate(currentDateTime);

// Weather API

function displayWeatherCondition(response) {
  document.querySelector("#element-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(".humidity.value").innerHTML =
    response.data.main.humidity;
  document.querySelector(".wind.value").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "b091ac96e71b257b27da76ec8db7ca89";
  let city = document.querySelector("#input-city").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", search);
