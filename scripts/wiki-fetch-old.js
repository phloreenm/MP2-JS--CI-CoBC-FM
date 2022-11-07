// Take the value of the button clicked and pass it to the displaySearchResults function

var cityName = "";
var citadelWikis = "";

// let citadelWikis = document.getElementById(`${cityName}-Response`);
// let citadelWikis = document.getElementById(cityName + "-Response");
citadelWikis = document.getElementById("HistriaResponse");

function takeButtonId(id) {
    let btn = document.getElementById(id);
    console.log("btn: " + btn);
    // cityName = btn;
    // cityName = btn.value;
    cityName = btn.value;
    console.log("Printing cityName: " + cityName);
    console.log("\n\n");

    console.log("document.getElementById(\`${cityName}-Response\`)" + document.getElementById(`${cityName}-Response`));
 
    // TESTING citadelWikis variable
    citadelWikis = document.getElementById(`${cityName}-Response`);
    console.log("Printing citadelWikis: " + citadelWikis);
    console.log("typeof(citadelWikis): " + typeof(citadelWikis) + "\n\n");
    for (const [key, value] of Object.entries(citadelWikis)) {
        console.log(`${key}: ${value}`);
      }
    
    // send the value of the button clicked to the displaySearchResults function
    displaySearchResults(cityName);
}

// function to fetch 
// citadelWikis.onload = displaySearchResults(citadelName);

function displaySearchResults(searchItem) {
    // console.log("Printing from inside displaySearchResults");
    // console.log(searchItem);
    // let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=7&srsearch=${searchItem}`;
    let url = "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({
            "action": "query",
            "list": "search",
            "prop": "info",
            "inprop": "url",
            "utf8": "",
            "format": "json",
            "origin": "*",
            "srlimit": "7",
            "srsearch": `${searchItem}`
        });

    // console.log("For debugging purposes:");
    // console.log(url);

    fetch(url)              
        .then(function (response) {
            // console.log(response.json());
            return (response.json());
        })
        .then(function (data) {
            // assign search result from data object to an Array 'queryResultsArray' variable:
            let queryResultsArray = data.query.search;

            // For testing only
            console.log(`=============================\n
            Print the SEARCH RESULTS in .then(function (data):`);
            queryResultsArray.forEach(function (item) {
                console.log(item)});
            // ending testing 

            console.log("\n\n");

            // ===============================
            console.log("Just before resultsOnPage(queryResultsArray);\n");
            resultsOnPage(queryResultsArray);
            console.log("After resultsOnPage(queryResultsArray);\n");
        })
        .catch(function () {

            console.log("\nInside catch\n");
            console.log('An error occured');
        });
}





    
function resultsOnPage(queryArray) {
    // console.logs are for testing only
    console.log("=============================\n Printing from inside resultsOnPage 1 \n");
    // console.log(typeof citadelWikis);
    // console.log("citadelWikis.name" + citadelWikis.name);
    // citadelWikis.forEach(function (item) {
    //     console.log("Inside citadelWikis.forEach\n");
    //     console.log(item)
    // });

    
    citadelWikis.innerHTML = " ";
    citadelWikis.insertAdjacentHTML('beforeend', `<h2>More information about ${citadelName} can be found at the following links:</h2>`);
    console.log("=============================\n Printing from inside resultsOnPage 2 \n"); 
    queryArray.forEach(function (item) {
        console.log("=============================\n Printing from inside resultsOnPage 3 \n");
        let itemTitle = item.title;
        let itemSnippet = item.snippet;
        console.log("=============================\n Printing from inside resultsOnPage 4 \n");
        
        let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
        console.log("=============================\n Printing from inside resultsOnPage 5 \n");
        citadelWikis.insertAdjacentHTML('beforeend',
            `<div class="resultItem">
         <h3 class="resultTitle">
          <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
         </h3>
         <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">${itemSnippet}</a></p>

        </div>`
        );
        console.log("=============================\n Printing from inside resultsOnPage6 \n");
    });
}

// OLD METHOD

/**
 * parse.js
 *
 * MediaWiki API Demos
 * Demo of `Parse` module: Parse content of a page
 *
 * MIT License
 */

// const url = "https://en.wikipedia.org/w/api.php?" +
//     new URLSearchParams({
//         origin: "*",
//         action: "parse",
//         page: "Pet door",
//         format: "json",
//     });


// async function fetch(ur){
//     const req = await fetch(ur);
//     const json = await req.json();
//     console.log(json.parse.text["*"]);
//     var results = json.parse.text["*"];
//     console.log(results);
//     document.getElementById("example-wiki").innerHTML = results;
// }

// try {
//     fetch(url);
// } catch (e) {
//     console.error(e);
//     document.getElementById("example-wiki").innerHTML = "Error: " + e;
// }