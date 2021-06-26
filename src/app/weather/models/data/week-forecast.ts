import { ITemperature } from './forecast';

export interface IDailyForecast {
    date: Date;
    temperature: ITemperature;
    dayIconNumber: number;
    nightIconNumber: number;
}

interface IWeekForecast {
    dailyForecasts: IDailyForecast[];
}

export default IWeekForecast;