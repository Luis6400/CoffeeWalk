function getWeather(lat, lon) {
    var apiKey = "258095a35d3cd5a903f9827a326f5e5b";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var location = data.name;
        var temperature = data.main.temp;
        var description = data.weather[0].description;

        document.getElementById("location").textContent = `Location: ${location}`;
        document.getElementById("temperature").textContent = `Temperature: ${temperature}°F`;
        document.getElementById("description").textContent = `Description: ${description}`;
      })
      .catch(error => {
        console.error("Can't find your weather!", error);
      });
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        getWeather(lat, lon);
      }, error => {
        console.error("Cant retrive yuor location!", error);
      });
    } else {
      console.error("Can't retrive your location!");
    }
  }

  getLocation();


  