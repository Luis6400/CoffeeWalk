var staddr;
var mainbutton = document.getElementById("submitmain");
var straddrinput = document.getElementById("straddrinput");
var srchpage = document.getElementById("searchpage");
var respage = document.getElementById("resultspage");



var cardslist = document.getElementById("resultscards");

for(var i = 0; i < numofshops; i++) {

var tempsec = document.createElement("section");
var temph2 = (document.createElement("h2"));
var tempp = document.createElement("p");
temph2.innerHTML = shopname[i];
tempp.innerHTML = shopaddr[i];
tempsec.appendChild(temph2);
tempsec.appendChild(tempp);
respage.appendChild(tempsec);

cardslist.appendChild(tempsec);
}

function getlonlat() {
    // var stadtemp = straddrinput.value;
    // staddr = stradtemp.replace(/ /g, "%20");
    staddr = "84128";
    var apiurl = "http://dev.virtualearth.net/REST/v1/Locations/US/" + staddr + "?key=AgKBUuvbUwAsq1kz4VZEkPlVJZtYaLivsDp-uZ0w2DRIwUfOH-mQH5HFqPA0rpXe";
    mainbutton.classList.add("is-loading");
    fetch(apiurl, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            
            var lat = data.resourceSets[0].resources[0].point.coordinates[0];
            var lon = data.resourceSets[0].resources[0].point.coordinates[1];
            console.log(lat);
            console.log(lon);

            mainbutton.classList.remove("is-loading");
            

        });

};



