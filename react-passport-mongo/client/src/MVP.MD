//when we send __CONST__DATA to traveltimeroutes (TTR) then TTR then sends us a response object containing, among other info, the coords from the onclick(e).  However, the call below is actually sending us 2 arrays within 1 object.  
    //========================================================
    //locations can be defined for later use with only 2 parameters: id and coords.  
    //Note: documentation does say there is a limit to the number of locations 
    //========================================================
    //The first array is the result from the FACEWOOF1 departure_search where departure_location_id is set to HOME and arrival_location_ids is set to AWAY.
    //Searches are based on departure time e.g. "Leave departure location at no earlier than given time." This allows you to specify a single departure location and multiple arrival locations. You can define a maximum of 10 searches
    //=========================================================
    //The second array is the result from the FACEWOOF2 arrival search. 
    //Searches based on arrival time. Arrive at destination location at no later than given time. This allows you to specify a single arrival location and multiple departure locations. You can define a maximum of 10 searches.
    //======================================================
    /*Range search parameters. By default range search is disabled. When range search is enabled multiple alternative result properties are returned and properties are sorted by travel_time in ascending order.
    //=======================================================
    Note: range search only works with public_transport, coach, bus, train and driving+train transportation modes. For other modes range search parameters are ignored */
    //==========================================================
    //Currently the mvp allows a user to find starting location on the map (geolocation+1 call to OSM) then onclick(e) to drop a marker and send those coordinates to the TravelTimeRoutes API (1 call to 'TTR'), RouteArray.JS and DB.  So currently for every onclick(e) there is a TTR call.  

    //In order to allow the user to plot a custom path from A->B->C->D the user drops a marker one after the other and immediately after each marker-drop its coords are sent to TTR in a POST request.  So for A->B and each marker drop afterward TTR sends coords between A->B (B->C) (etc.) for a total of 2 TTR api calls. In each TTR response there are coords between A->B (each within an object TTR refers to as a "PART" and each PART is inside an array of PARTS) that can be L.polyline'd into a path on the leaflet map), along with directions, distance, travel time and other data.  

    //Example of A->B->C->D sequence step-by-step:
    //
    //Starting from A (User approves geolocation+saved to RouteArray&&DB) the User drops marker B (onclick#1+saved to RouteArray&&DB).
    //
    // Then from B (ref from RouteArray||DB) User drops marker C (onclick#2+RouteArray&&DB).
    //
    // Then from C (ref from RouteArray||DB) User drops marker D (third onclick+RouteArray&&DB).
//
    //So in total: [A->B] + [B->C] + [C->D] requires 3 TTR API calls (+ 1 geolcation request approval).