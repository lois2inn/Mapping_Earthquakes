
// Create the street view tile layer that will be default background for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'streets-v11',
    accessToken: API_KEY
});

// Create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with a center on Toronto, zoom level and default layer.
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/" + GitHub_name + "/Mapping_Earthquakes/main/torontoNeighborhoods.json";

let hoodStyle = {
    weight: 1,
    color: "blue",
    fillColor: "yellow"
}

// Access the GeoJSON data 
d3.json(torontoHoods).then(function (data) {
    console.log(data);
    console.log("printed data");
    L.geoJSON(data, {
        style: hoodStyle,
        onEachFeature: function (feature, layer) {
            console.log("feature.properties");
            layer.bindPopup("<h3>" + feature.properties.AREA_NAME + "</h3>");
        }
    }).addTo(map);
}
);

