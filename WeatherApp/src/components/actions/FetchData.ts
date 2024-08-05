import axios from "axios"
import { CityWeather } from "../types/types";

const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY
const apiURL = import.meta.env.VITE_WEATHER_APP_API

interface DefaultCityProps{
    city: string;
    setWeather: (weather: CityWeather | undefined) => void;
}

export const getWeather = async ({city , setWeather} : DefaultCityProps) => {
    try {
        const response = await axios.get(`${apiURL}${city}${apiKey}`)

            setWeather(response.data)
    } catch (error) {
        console.error(error)
        alert('City not found')
    }
}