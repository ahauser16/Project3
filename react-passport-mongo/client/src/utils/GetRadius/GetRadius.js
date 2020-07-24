import { myEnvVars } from '../../env';

function getDateString() {
    let d = new Date();
    return d.toISOString();
}

export default function GetRadius(position1) {
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
        'Accept:': 'application/json',
        'X-Application-Id': myEnvVars.TRAVELTIMEAPPID,
        'X-Api-Key': myEnvVars.TRAVELTIMEAPIKEY
    };
    //=============================================
    const data = {
        "departure_searches": [
            {
                "id": "walking to work",
                "coords": {
                    "lat": position1.lat,
                    "lng": position1.lng
                },
                "transportation": {
                    "type": "walking"
                },
                "travel_time": 900,
                "departure_time": getDateString()
                
            }
        ]
        // "arrival_searches": [
        //     {
        //         "id": "walking home",
        //         "coords": {
        //             "lat": position.lat,
        //             "lng": position.lng
        //         },
        //         "transportation": {
        //             "type": "walking"
        //         },
        //         "arrival_time": getDateString(),
        //         "travel_time": 900,
        //         "range": {
        //             "enabled": false,
        //             "width": 3600
        //         }
        //     }
        // ]
    };
    //================================================
    // async function fetchData(url, data, params) {
    //     const response = await axios.post(url, data, params);
    //     console.log(response.data.results)
    //     return response.data.results
    // }


    return fetch("https://api.traveltimeapp.com/v4/time-map", {
        method: "POST",
        headers: headers2,
        body: JSON.stringify(data)
    })

}
