import React, { useState, useEffect } from 'react';
// import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import 'react-leaflet-fullscreen/dist/styles.css';
import { Renderer } from 'leaflet';

//RouteArray() is supposed to (a) take the user's geolocation (starting position) and add it to an otherwise empty array and (b) when there is an onclick event on the map a marker drops and those coordinates get added to the RouteArray

export default function RouteArray(props) {

    const [route, setRoute] = useState([])

    //this useEffect is a copy of the geolocation code in Map.js.
    //D.R.Y. how can you get this value

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            //update the state to the location of the user
            updateRoute({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []
    )

    const addCoords = () => {
        updateRoute([...route, {
            id: route.length,
            value: { position }
        }]);
    }

    // render()  {
        return (
            <div>

{/* Step 2 - add the user's starting position to an empty array.
INCOMPLETE */}

{/* Step 4 - provide an onclick event for the map that adds a marker to the location and adds those coords to the array of routes.  On the first onclick the user should have two sets of coords in the routeArray.
INCOMPLETE  */}
                
           {
           route.map(coords => (
               <li key={coords.id}>{coords.value}</li>
           ))} 

            </div>
        )
    }
// }