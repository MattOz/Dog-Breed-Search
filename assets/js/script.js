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
    var requestUrl = 'https:dog.ceo/api/breed/' + userInput + '/images';

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data.message[0]);
        // var imageContainer = document.getElementById('imageContainer');
        // var currentImage = $('<img>');
        // currentImage.value(data.message);
        // imageContainer.append(currentImage);
    });
}