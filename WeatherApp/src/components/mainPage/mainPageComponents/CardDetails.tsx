import React from 'react';
import { CityWeather } from '../../types/types';
import Wind from '../../../assets/wind.svg?react'
import Sunrise from '../../../assets/sunrise.svg?react'
import Sunset from '../../../assets/sunset.svg?react'
import TemperatureMax from '../../../assets/temperatureMax.svg?react'
import TemperatureMin from '../../../assets/temperatureMin.svg?react'
import FeelsLike from '../../../assets/feelsLike.svg?react'

interface CardDetailsProps {
    details: boolean;
    weather: CityWeather;
    sunrise: string | undefined;
    sunset: string | undefined;
}

export const CardDetails: React.FC<CardDetailsProps> = ({ details, weather, sunrise, sunset }) => {
    return (
        <div className='w-full rounded-lg '>
            {details &&
                <div className='flex flex-col pb-10 animate-fadeIn transition-all duration-500 font-bold ease-in-out  text-white'>
                    <div className='flex flex-wrap justify-between items-center mb-2 '>
                    <div className='flex space-x-1'>
                            <h2 className='text-sky-300'>Feels Like</h2>
                            <FeelsLike className='w-8 fill-sky-300 ' />
                        </div>
                        <h2 className='text-md sm:text-xl'>{weather.main.feels_like}°C</h2>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                    <div className='flex space-x-1'>
                            <h2 className='text-cyan-300'>Min. Temp.</h2>
                            <TemperatureMin className='w-8 fill-cyan-300 ' />
                        </div>
                        <h2 className='text-md sm:text-xl'>{weather.main.temp_min}°C</h2>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                        <div className='flex space-x-1'>
                            <h2 className='text-red-400'>Max. Temp.</h2>
                            <TemperatureMax className='w-8 fill-red-400 ' />
                        </div>
                        <h2 className='text-md sm:text-xl'>{weather.main.temp_max}°C</h2>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                        <div className='flex space-x-1'>
                            <h2 className='text-slate-300 text-xl'>Wind</h2>
                            <Wind className='w-8 stroke-slate-300 ' />
                        </div>
                        <h2 className='text-md sm:text-xl'>{weather.wind.speed}Km/h</h2>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between items-center mb-1'>
                            <div className='flex space-x-1'>
                                <h2 className='text-amber-300'>Sunrise</h2>
                                <Sunrise className='w-7 stroke-amber-300 ' />
                            </div>
                            <h2 className='text-md sm:text-xl'>{sunrise}</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-1'>
                                <h2 className='text-orange-400'>Sunrise</h2>
                                <Sunset className='w-7 stroke-orange-400 ' />
                            </div>
                            <h2 className='text-md sm:text-xl'>{sunset}</h2>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
