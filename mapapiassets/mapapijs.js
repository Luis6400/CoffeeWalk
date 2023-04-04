// data="";
// var startAddress = encodeURIComponent(document.getElementById('userAddressInput').value);
var startAddress = document.getElementById('userAddressInput');
startAddress.addEventListener('submit', enter);
// var addressPoint = [];
function enter() {
    console.log(encodeURIComponent(startAddress.value));
    var encodedAddress = encodeURIComponent(startAddress.value);
    console.log(encodedAddress);
    fetch("http://dev.virtualearth.net/REST/v1/Locations/US/" + encodedAddress + "?&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var addressPoint = data.resourceSets[0].resources[0].point.coordinates[0];
            var addressPoint2 = data.resourceSets[0].resources[0].point.coordinates[1];
            console.log(addressPoint2);
            console.log(addressPoint);
            getshops(addressPoint, addressPoint2);

            // addressPoint = addressPoint2;
        });
};





console.log("hello");

function getshops(latin, lonin) {

    var urladdin = latin + "," + lonin;

    fetch("http://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=" + urladdin + ",5000&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var addresses = [];
            var shopnames = [];
            var coords = [];
            var latty = [];
            var cardslist = document.getElementById("resultscards");
            var numofshops = data.resourceSets[0].resources.length;
            var respage = document.getElementById("resultspage");

            for (var i = 0; i < numofshops; i++) {
                addresses.push(data.resourceSets[0].resources[i].Address.formattedAddress)
                coords.push(data.resourceSets[0].resources[i].point.coordinates)
                shopnames.push(data.resourceSets[0].resources[i].name)
            }

            console.log(coords);
            console.log(addresses)
            console.log(shopnames)
            var tempsec = document.createElement("section");
            var temph2 = (document.createElement("h2"));
            var tempp = document.createElement("p");
            temph2.innerHTML = shopnames[i];
            tempp.innerHTML = addresses[i];
            tempsec.appendChild(temph2);
            tempsec.appendChild(tempp);
            respage.appendChild(tempsec);
            cardslist.appendChild(tempsec);

        });
}


// for(var i = 0; i < numofshops; i++) {
// var tempsec = document.createElement("section");
// var temph2 = (document.createElement("h2"));
// var tempp = document.createElement("p");
// temph2.innerHTML = shopname[i];
// tempp.innerHTML = shopaddr[i];
// tempsec.appendChild(temph2);
// tempsec.appendChild(tempp);
// respage.appendChild(tempsec);
// cardslist.appendChild(tempsec);
// }







// fetch("http://spatial.virtualearth.net/REST/v1/data/accessId/dataSourceName/entityTypeName?spatialFilter=nearby(addressString,distance)&queryoption1&queryoption2&queryoptionN&jsonp=jsonCallBackFunction&jsonso=jsonState&isStaging=isStaging&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });    