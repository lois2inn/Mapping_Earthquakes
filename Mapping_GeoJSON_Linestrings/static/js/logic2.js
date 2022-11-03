
// Create the day view tile layer
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'navigation-day-v1',
    accessToken: API_KEY
});

// Create the night view tile layer
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'navigation-night-v1',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    DayNavigation: day,
    NightNavigation: night
};

// Create the map object with a center on Toronto, zoom level and default layer.
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [night]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/" + GitHub_name + "/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}


// Access the GeoJSON data 
d3.json(torontoData).then(function (data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3>Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
}
);

