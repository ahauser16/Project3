import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import GetRoute from '../../utils/GetRoute/GetRoute';
import L from 'react-leaflet';
import { Polyline } from 'react-leaflet';
// import GetRadius from '../../utils/GetRadius/GetRadius';

export default function Map(props) {

    const [position, setPosition] = useState({ lat: .1, lng: -.1 });

    const [position2, setPosition2] = useState({ lat: .1, lng: -.1 })

    const [polyline, setPolyline] = useState([])

    const [marker, setMarker] = useState([])

    const [active, setActive] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (currentPosition) {

            console.log("Latitude is :", currentPosition.coords.latitude);
            console.log("Longitude is :", currentPosition.coords.longitude);

            //update the state to the location of the user
            setPosition({
                lat: currentPosition.coords.latitude,
                lng: currentPosition.coords.longitude
            });
            setPosition2({
                lat: currentPosition.coords.latitude,
                lng: currentPosition.coords.longitude
            });
        });
    }, []
    )

    // var myRadius = GetRadius(position1);


    function handleRoutes(e) {
        var serverJson;

        

        var myRoute = GetRoute(position2, e.latlng)

            .then(response => response.json())
            .then(data => {

                let properties = data.results[0].locations[0].properties[0].route.parts;

                let routeArray = properties.map(route => route.coords).flat().map(routeObj => Object.values(routeObj));

                let lat = properties.slice(-1)[0].coords[1].lat;
                let lng = properties.slice(-1)[0].coords[1].lng;

                // console.log(properties);
                // console.log(properties.slice(-1)[0].coords[0].lat);
                // console.log(properties.slice(-1)[0].coords[0].lng);
                setPolyline([...polyline, routeArray]);
                setActive(true);
                setMarker([...marker, ...[[lat, lng]]])
            })
        setPosition2(
            e.latlng
        )
    
    
    }

    const listMarkers = marker.map((item) =>
        <Marker position={item}>
            <Popup>Starting Position</Popup>
        </Marker>
    )



    return (

        <LeafletMap
            viewport={{}}
            center={position}
            zoom={15}
            style={{ height: "500px" }}
            onClick={handleRoutes}
        >
            <TileLayer
                attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} >
                <Popup>Starting Position</Popup>
            </Marker>
            {listMarkers}

            {active ? <Polyline color="blue" positions={polyline} /> : null}
            {/* {active ? <Marker color="red" positions={markerArray} /> : null} */}

        </LeafletMap>
    )
}