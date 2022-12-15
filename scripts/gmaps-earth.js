/*jshint esversion: 6 */
// SOURCE: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript
function gMapsMap() {
    // markers' infos and coordinates
    var locations = [
        ["Tomis", 44.171006, 28.661011, 1, '../citadels-maps.html'],
        ["Ancient Histria Citadel", 44.546676, 28.773069, 2, '../citadels-maps.html'],
        ["Calatis", 43.814692, 28.586530, 3, '../citadels-maps.html'],
    ];
    // overview map settings
    var dobrogea = new google.maps.LatLng(44.19, 28.56);
    var map = new google.maps.Map(document.getElementById("map_1"), {
        zoom: 8,
        center: dobrogea,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    //    Marker icon
    var citadelIcon = "../assets/images/temple_ruins.png";


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: citadelIcon,
        });
        // Listener - when marker is hovered it displays info window
        google.maps.event.addListener(
            marker,
            "mouseover",
            (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i)
        );
        // Listener - when marker is clicked, redirects to citadels-maps.html
        google.maps.event.addListener(
            marker,
            "click",
            (function(marker, i) {
                return function() {
                    window.location.href = locations[i][4];
                };
            })(marker, i)
        );
    }
}