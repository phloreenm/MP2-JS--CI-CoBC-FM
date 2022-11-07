// JavaScript Document
let histriaResponse = document.getElementById('Histria-Response');
// console.log("Printing TEST 1");

let btnWikiPressed = document.getElementById('histria_wikipedia');
// console.log("Printing TEST 2");
let searchItem = document.getElementById('histria_wikipedia');
// console.log("Printing TEST 3");


function fetchWiki(id) {
    // console.log("Printing TEST 4");
    console.log("searched id: " + id);
    
	// e.preventDefault();
    // console.log("Printing TEST 5");
	displaySearchResults(searchItem.value);
}



// btnWikiPressed.addEventListener('onclick', (e)=> {
//     console.log("Printing TEST 4");
// 	e.preventDefault();
//     console.log("Printing TEST 5");
// 	displaySearchResults(searchItem.value);
// })


function displaySearchResults(x){
	// console.log("Printing TEST 6");
	let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${x}`;
	console.log(url);
    // console.log("Printing TEST 7");
	
	fetch(url)
		.then(function(response) {
            // console.log("Printing TEST 8");
    		return (response.json());
  		})
  		.then(function(data){
            // console.log("Printing TEST 9");
  			let resultsArray = data.query.search;
            //   console.log("Printing TEST 10");
  			resultsOnPage(resultsArray);
  		})
  		.catch(function () {
   			console.log('An error occured');
		});
}


function resultsOnPage(myArray){
    // console.log("Printing TEST 11");
	histriaResponse.innerHTML = " ";
	histriaResponse.insertAdjacentHTML('beforeend', `<h2>Results for ${searchItem} </h2>`);


	myArray.forEach(function(item){
		let itemTitle = item.title;
		let itemSnippet = item.snippet;
		let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
		
		histriaResponse.insertAdjacentHTML('beforeend',
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