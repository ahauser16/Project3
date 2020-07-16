import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { myEnvVars } from '../../env';


//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
//The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.




function getDateString() {
    let d = new Date();
    return d.toISOString();
}

export default function TravelTimeRadiusCall() {

    const [posts, setPosts] = useState([]);

    const myTimeRadius = {
        "departure_searches": [
            {
                "id": "from home",
                "coords": {
                    "lat": 40.6487128,
                    "lng": -73.9673123
                },
                "transportation": {
                    "type": "walking"
                },
                "travel_time": 900
            }
        ],
        "arrival_searches": [
            {
                "id": "to destination",
                "coords": {
                    "lat": 40.6502422,
                    "lng": -73.9660536
                },
                "transportation": {
                    "type": "walking"
                },
                "arrival_time": getDateString(),
                "travel_time": 900,
                "range": {
                    "enabled": true,
                    "width": 3600
                }
            }
        ]
    };

    async function fetchData(url, data, params) {
        const response = await axios.post(url, data, params);
        console.log(response.data.results)
        return response.data.results
    }


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
        //============================================================================
        // const travelData = fetchData(url, myTimeRadius, params);
        // // console.log(myTimeRadius)
        // travelData.then((res) => {
        //     // console.log(res);
        //     setPosts((posts) => {
        //         return [...posts, ...res]
        //     })
        // })
        //===========================================================================
        // commented out above to avoid unnecessary api calls

    }, [])

    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    )
}
