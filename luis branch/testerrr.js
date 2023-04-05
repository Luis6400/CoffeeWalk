var staddr;
var mainbutton = document.getElementById("submitmain");
var straddrinput = document.getElementById("straddrinput");
var srchpage = document.getElementById("searchpage");
var respage = document.getElementById("resultspage");


respage.style.display = "none";


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
            srchpage.style.display = "none";
            respage.style.display = "block";


        });

};


