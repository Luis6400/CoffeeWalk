function getMap() {    
    fetch("https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/Walking?waypoint.1=40.530622,-111.910037&waypoint.2=40.58739471,-111.93572998&pushpin=40.58739471,-111.93572998;59&maxSolutions=1&mapLayer=Basemap,buildings&format=jpeg&mapMetadata=0&key=AizrzYg48fADDG__bADnOBWOPofSFiBpuX2vBhjM6wV7JPPLXTj3il6kCztkuTo-")
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
