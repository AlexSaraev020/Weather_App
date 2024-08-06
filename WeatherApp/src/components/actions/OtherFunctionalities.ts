import ClearSky from '../../images/icons/ClearSky.webp'
import Clouds from '../../images/icons/Clouds.webp'
import LightningBolt from '../../images/icons/LightningBolt.webp'
import RainIcon from '../../images/icons/Rain.webp'
import ScatteredClouds from '../../images/icons/ScatteredClouds.webp'
import Snow from '../../images/icons/Snow.webp'
import ClearSkyVideo from '../../images/videos/ClearSky.mp4'
import CloudsVideo from '../../images/videos/Clouds.mp4'
import ThunderStormVideo from '../../images/videos/Thunderstorm.mp4'
import MistVideo from '../../images/videos/Mist.mp4'
import RainIconVideo from '../../images/videos/Rain.mp4'
import ScatteredCloudsVideo from '../../images/videos/DarkClouds.mp4'
import SnowVideo from '../../images/videos/Snow.mp4'
import { CityWeather } from '../types/types'

interface WeatherSwitcherProps {
    weather: CityWeather | undefined;
    setIcon: (icon: string | undefined) => void;
    setVideoBackground: (videoBackground: string | undefined) => void;
    setCardColor: (color: string | undefined) => void;
}

export const weatherSwitcher = ({weather,setIcon,setVideoBackground,setCardColor} : WeatherSwitcherProps) => {
    if (weather) {
        switch (weather.weather[0].main) {
            case 'Clear':
                setIcon(ClearSky);
                setVideoBackground(ClearSkyVideo);
                setCardColor('from-sky-700 to-slate-400');
                break;
            case 'Clouds':
                setIcon(Clouds);
                setVideoBackground(CloudsVideo);
                setCardColor('from-sky-950 to-slate-400');
                break;
            case 'overcast clouds':
                setIcon(Clouds);
                setVideoBackground(CloudsVideo);
                setCardColor('from-slate-800 via-slate-600 to-slate-400');
                break;
            case 'scattered clouds':
                setIcon(ScatteredClouds);
                setVideoBackground(ScatteredCloudsVideo);
                setCardColor('from-slate-800 via-slate-600 to-slate-400');
                break;
            case 'broken clouds':
                setIcon(ScatteredClouds);
                setVideoBackground(ScatteredCloudsVideo);
                setCardColor('from-zinc-800 via-zinc-700 to-zinc-600');
                break;
            case 'Smoke':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            case 'Rain':
                setIcon(RainIcon);
                setVideoBackground(RainIconVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            case 'Thunderstorm':
                setIcon(LightningBolt);
                setVideoBackground(ThunderStormVideo);
                setCardColor('from-neutral-900 via-neutral-800 to-neutral-700');
                break;
            case 'Snow':
                setIcon(Snow);
                setVideoBackground(SnowVideo);
                setCardColor('from-blue-700/60 to-blue-400/60');
                break;
            case 'Drizzle':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            case 'Mist':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            case 'Haze':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            case 'Fog':
                setIcon(ScatteredClouds);
                setVideoBackground(MistVideo);
                setCardColor('from-slate-800/70 via-slate-700/70 to-slate-600/70');
                break;
            default:
                setIcon(undefined);
                break;
        }
    }
}