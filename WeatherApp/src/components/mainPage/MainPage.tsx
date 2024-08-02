import { useState } from 'react'
import Rain from '../../images/rain.webp'
import { SearchInput } from '../searchInput/SearchInput'


export const MainPage = () => {
    const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY

    const [city, setSearchedCity] = useState<string | null>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(city)
    }

    return (
        <div className="w-full h-full flex items-center relative justify-center">
            <img src={Rain} alt="Rain" className='w-full absolute inset-0 h-full ovject-cover z-0' />
            <div className='bg-black/40 text-white w-full h-full z-10 flex flex-col items-center justify-center p-4'>
                <SearchInput handleSubmit={handleSubmit} setSearchedCity={setSearchedCity}/>
            </div>
        </div>
    )
}
