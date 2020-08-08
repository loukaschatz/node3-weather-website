const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=110cad992f8b08dd4b7100e93f4012aa&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }else if (body.error){
            callback('Wrong coordinates. Try again!', undefined)
        }else {
            callback(undefined,'Weather Decription: ' + body.current.weather_descriptions +  '. Temperature: ' + body.current.temperature + ' degrees.' + ' Feels like: ' + body.current.feelslike + ' degrees.')
            }
        }
    )
}
    
module.exports = forecast