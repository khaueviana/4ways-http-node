const fetch = require("node-fetch");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence&key=AIzaSyDx0u4oiaZACE2gQgIM3BxmA_4a1NVMrcQ";
fetch(url)
    .then(response => {
        response.json().then(json => {
            console.log(
                `City: ${json.results[0].formatted_address} -`,
                `Latitude: ${json.results[0].geometry.location.lat} -`,
                `Longitude: ${json.results[0].geometry.location.lng}`
            );
        });
    })
    .catch(error => {
        console.log(error);
    });