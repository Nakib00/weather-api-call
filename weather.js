function connect() {
  var userText = document.getElementById("user-input").value;

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${userText}&appid=8574c3e9bd8bc148b2516404e61e931a`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  var city_name = data["name"];
  var temp_k = data["main"]["temp"];
  var temo_c = temp_k - 273.15;
  var country = data["sys"]["country"];

  document.getElementById(
    "contaner"
  ).innerHTML = `<h1>Country" Name: ${country}</h1> <h1>City Name: ${city_name}</h1> <h1>Temp: ${temo_c} C</h1>`;
}
