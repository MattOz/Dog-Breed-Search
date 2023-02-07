//Dog image search by breed
var requestUrl = 'https://dog.ceo/api/breed/hound/images'

fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });

//Dog facts
var requestUrl2 = 'http://dog-api.kinduff.com/api/facts?number=1'

fetch(requestUrl2)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });

    //--