
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
//coordinates: [long, lat]
let sanFranAirport =
{
    "type": "FeatureCollection", "features": [{
        "type": "Feature",
        "properties": {
            "id": "3469",
            "name": "San Francisco International Airport",
            "city": "San Francisco",
            "country": "United States",
            "faa": "SFO",
            "icao": "KSFO",
            "alt": "13",
            "tz-offset": "-8",
            "dst": "A",
            "tz": "America/Los_Angeles"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.375, 37.61899948120117]
        }
    }
    ]
};

//The below code uses GeoJSON with leaflet to show a marker on the lat/long.
// L.geoJSON(sanFranAirport).addTo(map);

// Use pointToLayer to show markers using data.
// L.geoJson(sanFranAirport, {
//     pointToLayer: function (feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city, feature.properties.country + "</h3>");
//     }
// }).addTo(map);

// Process data using onEachFeature
L.geoJSON(sanFranAirport, {
    onEachFeature: function (feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3><hr/><h3>" + feature.properties.name + "</h3>");
    }
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

