import React from 'react';
import { CityWeather } from '../../types/types';

interface CardDetailsProps {
    details: boolean;
    weather: CityWeather;
    sunrise: string | undefined;
    sunset: string | undefined;
}

export const CardDetails: React.FC<CardDetailsProps> = ({ details, weather, sunrise, sunset }) => {
    return (
        <div className='w-full rounded-lg'>
            {details &&
                <div className='flex flex-col animate-fadeIn transition-all duration-500 font-bold ease-in-out  text-white'>
                    <div className='flex flex-wrap justify-between items-center mb-2 '>
                        <h2 className='text-yellow-400'>Feels Like:</h2>
                        <h2 className='text-lg sm:text-xl'>{weather.main.feels_like}°C</h2>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                        <h2 className='text-sky-400'>Min. Temperature:</h2>
                        <h2 className='text-lg sm:text-xl'>{weather.main.temp_min}°C</h2>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                        <h2 className='text-orange-400'>Max. Temperature:</h2>
                        <h2 className='text-lg sm:text-xl'>{weather.main.temp_max}°C</h2>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between items-center mb-1'>
                            <h2 className='text-amber-300'>Sunrise:</h2>
                            <h2 className='text-lg sm:text-xl'>{sunrise}</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-blue-300'>Sunset:</h2>
                            <h2 className='text-lg sm:text-xl'>{sunset}</h2>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
