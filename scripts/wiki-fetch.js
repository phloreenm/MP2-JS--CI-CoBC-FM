// SOURCE:  https://femkreations.com/how-to-build-a-wikipedia-search-app-in-9-steps/

let fetchedInfoResponse = "";
let searchedItem = "";
let searchingItem = "";

// this function is called when the user clicks the selected city Wikepedia tab/button:
function fetchWiki(id) {
	// Getting the id of the city-button clicked:
	searchedItem = document.getElementById(id);
	// Split the id to the city name only:
	searchingItem = searchedItem.id.split('_')[0];
	// Getting the coresponding  city div to print the results on:
	fetchedInfoResponse = document.getElementById(searchingItem + '-wiki-fetching');
	// Calling the fetchWikiResults function, passing the city name as a parameter, to fetch the results:
	fetchWikiResults(searchingItem);
}

// This function fetches the results from the Wikipedia API:
function fetchWikiResults(x){
	// let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${x}`;
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
            "srsearch": `${searchingItem}`
        });
// fetching the response from the API:
	fetch(url)
		.then(function(response) {
			// getting the response data in JSON format
    		return (response.json());
  		})
  		.then(function(data){
			// saving the query objects in an array:
  			let resultsArray = data.query.search;
			// calling the printResultsOnPage function, passing the array as a parameter:
			printResultsOnPage(resultsArray);
  		})
  		.catch(function () {
   			console.log('An error occured');
		});
}

// function to print the results on the wikipedia tab:
function printResultsOnPage(myArray){
	fetchedInfoResponse.innerHTML = " ";
	fetchedInfoResponse.insertAdjacentHTML('beforeend', `<h4 class="center-content" style="padding-top:15px;">Wikipedia articles about \"${searchingItem}\" </h4>`);
	myArray.forEach(function(item){
		let itemTitle = item.title;
		let itemSnippet = item.snippet;
		let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
		
		fetchedInfoResponse.insertAdjacentHTML('beforeend',
      	`<div class="resultItem">
         <h3 class="resultTitle">
          <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
         </h3>
         <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
         ${itemSnippet}</a></p>
        </div>`
    	);

	})

}