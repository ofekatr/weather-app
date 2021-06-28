import { ITemperature } from './forecast';

export interface IDayliyForecastTemperature {
    minimum: ITemperature;
    maximum: ITemperature;
}

export interface ITimeOfDay {
    iconNumber: number | null;
}

export interface IDailyForecast {
    date: Date;
    day: ITimeOfDay;
    night: ITimeOfDay;
    temperature: IDayliyForecastTemperature;
}

interface IWeekForecast {
    dailyForecasts: IDailyForecast[];
}

export default IWeekForecast;