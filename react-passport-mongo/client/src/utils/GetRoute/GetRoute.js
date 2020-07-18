import { myEnvVars } from '../../env';

//exports the TTR api response.

function getDateString() {
    let d = new Date();
    return d.toISOString();
}

export default function GetRoute(position) {
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
                    "lat": 40.706669,
                    "lng": -74.009528
                }
            }
        ],
        "departure_searches": [{
            "id": "exampleSearchA",
            "departure_location_id": "home",
            "arrival_location_ids": [
                "away"
            ],
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
        ]
    };

    return fetch("https://api.traveltimeapp.com/v4/routes", {
        method: "POST",
        headers: headers2,
        body: JSON.stringify(data)
    }).catch(console.error)
        .then(response => response.json())
        .then(data => console.log(data));
}
