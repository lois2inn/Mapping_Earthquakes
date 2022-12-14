// Add console.log to check to see if our code is working.
console.log("working");

// Set the map to center on an Francisco
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [30.2026, -97.6681],
    [43.6532, -79.3832],
    [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: 4
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

