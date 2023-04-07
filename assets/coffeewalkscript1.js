var startAddress = document.getElementById('staddrinput');
var submitAddressBtn = document.getElementById('submitmain');
var respage = document.getElementById("resultspage");
var searchPage = document.getElementById('searchpage');
var finpage = document.getElementById('finpage');
var cardslist = document.getElementById("resultscards");
var butnumtemp;
var addresses;
var shopnames;
var coords;
var startCoords;

respage.setAttribute("style", "display: none;");
finpage.setAttribute("style", "display: none;");





function enter() {
  var encodedAddress = encodeURIComponent(startAddress.value);
  var enterfunurl = "http://dev.virtualearth.net/REST/v1/Locations/US/" + encodedAddress + "?&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-";
  
  fetch(enterfunurl)
    .then((response) => response.json())
    .then((data) => {
        
      startCoords = data.resourceSets[0].resources[0].point.coordinates.toString();
      getshops(startCoords);
    });
};

function getshops(latlon) {

  var urladdin = latlon;

  fetch("http://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=" + urladdin + "&maxResults=9&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
    .then((response) => response.json())
    .then((data) => {
      addresses = [];
      shopnames = [];
      coords = [];
      // var latty = [];
      var numofshops = data.resourceSets[0].resources.length;


      for (var i = 0; i < numofshops; i++) {
        addresses.push(data.resourceSets[0].resources[i].Address.formattedAddress)
        coords.push(data.resourceSets[0].resources[i].point.coordinates)
        shopnames.push(data.resourceSets[0].resources[i].name)


        var tempcon = document.createElement("div");
        tempcon.setAttribute("class", "container columns m-2");


        var tempsec = document.createElement("section");
        tempsec.setAttribute("class", "card has-text-centered column m-2");
        tempsec.setAttribute("data-butnum", i);
        tempsec.setAttribute("onclick", "findbutnum(this)");

        tempcon.appendChild(tempsec);

        var temph2 = (document.createElement("h2"));
        var tempp = document.createElement("p");
        temph2.innerHTML = shopnames[i];
        tempp.innerHTML = addresses[i];
        tempsec.appendChild(temph2);
        tempsec.appendChild(tempp);
        respage.appendChild(tempsec);
        cardslist.appendChild(tempsec);
      }

      


      searchtores();


      
    });
}



function searchtores() {
  searchPage.setAttribute("style", "display: none;");
  respage.removeAttribute("style", "display: none;");
  startAddress.innerHTML = "";
}

function restofin() {
  respage.setAttribute("style", "display: none;");
  finpage.removeAttribute("style", "display: none;");
  cardslist.innerHTML = "";
}


function findbutnum(rescard) {
  butnumtemp = rescard.getAttribute("data-butnum");
  var tempcostr = coords[butnumtemp].toString();
  var templatt = coords[butnumtemp][0];
  var templonn = coords[butnumtemp][1];
  setinfocard(addresses[butnumtemp], shopnames[butnumtemp]);
  getWeather(templatt, templonn);
  restofin();
  getMap(tempcostr, startCoords)
}


function setinfocard(add, shname) {
  document.getElementById("shopnamefin").textContent = shname;
  document.getElementById("shopaddfin").textContent = add;
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
      var iconCode = data.weather[0].icon;
      var iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;


      document.getElementById("location").textContent = `${location}`;
      document.getElementById("temperature").textContent = `${temperature}°F`;

      var descriptionElement = document.getElementById("description");
      descriptionElement.textContent = `${description}`;
      
      var iconElement = document.createElement("img");
      iconElement.src = iconUrl;
      descriptionElement.appendChild(iconElement);
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


function getMap(shopco, startco) {    
    fetch("https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/Walking?waypoint.1="+ startco +"&waypoint.2="+ shopco+"&pushpin="+shopco+";59&maxSolutions=1&mapLayer=Basemap,buildings&format=jpeg&mapMetadata=0&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
    .then((response)=>response)
    .then((data)=> {
        console.log(data);
        var addMap = data.url;
        placeMap(addMap);
    })
}
function placeMap(addMap) {
    var mapCard = document.getElementById('mapcard');
    var mapImg = document.createElement('img');
    mapImg.src = addMap;
    mapCard.appendChild(mapImg);
    
}







