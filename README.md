


# **Table of Contents**
1.  [**About the site**](#about-the-site)
    * [**Link to live website**](#link-to-live-website-is-here)
    * [**Link to GitHub repository**](#link-to-github-repo-is-here)
1.  [**UX Design - the Five Plans method**](#uxd)
    * [**1.Strategy plan**](#stratetgy)
        * [Planning Stage](#planning-stage)
        * [User Stories](#user-stories)
        * [Site Objectives](#site-objectives)
        * [Design Goals](#design-goals)
    * [**2.Scope plan**](#scope)
    * [**3.Structure plan**](#structure)
    * [**5.Skeleton plan**](#skeleton)
        *  [**Wireframes (wireframes.md)**](readme-files/docs/wireframes.md)
    <!-- * [**6. Surface plan**](#surface)
        * [**UI (User Interface)**](#ui-user-interface)
            *  [**Site structure**](#site-structure)
            *  [**Responsiveness**](#responsiveness)
            *  [**Layout**](#layout)
                * [Header](#header)
                * [Main content](#main-content-section)
                    * [Home page](#home-page)
                    * [Menu page](#menu-page)
                    * [Gallery page](#gallery-page)
                    * [Contact page](#contact-page)
                * [Maps](#maps)
                * [Footer area](#footer)
            *  [**Typography**](#fonts)
            *  [**Colour theme**](#colours)
            *  [**Contrast ratio (contrast.md)**](readme-files/docs/contrast.md)
            *  [**Accessibility**](#accessibility)
<!--1.  [**Testing (testing.md)**](readme-files/docs/testing.md)
1.  [**Performance**](#performance)
1.  [**Issues**](#issues)
1.  [**Deployment (deployment.md)**](readme-files/docs/deployment.md)
1.  [**CREDITS:**](#credits)
    *  [**Code Snipets:**](#code-snipets)
    *  [**Research and Information:**](#research-and-information)
    *  [**Media**](#media)
    *  [**Other Resources:**](#other-resources-and-tools-used)
1. [**Aknowledgment**](#aknowledgment) -->


---
### Live site on [GitHub Pages (custom domain)](http://phloreenm.me/MP2-JS--CI-CoBC-FM/) or [GitHub Pages 'https'](https://phloreenm.github.io/MP2-JS--CI-CoBC-FM//MP2-JS--CI-CoBC-FM/)
### Link to this GitHub repository [here](https://github.com/phloreenm/MP2-JS--CI-CoBC-FM)  

---
- **User needs**
    - **User Stories**
        -  A first-time visitor, or a **prospective visitor** (|| turist), may have the following user stories:

            | As a                  | I want to...          | So that I can...       | 
            |-----------------------|-----------------------|------------------------|
            | **Prospective Visitor**|                       |                        |
            |                       | find more details about local ancient history | visit some POI | 
            |                       | learn how far the site is located | plan a trip | 
            |                       | learn how I can get to the sites | travel there | 


        - As a **website owner** the users stories are related to the purpose of the website itself:

            | As a              | I want to...          | So that I can...  |
            |-------------------|-----------------------|-------------------|
            | **Website Owner**|                       |                   |       
            |                   | promote local archaeological sites | develop local turism  |            
            |                   | provide various information | raise the visitors interest to stay on the page  |            
            |                   | come up with photos, maps | inform in more detail about the archaeological sites |            
            <!-- |                   | provide an organized browsing experience | raise the visitors interest  |             -->
       

---


**Maps**
- The displayed map uses a custom icon ("temple_ruins.png"), hosted locally.

**ISSUES**
- During development in the DevTools -> Console window I had multiple  errors as follows:
  ```
    DevTools failed to load source map: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
    DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/config.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
    DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
    DevTools failed to load source map: Could not load content for chrome-extension://gannpgaobkkhmpomoijebaigcapoeebl/bundle.min.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
  ```
  These have been solved following the steps described on [StackOverflow forum](https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr), and the cause looked to be "(...) Chrome added support for source maps." Solved by making the right settings in the DevTools->Settings->Preferences->Sources.
- Another error
---
**CREDITS**
- Research and Information Credits
  - [Callatis, the ancient city on the Black Sea coast](https://www.rri.ro/en_gb/callatis_the_ancient_city_on_the_black_sea_coast-2529250 )
  - [Callatis - Ancient Village or Settlement in Romania](https://www.megalithic.co.uk/article.php?sid=37857)
  - [Tomis – the ancient metropolis](https://atlastracer.wordpress.com/articles/tomis-the-ancient-metropolis/)
  - [Ancient City Tomis](https://imperiumromanum.pl/en/article/ancient-city-tomis/)
  - =========================================
- Code Snippets,  APIs and tutorials:
  - [Google Maps JavaScript API Cookbook Kindle Edition](https://www.amazon.co.uk/Google-Maps-JavaScript-API-Cookbook-ebook/dp/B00HJR6RD6)
  - [Maps JavaScript API](AIzaSyANGGOhK4itFoIlNp1F5Du-0ySik3HTbk4)
  - [Custom Markers](https://developers.google.com/maps/documentation/javascript/custom-markers#maps_custom_markers-javascript)
  - [Google Earth/Maps Icons](https://kml4earth.appspot.com/icons.html)
  - [Monuments & Structures map markers](https://mapicons.mapsmarker.com/category/markers/tourism/monuments-structures/)
  - [Street View API](https://developers.google.com/maps/documentation/javascript/streetview)
  - [Adding a Google Map with a Marker to Your Website](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript)
  - [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-javascript)
  - [google-maps-js-api-v3-simple-multiple-marker-example](https://www.anycodings.com/1questions/3879/google-maps-js-api-v3-simple-multiple-marker-example)
  - [Maps page vertical tabs code source](https://www.w3schools.com/howto/howto_js_vertical_tabs.asp)
  - [Maps page horizontal tabs code source](https://www.w3schools.com/howto/howto_js_tabs.asp)
  - [Wikipedia API search base code](https://femkreations.com/how-to-build-a-wikipedia-search-app-in-9-steps/)
  - [Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
  - [CSS Variables](https://www.w3.org/TR/css-variables/#values)
  - =========================================
- Media credits
  - [Google Maps Icons Credits: Matthias Stasiak](https://mapicons.mapsmarker.com/author/matthias.stasiak/)
  - [Greek Column SVG Vector & PNG](https://www.svgrepo.com/svg/160058/greek-column)
  - [Ancient Columns SVG Vector & PNG](https://www.pngrepo.com/svg/321726/ancient-columns)
  - [Greek Vase SVG Vector & PNG](https://www.svgrepo.com/svg/104220/greek-vase)
  - [Loading animation file](https://icons8.com/preloaders/en/search/loading)

