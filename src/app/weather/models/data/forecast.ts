export interface ITemperature {
    value: number,
    unit: 'C' | 'F',
}

interface IForecast {
    id: string;
    weatherText: string;
    cityName: string;
    weatherIconNumber: number;
    temperature: ITemperature;
}

export default IForecast;