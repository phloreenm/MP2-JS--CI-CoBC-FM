// SOURCE: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript
function gMapsMap() {
    var locations = [
        ["Tomis", 44.171006, 28.661011, 1],
        ["Ancient Histria Citadel", 44.546676, 28.773069, 2],
        ["Calatis", 43.814692, 28.586530, 3],
    ];
    var dobrogea = new google.maps.LatLng(44.19, 28.56);
    var map = new google.maps.Map(document.getElementById("map_1"), {
        zoom: 8,
        center: dobrogea,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
   
    var citadelIcon = "../assets/images/temple_ruins.png";


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: citadelIcon,
        });

        google.maps.event.addListener(
            marker,
            "click",
            (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i)
        );
    }
}

// module.exports = { gMapsMap };