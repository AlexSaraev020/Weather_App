export interface CityWeather {
    name: string;
    weather: [{id:number, main: string , description: string}];
    main: {humidity: number, temp:number , tempMin:number, tempMax:number};
    sys: {sunrise: number, sunset: number};
    timezone:number;
}