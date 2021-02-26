import { weatherService } from '../Services/WeatherService.js'
import { ProxyState } from '../AppState.js';

function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather)
    }



}