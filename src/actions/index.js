import axios from 'axios';

const API_KEY = '752e1d274a67ca3f10260fe0a1e18aea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},ph`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}