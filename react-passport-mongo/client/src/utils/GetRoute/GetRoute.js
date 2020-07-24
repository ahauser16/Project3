import { myEnvVars } from '../../env';

let jsondata;

function getDateString() {
    let d = new Date();
    return d.toISOString();
}

export default function GetRoute(position1, position2) {
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
        "Host": "api.traveltimeapp.com",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Application-Id": myEnvVars.TRAVELTIMEAPPID,
        "X-Api-Key": myEnvVars.TRAVELTIMEAPIKEY
    };

    const data = {
        "locations": [
            {
                "id": "current position",
                "coords": {
                    "lat": position1.lat,
                    "lng": position1.lng
                }
            },
            {
                "id": "next position",
                "coords": {
                    "lat": position2.lat,
                    "lng": position2.lng
                }
            }
        ],
        "departure_searches": [{
            "id": "exampleSearchA",
            "departure_location_id": "current position",
            "arrival_location_ids": [
                "next position"
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
    })
}
