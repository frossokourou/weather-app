const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d23d0dd335d47ed6ef5ff4109eddf9dc/' + latitude + ',' + longitude + '?units=si';

    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
        }
    });
};

module.exports = forecast;
