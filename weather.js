function connect() {
  var userText = document.getElementById("user-input").value;
  var userText = "Feni"

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${userText}&appid=8574c3e9bd8bc148b2516404e61e931a`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  var city_name = data["name"];
  var temp_k = data["main"]["temp"];
  var temo_l = temp_k - 273.15;
  var temp_c = temo_l.toFixed(2)
  var country = data["sys"]["country"];
  var humidity = data["main"]["humidity"];
  var wind = data["wind"]["speed"];
  var feel_like_t = data["main"]["feels_like"];
  var feel_like_k = feel_like_t - 273.15
  var feel_like = feel_like_k.toFixed(2)


  document.getElementById("tamp").innerHTML = temp_c;
  document.getElementById("humi").innerHTML = humidity;
  document.getElementById("wind").innerHTML = wind;
  document.getElementById("city").innerHTML = city_name;
  document.getElementById("feel_like").innerHTML = feel_like;

}
