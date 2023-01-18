

![GitHub contributors](https://img.shields.io/github/contributors/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub last commit](https://img.shields.io/github/last-commit/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub language count](https://img.shields.io/github/languages/count/phloreenm/MP2-JS--CI-CoBC-FM)
![GitHub top language](https://img.shields.io/github/languages/top/phloreenm/MP2-JS--CI-CoBC-FM)

# **Table of Contents**
- [**Table of Contents**](#table-of-contents)
    - [Live site:](#live-site)
    - [Link to this GitHub repository here](#link-to-this-github-repository-here)
- [**UX (User Experience)**](#ux-user-experience)
  - [**UX Design**](#ux-design)
- [**Strategy**](#strategy)
- [**Scope**](#scope)
- [**Structure**](#structure)
- [**Skeleton**](#skeleton)
- [**Surface**](#surface)
- [**UI (User Interface)**](#ui-user-interface)
  - [**Site structure**](#site-structure)
  - [**Responsiveness**](#responsiveness)
  - [**Layout**](#layout)
    - [**HEADER**](#header)
    - [**MAIN CONTENT SECTION**](#main-content-section)
      - [**Home page**](#home-page)
      - [**Cities page**](#cities-page)
      - [**Contact page**](#contact-page)
      - [**Success page**](#success-page)
      - [**404 page**](#404-page)
    - [**FOOTER**](#footer)
  - [**Typography**](#typography)
  - [**Color theme**](#color-theme)
  - [**FEATURES**](#features)
  - [**ISSUES**](#issues)
  - [**BUGS**](#bugs)
  - [**CREDITS**](#credits)


---

### Live site: 
  - [Netlify free website hosting service](https://greekcitadels.netlify.app/) 
### Link to this GitHub repository [here](https://github.com/phloreenm/MP2-JS--CI-CoBC-FM)  
The structure of this documentatiois spread along more *.md files linked in this Readme.md Reading a large document becomes more difficult d.p. with the complexity, so sections as Wireframes, Contrast tn esting, Testing, Deployment have their own separate document. These are are all linked in following chapters.

---

**About the site**
- "Scythia Minor Greek Ancient Colonies" website focuses on promoting cultural heritage tourism of ones of the most famous archaeological sites on the western shores of the Black Sea. Today, these site are located on Romanian territory, in a region called Dobrudja (Dobrogea - the area lies between the Danube river on West and the Black Sea at East, part of historical Thrace). Dobruja boasts a rich history and many more site of archaeological significance, but I chose only three of them, as they have in common as being located close to the sea, and they were important port cities, but also economic centers.
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
            |                       | find local historical places | plan a visit | 
            |                       | read some Wikipedia articles related to these locations | learn  | 
            |                       | view local maps | see if visits are posible | 
            |                       | view local maps | see if visits are posible | 


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
  - Pages accessible through the navigational menu:
    - [Home](index.html)
    - [Cities](citadels-maps.html)
    - [Contact](contact.html)
  - Pages displayed only under certain conditions:
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
    - Disclaimer button - when clicked, it displays a modal containing the following disclaimers:
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

---
## **Responsiveness**
- The website is built to be responsive on different devices from small to larger screens.
  - To fit smaller screens, the minimum width of the layout is set to 300px. 
  - For larger screens the content is set to up to 976px width, using other breakpoints for intermediary widths.
- The header:
  - Contains: 
    - the logo, on the top - stays in the same location over all resolutions;
    - the title in the middle, bellow the logo - changes size depending on the screen's width;
    - the navigational menu - is fully displayed when screen's width is greater than 767px. When the screen width is less than 768px the navigational menu is collapsed into a hamburger menu. The hamburger menu is displayed on the top center of the page, below the title.
- The content section is displayed as a block between the header and the footer. It contains information related to the page's subject. Main's element width is set to 90% of the body's width, it's parent element.
- The footer is displayed on the bottom of the page.
  - It contains:
    - the social media links; 
    - the disclaimer button; 
    - the fair usage policy;
    - the copyright notice.
  - It's layout occupy horizontally the most of all others sections, when in desktop view, to limit the vertical space taken by its content.
- Website's responsiveness was tested across different devices and results are available in the [testing.md](./readme-files/testing.md) file.

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---
## **Layout**
The general layout of the website is composed of three main areas: [Header](#header), [Content](#main-content-section) and [Footer](#footer). 
The Header (containing the Logo and the Navigation Menu) and the Footer are common to all pages, but the Content area is different for each page.

### **HEADER** 
- contains the company's logo and, depending on the device's screen width, a menu navigation bar to the top right (on larger screens) or a hamburger menu button (which opens the hidden menu - in mobile view).

<p align="center">Header with logo, banner and navigation buttons in desktop view"<br>
    <img src="readme-files/readme-images/pages-view/06-d-nav.png" alt="Header with logo, banner and navigation buttons in desktop view" width="90%">
</p>
<p align="center">Mobile view - navigation closed and opened<br>
<img src="readme-files/readme-images/pages-view/06-m-nav-closed.png" alt="Mobile view - navigation opened" width="40%">
    <img src="readme-files/readme-images/pages-view/06-m-nav-opened.png" alt="Mobile view - navigation closed" width="40%">
</p>

---

### **MAIN CONTENT SECTION**
- The "main content" is the area between the header and the footer of the page and it contains the information specific to the page.
- There are:
  -  three accessible pages through the navigation menu:
     - Landing page - briefly about the site.
     - Cities page - offer information about each of the archaeological site/cities.
     - Contact page - to send an email.
   - two directly inaccessible pages:
     - Success page - displayed when an email has been successfully sent.
     - 404 page - displayed by the server when an inexistent resource is being accessed.

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---
#### **Home page**
- The home landing page briefly describes to the visitor the scope of of the website.
<p align="center"><strong>Mobile and desktop view</strong>:</p>
<p align="center">
    <img src="readme-files/readme-images/pages-view/00-m.png" alt="Left - Mobile view" height="600px">
    <img src="readme-files/readme-images/pages-view/00-d.png" alt="Bottom - Mobile view" width="66%">
</p>

- It contains:
  - An introductory story.
  - A SVG image, which shows the location in Europe of our area of interest: Dobrudja. On mouse hover over the vectorial image the Dobrudja area is being zoomed in, for a better view. This effect is obtained by using a JS script ([svg-zoom.js](/scripts/svg-zoom.js)).
  - Bellow that the focus goes to our three archaeological sites, Histria, Tomis and Callatis, with links to the Cities page.
  - At the bottom of the content section there is a Google Map containing the markers with the location of the three cities. The markers use customised icons, by over-riding the default Google Maps icons.
    - On click on each of the markers, the user is directed to the Cities page, where the information about the city is displayed.
    - The map is rendered by using the Google Maps API v3. The scripts to display custom markers is available in the [gmaps-earth.js](/scripts/gmaps-earth.js) file.
<p align="center">
    <img src="readme-files/readme-images/pages-view/markers-map.png" alt="Bottom - Mobile view" width="66%">
</p>


<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---
#### **Cities page**
- The cities page contains information about the three cities of interest: Histria, Tomis and Callatis. Here the visitor finds the main interest content of the website.
<p align="center">
    <img src="readme-files/readme-images/pages-view/02.0-m.png" alt="Bottom - Mobile view" height="700px">
    <img src="readme-files/readme-images/pages-view/02.1-d.png" alt="Bottom - Mobile view" height="700px" max-width="66%">
</p>

- At first rendering the page displays a call-to-action area, brightly colored, which invites the visitor to click one of the tabs bellow, which correspond to the three cities.
<p align="center"><strong>Call to Action element, in yellow color</strong>:</p>
<p align="center">
    <img src="readme-files/readme-images/pages-view/cta-select-city.png" alt="Call to action element" width="66%">
</p>
<p align="center"><strong>After the user clicks any of the cities button, the sub-tabs buttons are displayed too</strong>:</p>
<p align="center">
    <img src="readme-files/readme-images/pages-view/nav-tabs-subtabs.png" alt="Tabs and Subtabs buttons" width="66%">
</p>

- When a city is selected, by default the `Chronicle` sub-tab content is displayed. 
- The tabs and the sub-tabs buttons have hover effects applied to them, so that the user can see that they are clickable. Also all tabs have an active class attached to them dynamically, so that the user can see which tab is currently active. For the main tabs (the cities' tabs) the active class makes the buttons text all to uppercase and text grows and adds a bottom red line. For the sub-tabs the active class makes the buttons' text to grow and adds a bottom red line. These effects are obtained by using CSS and JS [script `tabs-display.js`](/scripts/tabs-display.js).
- When the user clicks on any of the three tabs, the call-to-action area is not displayed anymore and the content area  displays a new layout composed of three main tabs (the cities' tabs) and bellow those other three subtabs, which correspond to three categories of information about the city: 
  - <strong>Chronicle:</strong>
    - contains a brief history of the city. the information is served chronologically.
    - an image of a coinage of the city is displayed bellow the content's header.
    - at the very bottom some links to external resources are displayed. They also serve as sources of the information.
<p align="center">
    <img src="readme-files/readme-images/pages-view/02.1.1-m.png" alt="Chronicle - Mobile view" height="700px">
    <img src="readme-files/readme-images/pages-view/02.1.1-d.png" alt="Chronicle - Desktop view" max-width="66%">
</p>

  - <strong>Wikipedia:</strong>
  - 
    - When the user clicks the Wikipedia sub-tab, the content area is rendered. It contains fetched information from sending a request to Wikipedia API and reading the content of the response from the API. The information is grouped in seven links list; each have a header and a short preview of the article which the link takes to. On hover over the links there are effects applied to the links and the preview text, so that the user may know that the links are clickable.
    - The fetching is done at the first press of the Wikipedia sub-tab button. If the user leaves the page and comes back, the content is fetched again.
<p align="center">
    <img src="readme-files/readme-images/pages-view/02.2.1-m.png" alt="Wikipedia - Mobile view" height="700px">
    <img src="readme-files/readme-images/pages-view/02.2.1-d.png" alt="Wikipedia - Desktop view" height="700px" max-width="66%">
</p>

  - <strong>Maps:</strong>
    - This section contains embedded Google Aerial View and 360 maps of the selected city:
      - Satellite views of the archaeological site.
      - 360 view of the archaeological site or museums dedicated to each city.
<p align="center">
    <img src="readme-files/readme-images/pages-view/02.3.1-m.png" alt="Maps - Mobile view" height="700px">
    <img src="readme-files/readme-images/pages-view/02.3.1-d.png" alt="Maps - Desktop view" height="700px" max-width="66%">
</p>

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---

#### **Contact page**
- The Contact page contains a form which offers the user the possibility to send an email message to the site's owner. 
- The form uses EmailJS API to send the email. It uses a local script and the EmailJS API to send the email. The script is available in the [email-js.js](/scripts/email-js.js) file.
  
    <p align="center">Mobile preview<br>
        <img src="readme-files/readme-images/pages-view/03-m.png" alt="Cities page - Mobile preview" height="700px">
        <img src="readme-files/readme-images/pages-view/03-d.png" alt="Cities page - Desktop preview" height="700px" max-width="66%">
    </p>

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---

#### **Success page**
- The Success page 

    <p align="center">Mobile preview<br>
        <img src="readme-files/readme-images/pages-view/04-m.png" alt="Cities page - Mobile preview" height="700px">
        <img src="readme-files/readme-images/pages-view/04-d.png" alt="Cities page - Desktop preview" max-height="700px"width="66%">
    </p>

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

---

#### **404 page**
- The 404 page 
  
    <p align="center">Mobile preview<br>
        <img src="readme-files/readme-images/pages-view/05-m.png" alt="404 page - Mobile preview" height="700px">
        <img src="readme-files/readme-images/pages-view/05-d.png" alt="404 page - Desktop preview" max-height="700px" width="66%">
    </p>

<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>casual?casual?

</p>
<br>

---

### **FOOTER**
- The footer is composed three sub-areas, as follows:
    - **SOCIAL MEDIA LINK** - icons to access the social media pages of the website.
    - **Disclaimer**
      - Paragraphs containing a disclaimer notice
      - Disclaimer button which, when clicked, opens a modal showing a more detailed website disclaimer.
    - **Copyright notice**
      - The copyright notice contains a JS generated year and a link to the GitHub repository of this project.

<p align="center">Mobile and Desktop view</p>
<p align="center">
    <img src="readme-files/readme-images/pages-view/07-foo-m.png" alt="Footer in mobile view" height="700px">
    <img src="readme-files/readme-images/pages-view/07-foo-d.png" alt="Footer in desktop view" height="700px" max-width="66%">
</p>
<br>
<p align="right">
    <a href="#table-of-contents">Return to Table of Contents</a>
</p>
<br>

## **Typography**
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
## **Color theme**
- [Color theme generated at coolors.co](https://coolors.co/242331-0075c4-efa00b-fbfefb-c33c54)
  <p align="center">Raisin Black   -   French Blue   -   Marigold Yellow   -   Baby Powder   -   Brick Red<br>
    <img src="readme-files/readme-images/coolors-co-color-theme.png" alt="coolor.co color theme" width="90%">
</p>

- Colors:
  - Main colors used:
    - Dominant Color: #242331 / rgb(36, 35, 49) [Raisin Black].
    - Complimentary Color: #0075C4 / rgb(0, 117, 196) [French Blue].
    - Accent color & Active Links: #EFA00B / rgb(239, 160, 11) [Marigold Yellow].
    - Text color: #FBFEFB /  rgb(251, 254, 251) [Baby Powder].
    - Link hover color: #C33C54 / rgb(245, 102, 128) [Brick Red].
  - Derivates from main color:
    - Articles background color: rgb(9, 125, 219).
    - Articles darker background color: rgb(36, 35, 49).
    - Other hues and combinations of the main colors.
    - Inset box-shadows using the accent color.

---








==============================================================================================================

- Call To Action:
  - When to MAIN element's content would not fill an entire page, the FOOTER would be displayed only 10vh at the bottom of the page, to drive  the user to scroll down to the bottom.
  - Cities page doesn't load the tabs' content, unless the user clicks any of the three Cities' tabs. There is a highlighted message to guide the user to select any City's tab. Only then the sub-tabs' content is being displayed (the Chronicle sub-tabs' content) or loaded dynamically (Wikipedia searching API and Google Maps embedded maps).



---


## **FEATURES**
- **Implemented**:
  - APIs:
    - Google Maps Markers
    - EmailJS
    - Wikipedia article search and display
  - Embedded:
    - Google Fonts
    - FontAwesome
  - Libraries:
    - Bootstrap
    - MDB UI
    - jQuery
    - Popper 
- **To be implemented**:
  - The APIs need an internet connection to work. If the connection is down, some APIs won't work. Unless you refresh the page, the page would not load the content. Therefore a script to check if `window.navigator.onLine` is `true` - which means the connection is up and the API will run correctly. Otherwise, if is `false`, there must be a way to retry the request few times more and if the connection is still down, an alert would ask the user to check the connection and retry to refresh the page.
  - Another page, named Gallery, to display images using the Google Places Photos API: when one of the cities' tab is presset, the backend will search on Google Places Details about the location, but only fetch a limited number of picture references returned in the Details object. Using those refrences and Google Photos
  

---

## **ISSUES**
- **Issues and bugs/errors encountered:**
  - Lighthouse CEO score was affected by optimization advice: ```Links are not crawlable```:
    - Cause: Lighthouse description: "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so that more pages of the site can be discovered." Learn more"
    - Solution: found a solution [here](https://webmasters.stackexchange.com/questions/132481/lighthouse-says-links-are-not-crawlable-on-the-skip-to-content-link). I changed the a element to a span element, but kept the id, so that the "Back to top" button would still work, as follows: from ```<a id="top"></a>``` to ```<span id="top" tabindex="-1"></span>```.
  - Chrome added support for source maps:
    -   ```DevTools failed to load source map: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
        DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/config.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
        DevTools failed to load source map: Could not load content for chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/editor/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
        DevTools failed to load source map: Could not load content for chrome-extension://gannpgaobkkhmpomoijebaigcapoeebl/bundle.min.js.map: System error: net::ERR_BLOCKED_BY_CLIENT ```
    - Behaviour: During development in the DevTools -> Console window I had multiple  errors.
    - Solution: These have been solved following the steps described on [StackOverflow forum](https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr), and the cause looked to be "(...) Chrome added support for source maps." Solved by making the right settings in the DevTools->Settings->Preferences->Sources.
  - Using hard-coded API-KEYs from Google API 
    - Issue: couldn't find a solution to save environment variables to a file and use this file to store the variables everywhere (VSCode IDE, GitPod environment, GitHub & GitHub pages)
    - Solution: hard coded the API-KEYs and later create environment variables in each running environment separately. Not ideally, but is working on GitHub (An emerging issue is that if you deploy the site to Netlify, for example, you must create environment variables again).
- Console warnings - These are warning which I couldn't solve yet, since my time is very limited. These are mainly caused by 3rd party APIs.
  - Non-passive event listener
    - ```[Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952```
    - Cause:
      - 'Passive event listeners are a new feature in the DOM spec that enable developers to opt-in to better scroll performance by eliminating the need for scrolling to block on touch and wheel event listeners. Developers can annotate touch and wheel listeners with {passive: true} to indicate that they will never invoke preventDefault. This feature shipped in Chrome 51, Firefox 49 and landed in WebKit.' [Source](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
      - Issue discussed [here](https://issuetracker.google.com/issues/63211698?pli=1). It looks Google Maps JavaScript API version 3 generates these warnings. Google Chrome is warning about violations that Google Maps JavaScript API generates [Source](https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive)
    - Solution:
      - the  issue is discussed [here](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md). Since the error come from the Google Maps JavaScript API 3, I couldn't find a way to solve this issue.
  - GoogleStreet & Google 360 warning: Device orientation events are blocked by permissions policy:
    - ``` The deviceorientation events are blocked by permissions policy. See https://github.com/w3c/webappsec-permissions-policy/blob/master/features.md#sensor-features ```
    - Cause: warning 
    - Solution: not solved. I couldn't find a solution to fix this warning.
  - GoogleStreet & Google 360 warning: ``` Added non-passive event listener to a scroll-blocking <touchstart/touchmove> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL> ```
    - Cause: this warning is present on Google Maps site too and couldn't find a solution to fix it.
  - Google Maps API - loading map and markers failed with this error: 
  ``` Uncaught (in promise) _.Be {message: 'gMapsMap is not a function', stack: 'Error\n    at _.Be.captureStackTrace (https://maps.…lpIUNjRBPtOZUBPjUaim1HE&callback=gMapsMap:215:255', name: 'InvalidValueError'} ```
    - Cause: Google Maps Markers API base code has been changed and I didn't have any notification to adapt my code also. The behavior was quite strange, as I didn't change the code at that time and couldn't relate any of my actions to the new error. 
    - Solution: change API's link's attribute from "async" to "defer". This eliminated the error straight away and map was rendered properly.

---

## **BUGS**
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

## **CREDITS**
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
  - [Script to suppress violations that Google Maps JavaScript API generates](https://www.telerik.com/forums/many-warnings-added-non-passive-event-listener-are-throwed)
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
  - [Material Design for Bootstrap (MDB) - Navigation menu](https://mdbootstrap.com/)
  - [MDB UI CDN](https://cdnjs.com/libraries/mdb-ui-kit)
  - [Footer Bootstrap Modal](https://www.w3schools.com/bootstrap4/bootstrap_modal.asp)
  - [Disclaimer content created using Termly's Disclaimer Generator](https://app.termly.io/dashboard/website/18551745-dea9-4e7d-998b-865844d9b2e6/disclaimer)
  - [README.md base template content structure](https://github.com/phloreenm/MP1-CultureCoffee-CI-CoBC-FM/tree/main#link-to-live-website-is-here)
  - [Use SVG viewBox for easy zooming](https://thecompetentdev.com/weeklyjstips/tips/47_svg_viewbox_zoom/)
  - [Adding zoom and pan effects to SVG](https://onestepcode.com/zoom-pan-effect-svg/)
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
  - [Dobruja (dark green) within Romania and Bulgaria (light green) both in Eastern Europe](https://en.wikipedia.org/wiki/Dobruja)

