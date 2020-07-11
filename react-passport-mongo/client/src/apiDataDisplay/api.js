import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.traveltimeapp.com',

    headers: {
        // "Host": "api.traveltimeapp.com",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Application-Id": "dfc45614",
        "X-Api-Key": "60cf6646c39e45a0de83a59baa00a57d"
    }
});

export default {

    postData: () =>
        instance({
            'method': 'POST',
            'url': '/v4/routes',
            'data': {
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
            },
            'headers': {
                'content-type': 'application/json'
            }

        })
}