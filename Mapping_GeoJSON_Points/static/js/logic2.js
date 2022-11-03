//Create a map object with geographical center as the geographical center of the Earth
let map = L.map('mapid').setView([30, 30], 2);

// Create the tile layer that will be the background of our map.
// Having tileLayer() before accessing large datasets ensures that the map gets loaded before the data is added.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
});
// Then we add our tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/" + GitHub_name + "/Mapping_Earthquakes/main/majorAirports.json";


// Access the GeoJSON data 
d3.json(airportData).then(function (data) {
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h3>Airport Code: " + feature.properties.faa + "</h3><hr><h3>Airport Name: " + feature.properties.name + "</h3>");
        }
    }
    ).addTo(map);
}
);




