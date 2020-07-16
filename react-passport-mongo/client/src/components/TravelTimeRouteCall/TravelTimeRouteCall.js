import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { myEnvVars } from '../../env';


function getDateString() {
    let d = new Date();
    return d.toISOString();
}


//THIS COMPONENT MAKES THE POST REQUEST TO TRAVELTIME API AND EXPECTS DIRECTIONS, DISTANCE TRAVELED, TIME TRAVELED AND COORDS FROM START TO FINISH INCLUDING ANY CHANGE IN DIRECTION IN BETWEEN.



//Step1 - retrieve user coords and update user's position on map
//COMPLETE

//Step 2 - add the user's starting position to an empty array.
//INCOMPLETE
//ISSUE: how do you manipulate arrays in jsx?  where/how should the routeArray be coded, structured, etc.

//Step 3 - make OSM and leaflet api call which loads the map, tilelayer and sets view on user location
//Complete

//Step 4 - provide an onclick event for the map that adds a marker to the location and adds those coords to the array of routes.  On the first onclick the user should have two sets of coords in the routeArray.
//INCOMPLETE 
//ISSUE: see issue 2.

//step 5 - send the routeArray to traveltime api as a post request and receive response with DATA containing coords.  Target the coords in Data for drawRoute().
//INCOMPLETE
//ISSUE: traveltime api call is functional but cannot proceed because of incomplete steps 2&4.  also, routeArray is hardcoded

//step 6 - use L.polyline method to drawroute on map 
//INCOMPLETE

export default function TravelTimeRouteCall(position) {
    


    const [posts, setPosts] = useState([]);

    const myTravelData = {
        "locations": [
            {
                "id": "home",
                "coords": {
                    //ISSUE: cannot properly reference geolocation.  How would you reference lat&lng here as the values in Map.js-lines 21&22                    
                    "lat": position.lat,
                    "lng": position.lng
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
//===================new code below===================
    // arrivalLatLngs.forEach((point, index) => {
    //     let id = "arrival" + index;
    //     data.locations.push({
    //         "id": id,
    //         "coords": {
    //             "lat": point.lat,
    //             "lng": point.lng
    //         }
    //     });
    //     data.departure_searches[0].arrival_location_ids.push(id);
    // });
//===================new code above======================
//Notes:
//make a) starting position state
//make b) current position state (a link list)
//=======================================================
//===================old code below======================


    async function fetchData(url, data, params) {
        const response = await axios.post(url, data, params);
        console.log(response.data.results)
        return response.data.results
    }

    //DRAWROUTE FUNCTION WOULD RUN AT THIS POINT

    useEffect(() => {
        let url = 'https://api.traveltimeapp.com/v4/routes'
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Application-Id': myEnvVars.TRAVELTIMEAPPID,
                'X-Api-Key': myEnvVars.TRAVELTIMEAPIKEY
            }
        }

        // commented out below to avoid unnecessary api calls

        const travelData = fetchData(url, myTravelData, params);
        console.log(travelData)
        travelData.then((res) => {
            console.log(res);
            setPosts((posts) => {
                return [...posts, ...res]
            })
        })

        // commented out above to avoid unnecessary api calls

    }, [])

    return (
        <div>
            { JSON.stringify(posts)}
        </div>
    )
}
