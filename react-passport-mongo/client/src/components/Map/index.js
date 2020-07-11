import React from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import iconUrl from '../../logo.svg'
import L from 'leaflet'
export const icon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [25, 25]
})

export default function Map(props) {


    return (

        <LeafletMap center={props.position} zoom={props.zoom} style={{ height: "500px" }} onClick={e => console.log(e)}>
            <TileLayer
                attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position} icon={icon}>
                <Popup>
                    Test
                </Popup>
            </Marker>
        </LeafletMap>

    )

}