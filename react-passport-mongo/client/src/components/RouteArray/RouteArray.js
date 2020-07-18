import React, { useState, useEffect } from 'react';
// import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Renderer } from 'leaflet';

//RouteArray() is supposed to (a) take the user's geolocation (starting position) and add it to an otherwise empty array and (b) when there is an onclick event on the map a marker drops and those coordinates get added to the RouteArray.


export default function RouteArray(props) {

    const [route, setRoute] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setRoute({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []
    )
    //goal: we want to create a RouteArray when getCurrentPosition runs.
    //RouteArray = getCurrentPosition + 
    //the const addCoords is assigned to an IIFE that runs setRoute that updates route .
    const addCoords = () => {
        setRoute([...route, {
            id: route.length,
            value: { position }
        }]);
    }

    // render()  {
    return (
        <div>

            {
                route.map(coords => (
                    <li key={coords.id}>{coords.value}</li>
                ))}

        </div>
    )
}
// }