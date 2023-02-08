//Dog image search by breed
// var imageUrl = 'https://dog.ceo/api/breed/hound/images'
// fetch(imageUrl)
//     .then(function (response) {
//         return response.json();
//         })
//         .then(function (data) {
//         console.log(data)
//     });

//Dog facts
// var factUrl = 'https://cors-anywhere.herokuapp.com/http://dog-api.kinduff.com/api/facts?number=1'
// fetch(factUrl)
//     .then(function (response) {
//         return response.json();
//         })
//         .then(function (data) {
//         console.log(data)
//     });

var searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', getImage);

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
}