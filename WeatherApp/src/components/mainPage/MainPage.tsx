/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from 'react'
import { SearchInput } from '../searchInput/SearchInput'
import { CityWeather } from '../types/types'
import Humidity from '../../assets/humidity.svg?react'
import { getWeather } from '../actions/FetchData'
import { weatherSwitcher } from '../actions/OtherFunctionalities'

export const MainPage = () => {

    const today = new Date();
    const day = today.getDate()
    const month = today.getMonth() + 1;
    const year = today.getFullYear();


    const [city, setSearchedCity] = useState<string>('bucharest')
    const [weather, setWeather] = useState<CityWeather | undefined>(undefined)
    const [icon, setIcon] = useState<string | undefined>(undefined)
    const [videoBackground, setVideoBackground] = useState<string | undefined>(undefined)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await getWeather({ city, setWeather })
    }

    useEffect(() => {
        const setDefaultCity = async () => {
            await getWeather({ city, setWeather })
        }
        setDefaultCity()
    }, [])

    useEffect(() => {
        weatherSwitcher({weather,setIcon,setVideoBackground})
    }, [weather]);

    return (
        <div className="w-full h-full flex items-center relative justify-center">
            <video autoPlay muted loop src={videoBackground} className="absolute inset-0 z-0 w-full h-full object-cover" />
            <div className="bg-black/40 space-y-14 text-white w-full h-full z-10 flex flex-col items-center justify-center p-4">
                {weather && (
                    <div className="p-3 relative w-8/12 sm:w-7/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 h-60 sm:h-72 flex justify-center bg-blue-950 border-2 shadow-glow shadow-sky-800 backdrop-blur-sm border-blue-900 rounded-md hover:scale-105 transition-all duration-500">
                        <div className="flex order-2 w-9/12 flex-col items-start z-20 justify-center font-semibold">
                            <div className="text-5xl sm:text-7xl md:text-8xl flex">
                                {Math.trunc(weather.main.temp)}
                                <h2 className="text-3xl sm:text-6xl md:text-7xl font-normal">°C</h2>
                            </div>
                            <div className="text-md sm:text-xl md:text-2xl flex">
                                <Humidity className="fill-sky-400 w-5 sm:w-6 md:w-7" /> {weather.main.humidity}%&nbsp;<h2 className='text-sky-400'>| {weather.weather[0].main}</h2>
                            </div>
                            <div className="text-xl sm:text-4xl md:text-5xl z-10 font-mono font-bold">{weather.name}</div>
                            <h2 className="font-mono text-sm sm:text-xl font-semibold bottom-2">{day + '/' + month + '/' + year}</h2>
                        </div>
                        <div className="w-3/12 sm:w-4/12 order-1">
                            <img src={icon} alt="" className="w-32 sm:w-56 md:w-60 opacity-90 -left-16 sm:-left-20 -bottom-10 absolute z-0" />
                        </div>
                    </div>
                )}
                <SearchInput handleSubmit={handleSubmit} setSearchedCity={setSearchedCity} />
            </div>
        </div>

    )
}
