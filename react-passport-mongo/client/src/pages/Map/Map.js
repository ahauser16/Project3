import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import 'react-leaflet-fullscreen/dist/styles.css';
// import FullscreenControl from 'react-leaflet-fullscreen';
// import iconUrl from './public/logo192.png';
import L from 'leaflet';

export default function Map(props) {

    //Step1-retrieve user coords and update user's position on map
    //COMPLETE
    const [position, setPosition] = useState({ lat: .1, lng: -.1 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            //update the state to the location of the user
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []
    )

    return (
        //step3-load the map, tilelayer and setview
        //COMPLETE 
        <LeafletMap viewport={{}} center={position} zoom={15} style={{ height: "500px" }} onClick={e => console.log(e)}
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