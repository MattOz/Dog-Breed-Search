//Dog image search by breed
var imageUrl = 'https://dog.ceo/api/breed/hound/images'

fetch(imageUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });

//Dog facts

var factUrl = 'https://cors-anywhere.herokuapp.com/http://dog-api.kinduff.com/api/facts?number=1'

fetch(factUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });