var searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', getImage);

var factButton = document.getElementById('dogFactBtn');
factButton.addEventListener('click', getFact);

var historyContainer = document.getElementById('searchHistory');

function getImage () {
    var userInput = document.getElementById('searchBar').value;
    var requestUrl = 'https://dog.ceo/api/breed/' + userInput + '/images/random';
    var requestUrl2 = requestUrl.replaceAll(' ', '-');
    var imageContainer = document.getElementById('image-container');
    console.log(requestUrl2);
    fetch(requestUrl2)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        imageContainer.textContent = "";
        var dogImageUrl = data.message;
        var img = document.createElement('img');
        img.src = dogImageUrl;
        imageContainer.appendChild(img);
    });
    
    var searchHistory = JSON.parse(localStorage.getItem("History")) || [];
    searchHistory.push(userInput);
    localStorage.setItem("History", JSON.stringify(searchHistory));

    var listItem = document.createElement('button');
    listItem.textContent = userInput;
    historyContainer.append(listItem);
    listItem.setAttribute('name', userInput);
    listItem.classList.add('historyButton');
    listItem.classList.add("button");
    listItem.classList.add("is-responsive");
    listItem.onclick = function () {
        var listItemContent = listItem.textContent
        console.log(listItemContent);
        var select = document.querySelector('select');
        select.value = listItemContent;
        searchButton.click();
    }
}

function getFact () {
    var factContainer = document.getElementById("dogFactDisplay");
    var factUrl = 'https://cors-anywhere.herokuapp.com/http://dog-api.kinduff.com/api/facts?number=1'
    fetch(factUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        var fact = data.facts[0];
        factContainer.append(fact);
    });
}

var searchHistory = JSON.parse(localStorage.getItem("History")) || [];
window.onload = function () {
    for (let index = 0; index < searchHistory.length; index++) {
        var listItem = document.createElement('button');
        listItem.textContent = searchHistory[index];
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