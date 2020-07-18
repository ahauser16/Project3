import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import GetRoute from '../../utils/GetRoute/GetRoute';
import GetRadius from '../../utils/GetRadius/GetRadius';



//shouldn't we import RouteArray into Map.js?  However, if we import RouteArray into App.js then props should waterfall down to Map.JS, correct?

export default function Map(props) {

    //Step1-retrieve user coords and update user's position on map
    //COMPLETE
    const [position, setPosition] = useState({ lat: .1, lng: -.1 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (currentPosition) {

            console.log("Latitude is :", currentPosition.coords.latitude);
            console.log("Longitude is :", currentPosition.coords.longitude);

            //update the state to the location of the user
            setPosition({
                lat: currentPosition.coords.latitude,
                lng: currentPosition.coords.longitude
            });
        });
    }, []
    )

    function handleClick(e) {
        //when there is any event (such as when a User clicks the screen) onClick's coords get passed through the GetRoute function that outputs the TTR response data which has the coords that get plotted using L.polyline.
        var myRoute = GetRoute(e.latlng);
        console.log(e.latlng);
        // var myRadius = GetRadius(e.latlng)


        // .then(res => res.json())
        // .then(res => console.log(res.results[0].locations[0].properties[0].route.parts.map(route => route.coords).flat().map(routeObj => Object.values(routeObj))))
        // .then(res => console.log(res))

        // let properties = serverJson.results[0].locations[0].properties[0],
    //     routeArray = properties.route.parts.map(route => route.coords).flat().map(routeObj => Object.values(routeObj));
    //     console.log(routeArray);
    //     polyline = L.polyline(routeArray, { color: "red" }).addTo(map);
    //   map.fitBounds(polyline.getBounds());
    //   L.marker(routeArray[routeArray.length - 1]).addTo(map)
    //     .bindPopup(`Travel Time: ${travelTime}<br>Distance: ${distance}`)
    //     .openPopup();
    
    }

    return (
        //step3-load the map, tilelayer and setview
        //COMPLETE 
        <LeafletMap viewport={{}} center={position} zoom={15} style={{ height: "500px" }} onClick={handleClick}
        >
            <TileLayer
                attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>Test</Popup>
            </Marker>

        </LeafletMap>
    
    )
}