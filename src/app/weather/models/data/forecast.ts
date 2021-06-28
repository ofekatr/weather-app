export interface ITemperature {
    value: number,
    unit: 'C' | 'F',
}

interface IForecast {
    cityId: string;
    weatherText: string;
    cityName: string;
    weatherIconNumber: number | null;
    temperature: ITemperature;
}

export default IForecast;