const request = require('request');

var URL = 'https://ci.nii.ac.jp/opensearch/search?q=”' + encodeURI("羅生門") + '”&count=168&format=json&range=2';

request.get({
    uri: URL,
    headers: {
        'Content-type': 'application/json'
    },
    json: true
}, function(err, req, data) {

    var p = data["@graph"][0];
    var arr = p.items;

    const magazines = [];

    let i = 0;
    for (i = 0; i < arr.length; i++) {

        const title = arr[i]["prism:publicationName"]
        if (magazines.indexOf(title) == -1) {
            magazines.push(title);
        }
    }


    for (i = 0; i < magazines.length; i++) {
        console.log(magazines[i]);
    }
});