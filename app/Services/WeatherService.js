import { sandboxApi } from '../Services/AxiosService.js';
import { ProxyState } from '../AppState.js';
import Weather from '../Models/Weather.js';



class WeatherService {
    constructor() {
        this.getWeather()
    }


    async getWeather() {
        try {
            const res = await sandboxApi.get('weather')
            ProxyState.weather = new Weather(res.data)
        } catch (error) {
            console.error(error);
        }
    }
}

export const weatherService = new WeatherService();