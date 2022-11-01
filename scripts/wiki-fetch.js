let histriaWikis = document.getElementById('histriaWikiRes');

let citadelName = "Histria";

histriaWikis.onload = displaySearchResults(citadelName);

function displaySearchResults(searchItem){
	
	let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchItem}`;
	console.log(url);
	
	fetch(url)
		.then(function(response) {
    		return (response.json());
  		})
  		.then(function(data){
  			let resultsArray = data.query.search;
  			resultsOnPage(resultsArray);
  		})
  		.catch(function () {
   			console.log('An error occured');
		});
}

function resultsOnPage(myArray){

	histriaWikis.innerHTML = " ";
	histriaWikis.insertAdjacentHTML('beforeend', `<h2>Search Results for ${citadelName} </h2>`);

	myArray.forEach(function(item){
		let itemTitle = item.title;
		let itemSnippet = item.snippet;
		let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
		
		histriaWikis.insertAdjacentHTML('beforeend',
      	`<div class="resultItem">
         <h3 class="resultTitle">
          <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
         </h3>
         <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
         ${itemSnippet}</a></p>
        </div>`
    	);
    });
}


























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