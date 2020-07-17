import { myEnvVars } from '../../env';

function getDateString() {
    let d = new Date();
    return d.toISOString();
}



export default function GetRoute(position) { //departureLatLng is first element of routeArray, arrivalLatLngs is array of everything else
    const apiKey = myEnvVars.TRAVELTIMEAPPID;
    const appid = myEnvVars.TRAVELTIMEAPIKEY

    const headers = new Headers({
        "Host": "api.traveltimeapp.com",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Application-Id": appid,
        "X-Api-Key": apiKey

    });
    const headers2 = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Application-Id': myEnvVars.TRAVELTIMEAPPID,
        'X-Api-Key': myEnvVars.TRAVELTIMEAPIKEY
    };

    //todo: hold latlng values in db

    //when we send __CONST__DATA to traveltimeroutes (TTR) then TTR then sends us a response object containing, among other info, the coords from the onclick(e).  However, the call below is actually sending us 2 arrays within 1 object.  

    //The first array is the result from the FACEWOOF1 departure_search where departure_location_id is set to HOME and arrival_location_ids is set to AWAY.

    //The second array is the result from the FACEWOOF2 arrival search where the user can send arrival_time at destination location at lo later than arrival_time

    //===============================================
    /*Range search parameters. By default range search is disabled. When range search is enabled multiple alternative result properties are returned and properties are sorted by travel_time in ascending order.
    Note: range search only works with public_transport, coach, bus, train and driving+train transportation modes. For other modes range search parameters are ignored */
    //===========================================================



    //ISSUE: a handleClick(e) in Map.js is SUPPOSED to take the handleClick(e) coords and add them to an array   
    const data = {
        "locations": [
            {
                "id": "home",
                "coords": {
                    "lat": position.lat,
                    "lng": position.lng
                }
            },
            {
                "id": "away",
                "coords": {
                    "lat": 40.648725999999996,
                    "lng": -73.96727969999999
                }
            }
        ],
        "departure_searches": [{
            "id": "facewoof1",
            "departure_location_id": "home",
            "arrival_location_ids": ["away"],
            "transportation": {
                "type": "walking"
            },
            "departure_time": getDateString(),
            "properties": [
                "travel_time",
                "distance",
                "route"
            ]
        }
        ],
        "arrival_searches": [
            {
                "id": "facewoof2",
                "departure_location_ids": [
                    "away"
                ],
                "arrival_location_id": "home",
                "transportation": {
                    "type": "walking"
                },
                "arrival_time": getDateString(),
                "properties": [
                    "travel_time",
                    "distance",
                    "route"
                ],
                "range": {
                    "enabled": true,
                    "max_results": 1,
                    "width": 1800
                }
            }
        ]
    };

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

    //data.departure_searches[0].arrival_location_ids.push("home"); //always go home after
    console.log(position.lat);
    console.log(position.lng);

    return fetch("https://api.traveltimeapp.com/v4/routes", {
        method: "POST",
        headers: headers2,
        body: JSON.stringify(data)
    }).catch(console.error);
}

// let properties = serverJson.results[0].locations[0].properties[0],

