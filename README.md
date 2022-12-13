

![GitHub contributors](https://img.shields.io/github/contributors/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub last commit](https://img.shields.io/github/last-commit/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub language count](https://img.shields.io/github/languages/count/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub top language](https://img.shields.io/github/languages/top/phloreenm/MP2-JS--CI-CoBC-FM)

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
---

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---

### Live site on 
  - [GitHub Pages (custom domain)](http://phloreenm.me/MP2-JS--CI-CoBC-FM/) 
  - or [GitHub Pages 'https'](https://phloreenm.github.io/MP2-JS--CI-CoBC-FM//MP2-JS--CI-CoBC-FM/)
### Link to this GitHub repository [here](https://github.com/phloreenm/MP2-JS--CI-CoBC-FM)  
The structure of this documentatiois spread along more *.md files linked in this Readme.md Reading a large document becomes more difficult d.p. with the complexity, so sections as Wireframes, Contrast tn esting, Testing, Deployment have their own separate document. These are are all linked in following chapters.

---
**About the site**
- "Scythia Minor Greek Ancient Colonies" website focuses on promoting cultural heritage tourism of ones of the most famous archaeological sites on the western shores of the Black Sea. Today, these site are located on Romanian territory, in a region called Dobrudja (Dobrogea - the area lies between the Danube river on West and the Black Sea at East, part of historical Thrace). Dobruja boasts a rich history and many more site of archaeological significance, but I chose only three of them, as they have in common as being located close to the sea, so they were important port cities, but also economic centers.
# **UX (User Experience)**
## **UX Design**
The User Experience design was shaped using the theory of the Five Elements of UX.
# **Strategy**
- **Website objective**
  - **Planning Stage**
    - The purpose of this website is to make known some general information to a specific audience. More specifically, tourists travelling or planning to visit Dobrogea would be guided to visit three of the most prominent archaeological locations with connections to ancient Greek colonist.
    - **Site Objectives** 
      - Promote local historical heritage by presenting:
        -  short chronological information
        -  Wikipedia related links to articles
        -  Google Maps:
           - Street View about three archaeological site.
    - **Design Goals**
      - Responsive design on mobile, tablet or larger screen devices
      - Accessible design
      - Site structure to be intuitive and easy to navigate
      - Homogenous layout design across all the pages
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

---
# **Scope**
- Functional specifications:
    - A user should be able achieve its goals by visiting the site's sections.
    - An user may understand site's structure by accessing the navigation menu bar.
    - In case website page address is typed wrong, the server displays the 404 error in a dedicated page.
    - A follow-up status its sent email is displayed.
    - Pages are responsive on different devices from small to larger screens.
    - Website's layout and technologies used (Google MAPS API, EmailJS API) are functioning and are rendered well on most popular browsers.
- Content requirements:
    - The information provided to user needs are accomplished through:
        - Browsing Navigation Menu
        - Written text
        - Embedded Google Maps
        - Icons (from FontAwasome)
        - Internal links
        - External links to other sites or services:
            - Information sources
            - Wikipedia articles
    - Information guides the user to actual existing entities (archaeological site, pictures, maps).
    - Call To Action elements are present on the page, to guide the user to take action:
      - Select cities sub-page - SELECT CITY is highlighted and it disappears when a City's tab is selected.
      - Send Email - the user is guided to fill in the form and click the SEND button.
      - Footer: on a page with less content, to footer is only visible 10vh at the bottom. This way the user is aware that he might find further content to scroll down to the bottom of the page.
---
# **Structure**
- Information architecture:
    - 1. Elements available on all pages of the website:
        - Header and Footer:
          - have the same content on all pages.
          - offer quick access to different type of information or ease of the navigation.
    - 2. Features grouped by type of information provided:
- Design options:  
    - HOW:
        - Landing page presents a brief introduction to the website's subject and the content.
        - Cities page contains tabs with information (static and dynamically fetched) for each of the three cities:
          - Chronicle (static page) - a brief chronological information about the city
          - Wikipedia articles (dynamically displayed) - fetched links to Wikipedia articles about the city
          - Maps (dynamically displayed) - embedded Google Maps with Street View for each city
        - Contact page - the user may send an enquiry using the email form.
    - WHERE:
        - **Structure and flow (user journey) map**
       
    <p align="center">The flow of an user visiting the website is represented in the following diagram:<br>
        <img src="readme-files/readme-images/flow.jpg" alt="User's journey" width="90%">
    </p>
  
---
# **Skeleton**
The skeleton plane is represented by the wireframe sketches and they're are located in [wireframes.md](readme-files/docs/wireframes.md) file.

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---
# **Surface**
# **UI (User Interface)**

## **Site structure**
- The site map is represented by the following pages list:
  - [Home](index.html)
  - [Cities](citadels-maps.html)
  - [Contact](contact.html)
  - [404](404.html)
  - [Form Confirmation](formconfirmation.html)
- Site's structure is reflected by the navigation menu bar, which is available on every page. 
  - The navigation menu bar is located on the top of the page, below the logo and the title of the site and it contains the following links:
    - Home - landing page
    - Cities - page with tabs and sub-tabs for each city
    - Contact - page with a form to send an email
- Just before the footer section, when there is more content in main section, there is a "Back to top" button, which is available on every page. It's purpose is to ease the navigation to the top of the page.
- The footer section also repeats on all pages. It's composed of:
  - Social media links
  - Fair usage policy
  - Call to action button:
    - Disclaimer button:
      - Website Disclaimer
      - External Links Disclaimer
  - Copyright Notice with a link to the GitHub repository of this project.


<p align="center">The following diagram represents this structure<br>
    <img src="readme-files/readme-images/site-structure-diagram-upd.jpg" alt="Site's structure" width="90%">
</p>

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>
==============================================================================================================

- Call To Action:
  - When to MAIN element's content would not fill an entire page, the FOOTER would be displayed only 10vh at the bottom of the page, to drive  the user to scroll down to the bottom.
  - Cities page doesn't load the tabs' content, unless the user clicks any of the three Cities' tabs. There is a highlighted message to guide the user to select any City's tab. Only then the sub-tabs' content is being displayed (the Chronicle sub-tabs' content) or loaded dynamically (Wikipedia searching API and Google Maps embedded maps).
- Color theme used:
  - [Color theme generated at coolors.co](https://coolors.co/242331-0075c4-efa00b-fbfefb-c33c54)
  - Colors:
    - Main colors used:
      - Dominant Color: #242331 / rgb(36, 35, 49)
      - Complimentary Color: #0075C4 / rgb(0, 117, 196)
      - Accent color & Active Links: #EFA00B / rgb(239, 160, 11)
      - Text color: #FBFEFB /  rgb(251, 254, 251)
      - Link hover color: #C33C54 / rgb(245, 102, 128)
    - Derivates from main color:
      - Articles background color: rgb(9, 125, 219)
      - Articles darker background color: rgb(36, 35, 49)
      - Other hues and combinations of the main colors.
      - Inset box-shadows using the accent color
- Fonts:
  - Type: serif:
    - Main paragraphs and header title font: "GFS Didot"
    - Headings and Sub-headings font: "Merriweather"
  - Sizing: the header and some headings use an adaptive font style, depending of the width of the screen.
    - Default font-size and font-weight: from 15px to 18px / 400 font-weight.
    - Header size and weight: from 18px to 36px / 700 font-weight.
    - Navigation links: 16px to 20px, default weight.
    - Paragraphs: used "small", "medium" font-sizes
    - To attain some hover effect, or active buttons, the selected elements would change the font size from 0.9rems to 1rem or more.
---



**Maps**
- The displayed map uses a custom icon ("temple_ruins.png"), hosted locally.
**Features**
- Implemented:
  - APIs:
    - Google Maps Markers
    - EmailJS
    - Wikipedia article search and display
  - Embedded:
    - Google Fonts
    - FontAwesome
    - 
- To be implemented:
  - The APIs need an internet connection to work. If the connection is down, some APIs won't work. Unless you refresh the page, the page would not load the content. Therefore a script to check if `window.navigator.onLine` is `true` - which means the connection is up and the API will run correctly. Otherwise, if is `false`, there must be a way to retry the request few times more and if the connection is still down, an alert would ask the user to check the connection and retry to refresh the page.
  - Another page, named Gallery, to display images using the Google Places Photos API: when one of the cities' tab is presset, the backend will search on Google Places Details about the location, but only fetch a limited number of picture references returned in the Details object. Using those refrences and Google Photos
**ISSUES**
- Issues and errors 
  - Chrome added support for source maps:
    -   ```DevTools failed to load source map: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
        DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/config.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
        DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
        DevTools failed to load source map: Could not load content for chrome-extension://gannpgaobkkhmpomoijebaigcapoeebl/bundle.min.js.map: System error: net::ERR_BLOCKED_BY_CLIENT ```
    - Behaviour: During development in the DevTools -> Console window I had multiple  errors.
    - Solution: These have been solved following the steps described on [StackOverflow forum](https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr), and the cause looked to be "(...) Chrome added support for source maps." Solved by making the right settings in the DevTools->Settings->Preferences->Sources.
  - Using hard-coded API-KEYs from Google API 
    - Issue: couldn't find a solution to save environment variables to a file and use this file to store the variables everywhere (VSCode IDE, GitPod environment, GitHub & GitHub pages)
    - Solution: hard coded the API-KEYs and later create environment variables in each running environment separately. Not ideally, but is working on GitHub (An emerging issue is that if you deploy the site to Netlify, you must create environment variables again).
- Console warnings - These are warning which I couldn't solve yet, since my time is very limited. These are mainly caused by 3rd party APIs.
  - Non-passive event listener
    - ```[Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952```
    - Cause:
      - 'Passive event listeners are a new feature in the DOM spec that enable developers to opt-in to better scroll performance by eliminating the need for scrolling to block on touch and wheel event listeners. Developers can annotate touch and wheel listeners with {passive: true} to indicate that they will never invoke preventDefault. This feature shipped in Chrome 51, Firefox 49 and landed in WebKit.' [Source](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
      - Issue discussed [here](https://issuetracker.google.com/issues/63211698?pli=1). It looks Google Maps JavaScript API version 3 generates these warnings. Google Chrome is warning about violations that Google Maps JavaScript API generates [Source](https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive)
    - Solution:
      - the process to solve this issue is described [here](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md). Since the error come from the Google Maps JavaScript API 3, I couldn't find a way to solve this issue.
  - Device orientation events are blocked by permissions policy:
    - ``` The deviceorientation events are blocked by permissions policy. See https://github.com/w3c/webappsec-permissions-policy/blob/master/features.md#sensor-features ```
    - Cause 
    - Solution
  
---
**BUGS**
- navigating between the cities:
  - Behavior:
    - When navigating through the city tabs:
      - Select City: any of the three
      - The default sub-tab displayed is "Chronicle"
      - If you select any of the sub-tabs, then navigate to another city, the default content is not shown anymore and must select a sub-tab to display content for the selected City.
      - This bug renders no content inside the section.
  - Solution:
    - Added defaultInfo() function to simulate a click on the Chronicle Sub_tab button, so that each time a new city is selected, the content displayed is defaulted to the Chronicle page.
---
**CREDITS**
- Research, Information and Sources Credits
  - Histria
    - [Histria - Wikipedia](https://en.wikipedia.org/wiki/Histria_(ancient_city))
    - [Cetati din Dobrogea - Histria](https://sites.google.com/site/cetatidindobrogea/histria)
    - [Olkas Project - Histria](http://www.olkas.net/lemmata/24_Histria)
  - Tomis
    - [Tomis – the ancient metropolis](https://atlastracer.wordpress.com/articles/tomis-the-ancient-metropolis/)
    - [Ancient City Tomis](https://imperiumromanum.pl/en/article/ancient-city-tomis/)
    - [Cetati din Dobrogea - Tomis](https://sites.google.com/site/cetatidindobrogea/tomis)
    - [Constanta - Wikipedia](https://en.wikipedia.org/wiki/Constan%C8%9Ba)
    - [Olkas Project - Tomis](http://www.olkas.net/lemmata/8_Tomis)
  - Callatis
    - [Callatis, the ancient city on the Black Sea coast](https://www.rri.ro/en_gb/callatis_the_ancient_city_on_the_black_sea_coast-2529250 )
    - [Callatis - Ancient Village or Settlement in Romania](https://www.megalithic.co.uk/article.php?sid=37857)
    - [Cetati din Dobrogea - Callatis](https://sites.google.com/site/cetatidindobrogea/callatis)
    - [Callatis, the ancient city on the Black Sea coast](https://www.rri.ro/en_gb/callatis_the_ancient_city_on_the_black_sea_coast-2529250)
  - [Text correction and suggestion by Grammar Coach](https://www.grammarcoach.com)
  - [The Elements of User Experience, Second Edition: User-Centered Design for the Web and Beyond - Jesse James Garrett](https://learning.oreilly.com/library/view/the-elements-of/9780321688651/)
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
  - [Google Places API  - Place Photos](https://developers.google.com/maps/documentation/places/web-service/photos)
  - [How TO - Full Page Tabs](https://www.w3schools.com/howto/howto_js_full_page_tabs.asp)
  - [Wikipedia API search base code](https://femkreations.com/how-to-build-a-wikipedia-search-app-in-9-steps/)
  - [Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
  - [CSS Variables](https://www.w3.org/TR/css-variables/#values)
  - [EmailJS API](https://www.emailjs.com)
  - [Code Institute EmailJS implementation](https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js)
  - [Simple CSS Button Hover Effects](https://www.sliderrevolution.com/resources/css-button-hover-effects/)
  - [CodePen - Input Hints](https://codepen.io/sakara/pen/DqobXW)
  - [Material Design for Bootstrap - Navigation menu](https://mdbootstrap.com/)
  - [Footer Bootstrap Modal](https://www.w3schools.com/bootstrap4/bootstrap_modal.asp)
  - [Disclaimer content created using Termly's Disclaimer Generator](https://app.termly.io/dashboard/website/18551745-dea9-4e7d-998b-865844d9b2e6/disclaimer)
  - [README.md base template content structure](https://github.com/phloreenm/MP1-CultureCoffee-CI-CoBC-FM/tree/main#link-to-live-website-is-here)
  - =========================================
- Media credits
  - [Google Maps Icons Credits: Matthias Stasiak](https://mapicons.mapsmarker.com/author/matthias.stasiak/)
  - [Greek Column SVG Vector & PNG](https://www.svgrepo.com/svg/160058/greek-column)
  - [Ancient Columns SVG Vector & PNG](https://www.pngrepo.com/svg/321726/ancient-columns)
  - [Greek Vase SVG Vector & PNG](https://www.svgrepo.com/svg/104220/greek-vase)
  - [Loading animation file](https://icons8.com/preloaders/en/search/loading)
  - [Ancient Coinage of Kallatis, Thrace](https://www.wildwinds.com/coins/greece/thrace/kallatis/i.html)
  - [Ancient Coinage of Istros, Thrace](https://www.wildwinds.com/coins/greece/thrace/istros/i.html)
  - [Ancient Coinage of Tomis, Thrace ](https://www.wildwinds.com/coins/greece/thrace/tomis/i.html)
  - [Font Gelio](https://www.fontspace.com/gelio-font-f11521)

