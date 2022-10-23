


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
    * [**6. Surface plan**](#surface)
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
1.  [**Testing (testing.md)**](readme-files/docs/testing.md)
1.  [**Performance**](#performance)
1.  [**Issues**](#issues)
1.  [**Deployment (deployment.md)**](readme-files/docs/deployment.md)
1.  [**CREDITS:**](#credits)
    *  [**Code Snipets:**](#code-snipets)
    *  [**Research and Information:**](#research-and-information)
    *  [**Media**](#media)
    *  [**Other Resources:**](#other-resources-and-tools-used)
1. [**Aknowledgment**](#aknowledgment)


**Maps**
- The displayed map uses a custom icon ("temple_ruins.png"), hosted locally.

**Testing**
- Jest installing:
    - starting point json - with default values 
    ``` npm init -y ```
    - modify in json file to:
    ``` "test": "jest" ```
    - or to add coverage:
    ``` "test": "jest --coverage" ```
    - installing library (framework) testing into our enviroment:
    ``` npm i --save-dev jest ```
    - install [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom):
    ``` npm i jest-environment-jsdom ```
    - create testing file, following the naming rule:
    ``` fileName.test.js ```
    - run test/-s file/-s:
    ``` npm test ```
---
**CREDITS**
    - [Google Maps JavaScript API Cookbook Kindle Edition](https://www.amazon.co.uk/Google-Maps-JavaScript-API-Cookbook-ebook/dp/B00HJR6RD6)
    - [Maps JavaScript API](AIzaSyANGGOhK4itFoIlNp1F5Du-0ySik3HTbk4)
    - [Custom Markers](https://developers.google.com/maps/documentation/javascript/custom-markers#maps_custom_markers-javascript)
    - [Google Earth/Maps Icons](https://kml4earth.appspot.com/icons.html)
    - [Monuments & Structures map markers](https://mapicons.mapsmarker.com/category/markers/tourism/monuments-structures/)
    <!-- - [Host icons on Google Drive](https://mapicons.mapsmarker.com/faq/host-the-icons-on-google-drive/) -->
    - [Google Maps Icons Credits: Matthias Stasiak](https://mapicons.mapsmarker.com/author/matthias.stasiak/)
    <!-- - [My icons folder on my Google Drive](https://drive.google.com/drive/folders/1EQA5hQEVGGVN6HaBYut6yXVS8KlTC4ST?usp=sharing) -->
    - [Street View API](https://developers.google.com/maps/documentation/javascript/streetview)
    - Code Snippets
        - [Adding a Google Map with a Marker to Your Website](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript)
        - [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-javascript)
        - [google-maps-js-api-v3-simple-multiple-marker-example](https://www.anycodings.com/1questions/3879/google-maps-js-api-v3-simple-multiple-marker-example)
