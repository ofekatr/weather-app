import { IWeatherApiTemperature } from './forecast';

export interface IWeatherApiIconHolder {
    Icon: number | null;
}

export interface IWeatherApiDailyForecast {
    Date: string;
    Temperature: {
        Maximum: IWeatherApiTemperature;
    },
    Day: IWeatherApiIconHolder;
    Night: IWeatherApiIconHolder;
}

interface IWeatherApiWeekForecastDTO {
    DailyForecasts: IWeatherApiDailyForecast[];
}

export default IWeatherApiWeekForecastDTO;