import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { myEnvVars } from '../../env';

//THIS COMPONENT MAKES THE POST REQUEST TO TRAVELTIME API AND EXPECTS DIRECTIONS, DISTANCE TRAVELED, TIME TRAVELED AND COORDS FROM START TO FINISH INCLUDING ANY CHANGE IN DIRECTION IN BETWEEN.

function getDateString() {
    let d = new Date();
    return d.toISOString();
}

export default function TravelTimeRadiusCall() {
    
    const [posts, setPosts] = useState([]);

    const myTravelData = {
        "locations": [
            {
                "id": "home",
                "coords": {
                    //ISSUE: cannot properly reference geolocation.  How would you reference lat&lng here as the values in Map.js-lines 21&22                    
                    "lat": departureLatLng.lat,
                    "lng": departureLatLng.lng
                }
            },
        ],
        "departure_searches": [{
            "id": "WhereWoof",
            "departure_location_id": "home",
            "arrival_location_ids": [],
            "transportation": { "type": "walking" },
            "departure_time": getDateString(),
            "properties": ["travel_time", "distance", "route"]
        }]
    };

    arrivalLatLngs.forEach((point, index) => {
        let id = "arrival" + index;
        data.locations.push({
            "id": id,
            "coords": {
                "lat": point.lat,
                "lng": point.lng
            }
        });
        data.departure_searches[0].arrival_location_ids.push(id);
    });

    async function fetchData(url, data, params) {
        const response = await axios.post(url, data, params);
        console.log(response.data.results)
        return response.data.results
    }

    //DRAWROUTE FUNCTION WOULD RUN AT THIS POINT

    useEffect(() => {
        let url = 'https://api.traveltimeapp.com/v4/time-map'
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Application-Id': myEnvVars.TRAVELTIMEAPPID,
                'X-Api-Key': myEnvVars.TRAVELTIMEAPIKEY
            }
        }

        // commented out below to avoid unnecessary api calls

        // const travelData = fetchData(url, myTravelData, params);
        // console.log(travelData)
        // travelData.then((res) => {
        //     console.log(res);
        //     setPosts((posts) => {
        //         return [...posts, ...res]
        //     })
        // })

        // commented out above to avoid unnecessary api calls

    }, [])




    return (
        <div>
            {/* { JSON.stringify(posts)} */}
        </div>
    )
}
