import ClearSky from '../../images/icons/ClearSky.webp'
import Clouds from '../../images/icons/Clouds.webp'
import LightningBolt from '../../images/icons/LightningBolt.webp'
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
import { CityWeather } from '../types/types'

interface WeatherSwitcherProps {
    weather: CityWeather | undefined;
    setIcon: (icon: string | undefined) => void;
    setVideoBackground: (videoBackground: string | undefined) => void;
}

export const weatherSwitcher = ({weather,setIcon,setVideoBackground} : WeatherSwitcherProps) => {
    if (weather) {
        switch (weather.weather[0].main) {
            case 'Clear':
                setIcon(ClearSky);
                setVideoBackground(ClearSkyVideo);
                break;
            case 'Clouds':
                setIcon(Clouds);
                setVideoBackground(CloudsVideo);
                break;
            case 'overcast clouds':
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
            case 'Smoke':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                break;
            case 'Rain':
                setIcon(RainIcon);
                setVideoBackground(RainIconVideo);
                break;
            case 'Thunderstorm':
                setIcon(LightningBolt);
                setVideoBackground(ThunderStormVideo);
                break;
            case 'Snow':
                setIcon(Snow);
                setVideoBackground(SnowVideo);
                break;
            case 'Drizzle':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                break;
            case 'Mist':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                break;
            case 'Haze':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                break;
            case 'Fog':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                break;
            default:
                setIcon(undefined);
                break;
        }
    }
}