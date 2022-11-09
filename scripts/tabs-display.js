/* Base code sourced from: https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
and https://www.w3schools.com/howto/howto_js_tabs.asp
*/
// Function to display content with sub-tabs butons
function openCity(ev, citadelName) {
  // console.log("openCity function called");
    // Empty the HTML CTA section:
    document.getElementById("wiki_callToAction").innerHTML = "";

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
    ev.currentTarget.className += " active";
}

/* Function which is called when the user clicks the selected city tab/button
and sends a click event to the sub-tabs buttons, to default to info page
*/
function deafaultInfo(evt, citadel){
  // console.log("deafultInfo function called");
  document.getElementById("sub-tab-button-info-" + citadel).click();  
}
// function to display content when sub-tabs are clicked
function openInfo(evnt, tabSubject) {
  // console.log("openInfo function called");
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