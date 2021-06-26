export interface ITemperature {
    value: number,
    unit: 'C' | 'F',
}

interface IForecast {
    weatherText: string;
    weatherIconNumber: number;
    temperature: ITemperature;
}

export default IForecast;