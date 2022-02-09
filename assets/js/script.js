
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

/* search history */
const form = document.getElementById("form");
const searchBar = document.getElementById("search-input");
const submitButton = document.getElementById("submit");
const deleteButton = document.getElementById("delete");
const ul = document.getElementById("ul");
let recentSearches;

if (localStorage.recentSearches && localStorage.recentSearches != "") {
  recentSearches = JSON.parse(localStorage.recentSearches);
} else {
  recentSearches = [];
}

const makeListItem = (text, parent) => {
  let listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.className = "list-group-item";
  parent.appendChild(listItem);
};

recentSearches.forEach(element => {
  makeListItem(element, ul);
});

const isDuplicateValue = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == text) {
      return true;
    }
  }

  return false;
};

form.addEventListener("submit", event => {
  event.preventDefault();
  if (
    searchBar.value == "" ||
    isDuplicateValue(recentSearches, searchBar.value)
  ) {
    return;
  } else {
    recentSearches.push(searchBar.value);
    makeListItem(searchBar.value, ul);
    localStorage.recentSearches = JSON.stringify(recentSearches);
    searchBar.value = "";
  }
});

deleteButton.addEventListener("click", () => {
  localStorage.clear();
  recentSearches = [];
  searchBar.value = "";
  // I use querySelectorAll because it returns a static collection
  let arr = document.querySelectorAll("li");
  // I use the static collection for iteration
  for (let i = 0; i < arr.length; i++) {
    arr[i].remove();
  }
});
