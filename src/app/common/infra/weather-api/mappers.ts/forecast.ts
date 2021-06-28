import ICity from 'app/common/models/city';
import IForecast from 'app/weather/models/data/forecast';
import IWeatherApiForecastDTO from '../models/dtos/forecast';

function mapForecastDtoToDomain({ cityId, cityName }: ICity, { Temperature, WeatherIcon, WeatherText }: IWeatherApiForecastDTO): IForecast {
    return {
        weatherText: WeatherText,
        temperature: {
            unit: Temperature.Metric.Unit,
            value: Temperature.Metric.Value,
        },
        weatherIconNumber: WeatherIcon,
        cityName,
        cityId,
    };
}

export {
    mapForecastDtoToDomain,
};
