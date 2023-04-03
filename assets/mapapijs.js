// data="";
// var startAddress = encodeURIComponent(document.getElementById('userAddressInput').value);
var startAddress = document.getElementById('userAddressInput');
startAddress.addEventListener('submit', enter);
// var addressPoint = [];
function enter() {
    console.log(encodeURIComponent(startAddress.value));
    var encodedAddress = encodeURIComponent(startAddress.value);
    console.log(encodedAddress);
    fetch("http://dev.virtualearth.net/REST/v1/Locations/US/encodedAddress?&maxResults=5&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        var addressPoint = data.resourceSets[0].resources[0];
        var addressPoint2 = addressPoint.point.coordinates;
        console.log(addressPoint2);
        // addressPoint = addressPoint2;
    });
};


console.log("hello");
fetch("http://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=&maxResults=15&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
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
    
    console.log("hi");
    
});


// fetch("http://spatial.virtualearth.net/REST/v1/data/accessId/dataSourceName/entityTypeName?spatialFilter=nearby(addressString,distance)&queryoption1&queryoption2&queryoptionN&jsonp=jsonCallBackFunction&jsonso=jsonState&isStaging=isStaging&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });    