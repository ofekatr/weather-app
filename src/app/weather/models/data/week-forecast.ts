import { ITemperature } from './forecast';

export interface ITimeOfDayTemperature {
    temperature: ITemperature;
    iconNumber: number;
}

export interface IDailyForecast {
    date: Date;
    day: ITimeOfDayTemperature;
    night: ITimeOfDayTemperature;
}

interface IWeekForecast {
    dailyForecasts: IDailyForecast[];
}

export default IWeekForecast;