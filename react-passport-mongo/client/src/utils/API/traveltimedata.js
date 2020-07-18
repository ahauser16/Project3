// export function getRoute(departureLatLng, arrivalLatLng) {
//     const apiKey = "60cf6646c39e45a0de83a59baa00a57d";
//     const appid = "dfc45614";
//     const headers = new Headers({
//         "Host": "api.traveltimeapp.com",
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "X-Application-Id": appid,
//         "X-Api-Key": apiKey
//     });
//     const data = {
//         "locations": [
//             {
//                 "id": "departure",
//                 "coords": {
//                     "lat": departureLatLng.lat,
//                     "lng": departureLatLng.lng
//                 }
//             },
//             {
//                 "id": "arrival",
//                 "coords": {
//                     "lat": arrivalLatLng.lat,
//                     "lng": arrivalLatLng.lng
//                 }
//             }
//         ],
   
//         "departure_searches": [{
//             "id": "facewoof",
//             "departure_location_id": "departure",
//             "arrival_location_ids": [
//                 "arrival"
//             ],
//             "transportation": { "type": "walking" },
//             "departure_time": getDateString(),
//             "properties": ["travel_time", "distance", "route"]
//         }]
//     };
//     // fetch("https://api.traveltimeapp.com/v4/routes", {
//     //     method: "POST",
//     //     headers: headers,
//     //     body: JSON.stringify(data)
//     // }).then(res => res.json()).then(drawRoute).catch(console.error);
// }





// export function drawRoute(serverJson) {
//     let properties = serverJson.results[0].locations[0].properties[0],
//         travelTime = properties.travel_time,
//         distance = properties.distance,
//         arrivalTime = properties.route.arrival_time,
//         departureTime = properties.route.departure_time,
//         instructionsArray = properties.route.parts.map(route => route.directions),
//         distanceArray = properties.route.parts.map(route => route.distance),
//         travelTimeArray = properties.route.parts.map(route => route.travel_time),
//         directionArray = properties.route.parts.map(route => route.direction),



//         routeArray = properties.route.parts.map(route => route.coords).flat().map(routeObj => Object.values(routeObj)),

//         polyline = L.polyline(routeArray, { color: "red" }).addTo(map);
//     map.fitBounds(polyline.getBounds());

// //                theMarker =L.marker(routeArray[routeArray.length - 1]).addTo(map)


//     L.marker(routeArray[routeArray.length - 1]).addTo(map)
//         .bindPopup(`Travel Time: ${travelTime}<br>Distance: ${distance}`)
//         .openPopup();
//     var routeArray2 = properties.route.parts.reduce((acc, currentValue) => {
//         // console.log('acc', acc)
//         var cleanArr = currentValue.coords.map(({ lat, lng }) => [lat, lng])
//         return [...acc, ...cleanArr]
//     }, [])

// }

// export function getDateString() {
//     let d = new Date();
//     return d.toISOString();
// }