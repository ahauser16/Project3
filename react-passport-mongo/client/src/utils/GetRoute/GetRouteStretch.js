import { myEnvVars } from '../../env';

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


    // ==========================================================
//So the user's entry point on the map is detected through the geolocation/getcurrentlocation method.  Then they can click on the map which plots a route and returns data containing the distance and travel time for that route and even the directions, distance&traveltime for each leg of the route.  They can then create a route from A to B, C, D, etc.  




//feature works when the user clicks on the map that plans a route to that location.  three elements: .  When the page loads the user's location is detected through geolocation.getcurrentlocation method.  After the page loads the user's current location is added to an otherwise empty array.

//When the user clicks on the map

    // So the user's entry point to the map is the user's current location.
    
    
    
    which allows the User to drop a create a route starting from the User's geolocation a/k/a "A"
    // -> (marker drop) B.  Immediately after the marker-B drop a POST request is sent to travelTimeRoutes with A & B's coordinates.  TTR sends response back with coordinates between A&B (TTR refers to each pair as PARTS) that can be plotted onto the map.  The response also contains directions, travel time, distance and a polyline on the map between markers A and B.  The coords from geolocation and TTR RESPONSE are added to RouteArray which will be passed into L.polyine() which will plot the route on the map.  The DATA from geolocation and TTR RESPONSE are saved to the DB.
    //
    //NOTE: the TTR RESPONSE has a lot of useable data that can be accessed to improve current features or create new feature.
    //
    // This A_>B feature was extended to allow the user to plot a custom path from A->B->C->D.  Now the User can drop a marker one after the other to create a route with more destinations.  Just like the A->B feature immediately after each marker-drop its coords are sent to TTR in a POST request.  

    //Example of A->B->C->D sequence step-by-step:
    //
    //Starting from A (User approves geolocation+saved to RouteArray&&DB) the User drops marker B (onclick#1+saved to RouteArray&&DB).
    //
    // Then from B (ref from RouteArray||DB) User drops marker C (onclick#2+RouteArray&&DB).
    //
    // Then from C (ref from RouteArray||DB) User drops marker D (third onclick+RouteArray&&DB).
    //
    //So in total: [A->B] + [B->C] + [C->D] requires 1 geolocation, 3 markers dropped by User and 3 TTR API calls (+ 3 RouteArray||DB).
    //==========================================================
    //See sample data that's sent in the TTR POST REQUEST BELOW:
    //============================================================
    //==========ANALYSIS OF SAMPLE TTR REQUEST BELOW============
    //========================================================
    //The first array refers to the id: FACEWOOF1 where departure_location_id is set to HOME and arrival_location_id is set to AWAY.
    //
    //departure_searches is based on departure time e.g. "Leave departure location at no earlier than given time." This allows you to specify a single departure location and multiple arrival locations. You can define a maximum of 10 searches.
    //=========================================================
    //The second array refers to the the id: FACEWOOF2 arrival search. 
    //
    //arrival_searches based on arrival time. Arrive at destination location at no later than given time. This allows you to specify a single arrival location and multiple departure locations. You can define a maximum of 10 searches.
    //======================================================
    /*Range search parameters. By default range search is disabled. When range search is enabled multiple alternative result properties are returned and properties are sorted by travel_time in ascending order.
    //=========================================================
    //*NOTE: Including arrival_searches parameters is not necessary to make a TTR route call.  However, it does allow for more data to be included in our POST request; you can define up to 10 departure_searches, 10 arrival_searches and define a ?[unlimited?] of locations. This would allow for a better API call system to be set up.  See "One Call for All" in Stretch Goals below.  Also, range search DOES NOT WORK WITH WALKING parameter but does work with public_transport, coach, bus, train and driving+train transportation modes. For other modes (like walking) range search parameters are ignored */
    //==========================================================

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
                "id": "location2",
                "coords": {
                    "lat": 40.649322,
                    "lng": -73.966768
                }
            },
            {
                "id": "location3",
                "coords": {
                    "lat": 40.651243,
                    "lng": -73.970392
                }
            },
            {
                "id": "location4",
                "coords": {
                    "lat": 40.646549,
                    "lng": -73.976894
                }
            },
            {
                "id": "location5",
                "coords": {
                    "lat": 40.642658,
                    "lng": -73.971678
                }
            },
            {
                "id": "location6",
                "coords": {
                    "lat": 40.645860,
                    "lng": -73.956167
                }
            },
            {
                "id": "location7",
                "coords": {
                    "lat": 40.656198,
                    "lng": -73.956924
                }
            },
            {
                "id": "location8",
                "coords": {
                    "lat": 40.668367,
                    "lng": -73.951945
                }
            },
            {
                "id": "location9",
                "coords": {
                    "lat": 40.680898,
                    "lng": -73.986093
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
        ],
        "departure_searches": [{
            "id": "exampleSearchB",
            "departure_location_id": "home",
            "arrival_location_ids": [
                "location3",
                "location4"
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
        ],
        "arrival_searches": [
            {
                "id": "exampleSearchB",
                "departure_location_ids": [
                    "location1"
                ],
                "arrival_location_id": "location10",
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
        ],

        //data.departure_searches[0].arrival_location_ids.push("home"); //always go home after
        // console.log(position.lat);
        //     console.log(position.lng);

        return fetch("https://api.traveltimeapp.com/v4/routes", {
            method: "POST",
            headers: headers2,
            body: JSON.stringify(data)
        }).catch(console.error);
    }

    //==============================================================
    //this is the end of the initial feature and the beginning of exploration of options to improve API call efficiency which will only focus on the DATA that is sent in the TTR POST request.
    //===========================================================



    //what is the max amount of data that can be sent to TTR?
    //below data has been expanded to the max # of departure_searches and arrival_searches.
