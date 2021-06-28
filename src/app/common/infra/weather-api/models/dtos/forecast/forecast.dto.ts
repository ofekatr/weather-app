export interface IWeatherApiTemperature {
    Value: number;
    Unit: 'C' | 'F';
}

interface IWeatherApiForecastDTO {
    WeatherText: string;
    WeatherIcon: number | null;
    Temperature: {
        Metric: IWeatherApiTemperature;
        Imperial: IWeatherApiTemperature;
    },
}

export default IWeatherApiForecastDTO;