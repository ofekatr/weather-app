import { IWeatherApiTemperature } from './forecast';

export interface IWeatherApiIconHolder {
    Icon: number | null;
}

export interface IWeatherApiDailyForecastTemperature {
    Maximum: IWeatherApiTemperature;
    Minimum: IWeatherApiTemperature;
}

export interface IWeatherApiDailyForecast {
    Date: string;
    Temperature: IWeatherApiDailyForecastTemperature;
    Day: IWeatherApiIconHolder;
    Night: IWeatherApiIconHolder;
}

interface IWeatherApiWeekForecastDTO {
    DailyForecasts: IWeatherApiDailyForecast[];
}

export default IWeatherApiWeekForecastDTO;