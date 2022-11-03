
// Create the street view tile layer that will be default background for our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'light-v10',
    accessToken: API_KEY
});

// Create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'dark-v10',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
};

// Create the map object with a center on Toronto, zoom level and default layer.
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/" + GitHub_name + "/Mapping_Earthquakes/main/torontoRoutes.json";

// Access the GeoJSON data 
d3.json(torontoData).then(function (data) {
    console.log(data);
    L.geoJSON(data).addTo(map);
}
);

