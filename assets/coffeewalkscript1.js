var startAddress = document.getElementById('staddrinput');
var submitAddressBtn = document.getElementById('submitmain');
var respage = document.getElementById("resultspage");
var searchPage = document.getElementById('searchpage');
var butnumtemp;
var addresses;
var shopnames;
var coords;

function enter() {
    console.log(encodeURIComponent(startAddress.value));
    var encodedAddress = encodeURIComponent(startAddress.value);
    console.log(encodedAddress);
    fetch("http://dev.virtualearth.net/REST/v1/Locations/US/" + encodedAddress + "?&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var addressPoint3 = data.resourceSets[0].resources[0].point.coordinates.toString();
            console.log(addressPoint3);
            getshops(addressPoint3);
        });
};

function getshops(latlon) {

    var urladdin = latlon;

    fetch("http://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=" + urladdin + ",5000&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addresses = [];
            shopnames = [];
            coords = [];
            // var latty = [];
            var cardslist = document.getElementById("resultscards");
            var numofshops = data.resourceSets[0].resources.length;
            

            for (var i = 0; i < numofshops; i++) {
                addresses.push(data.resourceSets[0].resources[i].Address.formattedAddress)
                coords.push(data.resourceSets[0].resources[i].point.coordinates)
                shopnames.push(data.resourceSets[0].resources[i].name)


                var tempsec = document.createElement("section");
                tempsec.setAttribute("data-butnum", i);
                tempsec.setAttribute("onclick", "findbutnum(this)");
                var temph2 = (document.createElement("h2"));
                var tempp = document.createElement("p");
                temph2.innerHTML = shopnames[i];
                tempp.innerHTML = addresses[i];
                tempsec.appendChild(temph2);
                tempsec.appendChild(tempp);
                respage.appendChild(tempsec);
                cardslist.appendChild(tempsec);
            }

            console.log(coords);
            console.log(coords[1].toString());
            
            console.log(addresses)
            console.log(shopnames)



            getRoute();
        });
    }
    


function findbutnum(rescard) {
    butnumtemp = rescard.getAttribute("data-butnum");
    var templatt = coords[butnumtemp][0];
    var templon = coords[butnumtemp][1];
    setinfocard(addresses[butnumtemp], shopnames[butnumtemp]);
    getWeather(templatt, templon);  


}

function setinfocard(add, shname) {
    document.getElementById("shopnamefin").textContent = shname;
    document.getElementById("shopaddfin").textContent = add;
}

function getRoute() {    
fetch("https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/Walking?waypoint.1=40.530622,-111.910037&waypoint.2=40.58739471,-111.93572998&pushpin=40.58739471,-111.93572998;59&maxSolutions=1&mapLayer=Basemap,buildings&format=jpeg&mapMetadata=0&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
    .then((response)=>response);
}


// seperation cassandra up eleanor down

function getWeather(latweath, lonweath) {
    var apiKey = "258095a35d3cd5a903f9827a326f5e5b";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latweath}&lon=${lonweath}&appid=${apiKey}&units=imperial`;

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
        console.error("Cant retrive your location!", error);
      });
    } else {
      console.error("Can't retrive your location!");
    }
  }

  


  




   