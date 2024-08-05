export interface CityWeather {
    name: string;
    weather: [{id:number, main: string , description: string}];
    main: {humidity: number, temp:number , temp_min:number, temp_max:number , feels_like:number};
    sys: {sunrise: number, sunset: number};
    timezone:number;
}