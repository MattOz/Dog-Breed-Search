//Dog image search by breed
var requestUrl = 'https://dog.ceo/api/breed/hound/images'

fetch(requestUrl1)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });

//Dog facts
var requestUrl2 = ''