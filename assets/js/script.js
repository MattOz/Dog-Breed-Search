var requestUrl = 'https://dog.ceo/api/breed/hound/images'

fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
    });