import { useEffect, useState } from 'react'
import { SearchInput } from '../searchInput/SearchInput'
import axios from 'axios'
import { CityWeather } from '../types/types'
import ClearSky from '../../images/icons/ClearSky.webp'
import Clouds from '../../images/icons/Clouds.webp'
import LightningBolt from '../../images/icons/LightningBolt.webp'
import Mist from '../../images/icons/Mist.webp'
import RainIcon from '../../images/icons/Rain.webp'
import ScatteredClouds from '../../images/icons/ScatteredClouds.webp'
import Snow from '../../images/icons/Snow.webp'
import ClearSkyVideo from '../../images/videos/ClearSky.webm'
import CloudsVideo from '../../images/videos/Clouds.webm'
import ThunderStormVideo from '../../images/videos/Thunderstorm.webm'
import MistVideo from '../../images/videos/Mist.webm'
import RainIconVideo from '../../images/videos/Rain.webm'
import ScatteredCloudsVideo from '../../images/videos/DarkClouds.webm'
import SnowVideo from '../../images/videos/Snow.webm'



export const MainPage = () => {
    const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY
    const apiURL = import.meta.env.VITE_WEATHER_APP_API
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
        const response = await axios.get(`${apiURL}${city}${apiKey}`)
        setWeather(response.data)
    }

    useEffect(() => {
        const defaultCity = async () => {
            try {
                const response = await axios.get(`${apiURL}${city}${apiKey}`)
                setWeather(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        defaultCity()
    }, [])



    useEffect(() => {
        if (weather) {
            switch (weather.weather[0].description) {
                case 'clear sky':
                    setIcon(ClearSky);
                    setVideoBackground(ClearSkyVideo);
                    break;
                case 'few clouds':
                    setIcon(Clouds);
                    setVideoBackground(CloudsVideo);
                    break;
                case 'scattered clouds':
                    setIcon(ScatteredClouds);
                    setVideoBackground(ScatteredCloudsVideo);
                    break;
                case 'broken clouds':
                    setIcon(ScatteredClouds);
                    setVideoBackground(ScatteredCloudsVideo);
                    break;
                case 'shower rain':
                    setIcon(RainIcon);
                    setVideoBackground(RainIconVideo);
                    break;
                case 'rain':
                    setIcon(RainIcon);
                    setVideoBackground(RainIconVideo);
                    break;
                case 'thunderstorm':
                    setIcon(LightningBolt);
                    setVideoBackground(ThunderStormVideo);
                    break;
                case 'snow':
                    setIcon(Snow);
                    setVideoBackground(SnowVideo);
                    break;
                case 'mist':
                    setIcon(Mist);
                    setVideoBackground(MistVideo);
                    break;
                default:
                    setIcon(undefined);
                    break;
            }
        }
    }, [weather]);

    return (
        <div className="w-full h-full flex items-center relative justify-center">
            <video autoPlay muted loop src={videoBackground} className='absolute inset-0 z-0 w-full h-full object-cover ' />
            <div className='bg-black/40 space-y-8 text-white w-full h-full z-10 flex flex-col items-center justify-center p-4'>
                {weather &&
                    <div className='p-3 relative w-4/12 h-[50vh] flex flex-col items-center justify-center bg-slate-800/60 border-2 backdrop-blur-sm border-slate-500 rounded-md hover:scale-105 transition-all duration-500'>
                        <div className='flex flex-col absolute top-4 left-4 space-x-4 w-full text-5xl font-mono font-bold'>
                            <div>
                                {weather.main.temp} °C
                            </div>
                            <div className='text-4xl'>
                                {weather.weather[0].main}
                            </div>
                        </div>
                        <div className='text-6xl z-10 w-full flex items-center justify-center font-mono font-bold '>
                            {weather.name}
                        </div>
                        <h2 className='font-mono absolute right-3 text-xl font-semibold bottom-2'>
                            {day + '/' + month + '/' + year}
                        </h2>
                        <img src={icon} alt="" className='w-48 absolute z-0' />
                    </div>
                }
                <SearchInput handleSubmit={handleSubmit} setSearchedCity={setSearchedCity} />
            </div>
        </div>
    )
}
