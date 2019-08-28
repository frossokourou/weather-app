const request = require('request');

const geocode = (address, callback) => {
    const urlLimit1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnJvc3Nva291cm91IiwiYSI6ImNqeHlnbzliNjA5YXAzbW55aWszc29iNHgifQ.C3FBAvwQxx6ahix4HG84qg&limit=1';

    request({url: urlLimit1, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!');
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
