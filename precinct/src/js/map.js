var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map-container"), {
        center: { lat: 40.7413549, lng: -73.9900244 },
        zoom: 13
    });
    var tribeca = { lat: 40.719526, lng: -74.0089934 };
    var marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: 'First Marker'
    });
    var infoWindow = new google.maps.InfoWindow({ content: "latitude is " + marker.position.lat() + " and longitude is " + marker.position.lng() });
    marker.addListener("click", function() {
        infoWindow.open(map, marker);
    });
}