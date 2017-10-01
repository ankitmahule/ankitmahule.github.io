/*
    @name map.js
    @description This file is used to initialize the map, create markers and display the information window
    on clicking the map
*/

var markers = [];
var map = {};
var LAT = 40.7413549;
var LNG = -73.9900244;
var ZOOM_LEVEL = 13;
var largeInfoWindow = {};

/*  @name initMap
    @param no parameters
    @description initialize the map
*/
function initMap() {
    var styles = [{ "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station", "elementType": "labels", "stylers": [{ "visibility": "off" }] }];
    //Create a fresh new map
    map = new google.maps.Map(document.getElementById("map-container"), {
        center: { lat: LAT, lng: LNG },
        zoom: ZOOM_LEVEL,
        styles: styles
    });
    largeInfoWindow = new google.maps.InfoWindow();
    //wait for getting locations from AJAX call
    setTimeout(function() {
        createMarkers(map, app.mapData);
    }, 4000);
};

/*  @name createMarkers
    @param map and locations
    @description to create markers on map
*/
function createMarkers(map, locations) {
    //delete the created markers
    deleteMarkers(markers);
    //loop through locations and create the markers
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        //add the markers to markers array
        markers.push(marker);
        //add click handler for displaying infoWindow
        marker.addListener('click', function() {
            var self = this;
            createInfoWindow(self);
            animateMarker(self);
        });
    }
};

/*  @name deleteMarkers
    @params markers
    @description This function deletes the markers
*/
function deleteMarkers() {
    //Loop through all the markers and remove
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
};

/*  @name animateMarker
    @params marker
    @description This function animates the marker
*/
function animateMarker(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() { marker.setAnimation(-1); }, 1500);
}

/*  @name createInfoWindow
    @param marker and locations
    @description to create information window on clicking the marker
*/
function createInfoWindow(marker) {
    // Check to make sure the infoWindow is not already opened on this marker.
    if (largeInfoWindow.marker != marker) {
        largeInfoWindow.marker = marker;
        largeInfoWindow.setContent('<div>' + marker.title + '</div>');
        largeInfoWindow.open(map, marker);
        // Make sure the marker property is cleared if the infoWindow is closed.
        largeInfoWindow.addListener('closeclick', function() {
            largeInfoWindow.marker = null;
        });
    }
};