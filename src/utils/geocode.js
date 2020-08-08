const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibG91a2FzODgiLCJhIjoiY2tkZjEwaDNkMmJ5bTJ6czgzMDB6eHM0byJ9.9lqT1oONijxOxInSSf6dBw&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Weather service is unreachable!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode