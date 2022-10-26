function gMapsMap() {
    var locations = [
        ["Tomis", 44.171006, 28.661011, 1],
        ["Ancient Histria Citadel", 44.546676, 28.773069, 2],
        ["Calatis", 43.814692, 28.586530, 3],
    ];

    var map = new google.maps.Map(document.getElementById("map_1"), {
        zoom: 8,
        center: new google.maps.LatLng(44.19, 28.56),
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
function openCity(evnt, citadelName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(citadelName).style.display = "block";
    evnt.currentTarget.className += " active";
  } 
function openInfo(evnt, tabSubject) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="sub-tabcontent" and hide them
    tabcontent = document.getElementsByClassName("sub-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="sub-tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("sub-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabSubject).style.display = "block";
    evnt.currentTarget.className += " active";
  } 