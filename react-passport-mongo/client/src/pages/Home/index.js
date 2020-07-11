import React from "react"
import {} from "react"
import style from "./style.module.css"
import L from 'leaflet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

export default ( props ) => {
    



    
    return (
        <div>
        {
        // document.addEventListener("DOMContentLoaded", () => 
        function () {
            /*************************************************************/

            var deviceCoords;

            navigator.geolocation.getCurrentPosition(leafletInit);

            function leafletInit(location) {
                let coords = [location.coords.latitude, location.coords.longitude];
                deviceCoords = {
                    lat: coords[0],
                    lng: coords[1]
                };
<Map useFlyto='false' />

                map = Map("map")
                    .setView(coords, 20);

                //======================================================
                TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"

                        //https://leafletjs.com/reference-1.6.0.html#tilelayer-l-tilelayer

                    }
                ).addTo(map);
                //========================================================================

                var shepardIcon = L.icon({
                    iconUrl: 'icons/Favorites (2)/german-shepherd-50.png',
                    shadowUrl: 'leaf-shadow.png',

                    iconSize: [50, 50], // size of the icon
                    shadowSize: [50, 64], // size of the shadow
                    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
                });

                var shepard = Marker(coords,
                    {
                        // icon: shepardIcon,
                        title: 'BigDog',
                        opacity: 1.0,
                   
                        draggable: true,
           
                    }
                ).addTo(map)

                    .bindPopup("You are here.")
                    .openPopup();

                //==============================================================
                //Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function.

                map.on("click", handleMapClick);
            }

            function handleMapClick(e) {
                // if (theMarker != undefined) {
                //     theMarker.remove();
                //     console.log("marker");
                // };


                getRoute(deviceCoords, e.latlng);
            }
            //----

            function getRoute(departureLatLng, arrivalLatLng) {
                const apiKey = "60cf6646c39e45a0de83a59baa00a57d";
                const appid = "dfc45614";
                const headers = new Headers({
                    "Host": "api.traveltimeapp.com",
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Application-Id": appid,
                    "X-Api-Key": apiKey
                });
                const data = {
                    "locations": [
                        {
                            "id": "departure",
                            "coords": {
                                "lat": departureLatLng.lat,
                                "lng": departureLatLng.lng
                            }
                        },
                        {
                            "id": "arrival",
                            "coords": {
                                "lat": arrivalLatLng.lat,
                                "lng": arrivalLatLng.lng
                            }
                        }
                    ],

                    "departure_searches": [{
                        "id": "facewoof",
                        "departure_location_id": "departure",
                        "arrival_location_ids": [
                            "arrival"
                        ],
                        "transportation": { "type": "walking" },
                        "departure_time": getDateString(),
                        "properties": ["travel_time", "distance", "route"]
                    }]
                };
                fetch("https://api.traveltimeapp.com/v4/routes", {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data),
                }).then(res => res.json()).then(drawRoute).catch(console.error);
            }

            function drawRoute(serverJson) {
                console.log(serverJson);
                let properties = serverJson.results[0].locations[0].properties[0],
                    travelTime = properties.travel_time,
                    distance = properties.distance,
                    arrivalTime = properties.route.arrival_time,
                    departureTime = properties.route.departure_time,
                    instructionsArray = properties.route.parts.map(route => route.directions),
                    distanceArray = properties.route.parts.map(route => route.distance),
                    travelTimeArray = properties.route.parts.map(route => route.travel_time),
                    directionArray = properties.route.parts.map(route => route.direction),
                  
                    routeArray = properties.route.parts.map(route => route.coords).flat().map(routeObj => Object.values(routeObj)),

                    polyline = L.polyline(routeArray, { color: "red" }).addTo(map);
                map.fitBounds(polyline.getBounds());

                theMarker = L.marker(routeArray[routeArray.length - 1]).addTo(map)

                L.marker(routeArray[routeArray.length - 1]).addTo(map)
                    .bindPopup(`Travel Time: ${travelTime}<br>Distance: ${distance}`)
                    .openPopup();
            }

            function getDateString() {
                let d = new Date();
                return d.toISOString();
            }
        
        }
        // )
        
    }

    <div id="map"></div>

        {/* // <>
        // <div className={`spin ${style.container}`} >
        //     Home
        // </div>
        // <div className={style.user}>
        //     <h5>user:</h5>
        //     { Object.keys(props.user) */}
        {/* //         .map( (field, i) => 
        //             <p key={i}> <strong>{field}</strong>: {props.user[field]}</p>) 
        //     }
        // </div> */}
        
        {/* // </> */}
        
        </div>


    )
}

