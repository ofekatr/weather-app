export interface IWeatherApiTemperature {
    Value: number;
    Unit: 'C' | 'F';
    UnitType: number;
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