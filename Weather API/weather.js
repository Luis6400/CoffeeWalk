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


  for (var i=0; i < 5; i++){
  fetch(“http://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=” + urladdin + “&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-“)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
  var coffee1 = data.resourceSets[0].resources[0];
      console.log(coffee1.Address.formattedAddress);
  var coffee2 = data.resourceSets[0].resources[1];
      console.log(coffee2.Address.formattedAddress);
  var coffee3 = data.resourceSets[0].resources[2];
      console.log(coffee3.Address.formattedAddress);
  var coffee4 = data.resourceSets[0].resources[3];
      console.log(coffee4.Address.formattedAddress);
  var coffee5 = data.resourceSets[0].resources[4];
      console.log(coffee5.Address.formattedAddress);
  console.log(“hi”);
});
  }

     