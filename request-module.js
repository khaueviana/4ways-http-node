const request = require("request");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence&key=AIzaSyDx0u4oiaZACE2gQgIM3BxmA_4a1NVMrcQ";
request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(
        `City: ${json.results[0].formatted_address} -`,
        `Latitude: ${json.results[0].geometry.location.lat} -`,
        `Longitude: ${json.results[0].geometry.location.lng}`
    );
});