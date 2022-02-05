
$.ajax({
    type: 'GET', url: "https://api.edamam.com/search?q=steak&app_id=f5c1ec1a&app_key=b6407feae2a0f590dafc78463b4d9dd1&from=0&to=5"
}).done(function (response) {
	console.log(response);
});

$.ajax({
    type: 'GET', url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka&api_key=1",
}).done(function (response) {
	console.log(response);
});




