import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import 'react-leaflet-fullscreen/dist/styles.css';
import GetRoute from '../../utils/GetRoute/GetRoute'


// import FullscreenControl from 'react-leaflet-fullscreen';
// import iconUrl from './public/logo192.png';
// import L from 'leaflet';

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
        var myRoute = GetRoute(e.latlng).then(res => res.json()).then(res => console.log(res))
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