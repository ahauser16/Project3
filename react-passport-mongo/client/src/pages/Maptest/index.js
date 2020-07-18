import React from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import iconUrl from '../../logo.svg'
import L from 'leaflet'

export const icon= new L.Icon({
    iconUrl:iconUrl, 
    iconSize:[25,25]
})

export default function Map(props) {


    return (

        <LeafletMap center={props.position} zoom={props.zoom} style={{ height: "500px" }} onClick={e => console.log(e)}>
            <TileLayer
                attribution="http://osm.org/copyright"
                url={`https://tile.openstreetmap.org/${props.zoom}/${props.lat}/${props.lng}.png`}
            />
            <Marker position={props.position} 
            icon={icon}
            >
                <Popup>Test</Popup>
            </Marker>
        </LeafletMap>

    )

}