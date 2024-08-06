/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from 'react'
import { SearchInput } from '../searchInput/SearchInput'
import { CityWeather } from '../types/types'
import Humidity from '../../assets/humidity.svg?react'
import { getWeather } from '../actions/FetchData'
import { weatherSwitcher } from '../actions/OtherFunctionalities'
import { CardDetails } from './mainPageComponents/CardDetails'
import ArrowDown from '../../assets/arrowDown.svg?react'

export const MainPage = () => {

    const today = new Date();
    const day = today.getDate()
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const [city, setSearchedCity] = useState<string>('bucharest')
    const [weather, setWeather] = useState<CityWeather | undefined>(undefined)
    const [icon, setIcon] = useState<string | undefined>(undefined)
    const [videoBackground, setVideoBackground] = useState<string | undefined>(undefined)
    const [tempColor, setTempColor] = useState<string | undefined>(undefined)
    const [details, showDetails] = useState<boolean>(false)
    const [sunrise, setSunrise] = useState<string | undefined>(undefined)
    const [sunset, setSunset] = useState<string | undefined>(undefined)
    const [cardColor, setCardColor] = useState<string | undefined>(undefined)


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
        weatherSwitcher({ weather, setIcon, setVideoBackground,setCardColor })
        if (weather) {
            if (weather.main.temp > 34) {
                setTempColor('text-red-500')
            } else if (weather.main.temp > 30) {
                setTempColor('text-orange-500')
            } else if (weather.main.temp > 25) {
                setTempColor('text-orange-300')
            } else if (weather.main.temp > 18) {
                setTempColor('text-white')
            } else if (weather.main.temp > 10) {
                setTempColor('text-sky-300')
            } else if (weather.main.temp > 0) {
                setTempColor('text-sky-500')
            } else if (weather.main.temp < 0) {
                setTempColor('text-sky-500')
            }
        }
        if (weather) {
            const sunrise = new Date((weather.sys.sunrise + weather.timezone) * 1000)
            const sunSet = new Date((weather.sys.sunset + weather.timezone) * 1000)
            setSunrise(sunrise.toLocaleTimeString())
            setSunset(sunSet.toLocaleTimeString())
        }
        console.log(weather)
    }, [weather]);




    return (
        <div className="w-full h-full flex items-center relative justify-center">
            <video autoPlay muted loop src={videoBackground} className="absolute inset-0 z-0 w-full h-full object-cover" />
            <div className="bg-black/40 space-y-14 text-white w-full h-full z-10 flex flex-col items-center justify-center p-3 sm:p-4">
                {weather && (
                    <div className={`pb-10 sm:pb-0 sm:pl-24 relative w-full sm:w-7/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 ${details ? 'max-h-screen' : 'max-h-64 sm:max-h-96'} flex justify-center bg-gradient-to-br  ${cardColor} border-2 backdrop-blur-xl rounded-lg shadow-lg hover:scale-105 transition-all duration-500 animate-fadeIn ease-in-out`}>
                        <div className="flex order-2 p-4 w-10/12 relative flex-col items-start z-20 justify-center font-semibold">
                            <div className="text-5xl sm:text-7xl md:text-8xl flex">
                                <h2 className={`${tempColor}`}>
                                    {Math.trunc(weather.main.temp)}
                                </h2>
                                <h2 className="text-3xl sm:text-6xl md:text-7xl font-normal">°C</h2>
                            </div>
                            <div className="text-md sm:text-xl md:text-2xl flex items-center">
                                <Humidity className="fill-sky-400 w-5 sm:w-6 md:w-7" /> {weather.main.humidity}%&nbsp;<h2 className='text-sky-400'>| {weather.weather[0].main}</h2>
                            </div>
                            <div className="text-xl sm:text-4xl md:text-5xl z-10 font-mono font-bold">{weather.name}</div>
                            <h2 className="font-mono text-sm sm:text-xl font-semibold bottom-2">{day}/{month}/{year}</h2>
                            <button onClick={() => showDetails(!details)} className='text-xl items-center space-x-1 text-gray-200 flex py-2'>
                                <h2>
                                    More Details
                                </h2>
                                <ArrowDown className='fill-white w-7' />
                            </button>
                            <CardDetails sunrise={sunrise} sunset={sunset} weather={weather} details={details} />
                        </div>
                            <img src={icon} alt="" className="w-32 sm:w-56 md:w-60 right-0 sm:-left-24 -bottom-10 absolute z-0" />
                    </div>
                )}
                <SearchInput handleSubmit={handleSubmit} cardColor={cardColor} setSearchedCity={setSearchedCity} />
            </div>
        </div>

    )
}
