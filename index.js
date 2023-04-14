// Default city
var userText = "Feni"

var url = `https://api.openweathermap.org/data/2.5/weather?q=${userText}&appid=8574c3e9bd8bc148b2516404e61e931a`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));

// Search cities
function connect() {
  var userText = document.getElementById("user-input").value;

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${userText}&appid=8574c3e9bd8bc148b2516404e61e931a`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

// Show weather data
function show(data) {
  var city_name = data["name"];
  var temp_k = data["main"]["temp"];
  var temp_c = (temp_k - 273.15).toFixed(2);
  var country = data["weather"]["icon"];
  var humidity = data["main"]["humidity"];
  var wind = data["wind"]["speed"];
  var feel_like_t = data["main"]["feels_like"];
  var feel_like = (feel_like_t - 273.15).toFixed(2)
  // var temp_min_k = data["main"]["temp_min"];
  // var temp_min = (temp_min_k - 273.15).toFixed(2)
  // var temp_max_k = data["main"]["temp_max"];
  // var temp_max = (temp_min_k - 273.15).toFixed(2)
  var pressure = data["main"]["pressure"];
  var deg = data["wind"]["deg"];

  var icone_array = ["01d","01n","02d","02n","03d","03n","04d","04n","09d","09n","10d","10n","11d","11n","13d","13n","50d","50n","1232n"];
  var iconecode

  for(var i = 0; i<icone_array.length; i++) {
    if(icone_array[i] == iconecode){

    }
  }

// show data in the html element
  document.getElementById("tamp").innerHTML = temp_c;
  document.getElementById("humi").innerHTML = humidity;
  document.getElementById("wind").innerHTML = wind;
  document.getElementById("city").innerHTML = country;
  document.getElementById("feel_like").innerHTML = feel_like;
  document.getElementById("pressure").innerHTML = pressure;
  document.getElementById("deg").innerHTML = deg;

}
