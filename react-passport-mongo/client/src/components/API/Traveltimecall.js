import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

// axios.post(url[, data[, config]])


const instance = axios.create({
    method:"post",
    baseURL: 'https://api.traveltimeapp.com',
    timeout: 1000,
    headers: {
        "Host": "api.traveltimeapp.com/v4/routes",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Application-Id": "dfc45614",
        "X-Api-Key": "60cf6646c39e45a0de83a59baa00a57d"
            }
});

const data = {
    "locations": [
        {
            "id": "departure",
            "coords": {
                "lat": 40.648725,
                "lng": -73.9672947
            }
        },
        {
            "id": "arrival",
            "coords": {
                "lat": 40.650072117576144,
                "lng": -73.96618366241456
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
}

axios.post("/v4/routes", data, instance).then(res => res.json()).then(drawRoute).catch(console.error);

