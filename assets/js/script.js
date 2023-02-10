var searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', getImage);

var factButton = document.getElementById('dogFactBtn');
factButton.addEventListener('click', getFact);

var historyContainer = document.getElementById('searchHistory');

document.getElementById('searchHistory')
.addEventListener('click', event => {
    if (event.target.className.split(' ')[0] === 'historyButton'){
        var searchBar = document.getElementById('searchBar');
        var buttonValue = event.target.name;
        searchBar.value = buttonValue;
        searchButton.click();
    }
})

function getImage () {
    var userInput = document.getElementById('searchBar').value;
    var requestUrl = 'https://dog.ceo/api/breed/' + userInput + '/images/random';
    var imageContainer = document.getElementById('image-container');
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        imageContainer.textContent = "";
        var dogImageUrl = data.message;
        var img = document.createElement('img');
        img.src = dogImageUrl;
        img.classList.add('imgStyle');
        imageContainer.appendChild(img);
    });
    
    var searchHistory = JSON.parse(localStorage.getItem("History")) || [];
    searchHistory.push(userInput);
    localStorage.setItem("History", JSON.stringify(searchHistory));

    var searchHistory = [...new Set(searchHistory)];
    console.log(searchHistory);

    function renderSearch() {
        historyContainer.innerHTML = "";
        for (var index = 0; index < searchHistory.length; index++) { 
            historyContainer.innerHTML += '<button class="historyButton button is-responsive" type="button" name="' + userInput + '">' + searchHistory[index] + '</button>';
        }
    }
    
    renderSearch();

}
function getFact () {
    var factContainer = document.getElementById("dogFactDisplay");
    var factUrl = 'https://cors-anywhere.herokuapp.com/http://dog-api.kinduff.com/api/facts?number=1'
    fetch(factUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        factContainer.textContent = "";
        var fact = data.facts[0];
        factContainer.append(fact);
    });
}

var searchHistory = JSON.parse(localStorage.getItem("History")) || [];
var uniqueHistory = [...new Set(searchHistory)];

window.onload = function () {
    for (let index = 0; index < uniqueHistory.length; index++) {
        var listItem = document.createElement('button');
        listItem.textContent = uniqueHistory[index];
        listItem.classList.add('historyButton');
        listItem.classList.add("button");
        listItem.classList.add("is-responsive");
        historyContainer.append(listItem);
    }
}

var clearButton = document.getElementById('clearSearch');
clearButton.addEventListener('click', clearHistory);

function clearHistory () {
    localStorage.clear();
    location.reload();
}