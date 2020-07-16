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
    const data = {
        "locations": [
            {
                "id": "home",
                "coords": {
                    "lat": position.lat,
                    "lng": position.lng
                }
            }
        ],
        "departure_searches": [{
            "id": "facewoof",
            "departure_location_id": "home",
            "arrival_location_ids": [],
            "transportation": { "type": "walking" },
            "departure_time": getDateString(),
            "properties": ["travel_time", "distance", "route"]
        }]
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
    console.log(data);

    return fetch("https://api.traveltimeapp.com/v4/routes", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    }).catch(console.error);
}

// let properties = serverJson.results[0].locations[0].properties[0],

