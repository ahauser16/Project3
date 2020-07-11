import React, { useState, useEffect } from 'react';
import { getDateString } from '../../utils/traveltimedata'

export default function TravelTimeRouteCall() {
    const [myRoute, setmyRoute] = useState({});

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

    const travelTimeRouteCall = (url) => {
        fetch((url), {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }).then(res => res.json()).then(drawRoute).catch(console.error);
    }

    useEffect(() => {
        let url = 'https://api.traveltimeapp.com/v4/routes';
        const theRoute = travelTimeRouteCall(url);
        console.log(theRoute);
        theRoute.then((data) => {
            console.log(data)
            setmyRoute((myRoute) => {
                return [...myRoute, ...data]
            })
        }).catch(() => {
            console.log("error has occurred");
        });
    }, [])

    return (
        <div>
            {JSON.stringify(myRoute)}
        </div>
    )
}
