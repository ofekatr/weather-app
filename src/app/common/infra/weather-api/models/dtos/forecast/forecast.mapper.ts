import {ICity} from 'app/common/models';
import IForecast from 'app/weather/models/data/forecast';
import IWeatherApiForecastDTO from './forecast.dto';

function mapForecastDtoToDomain({ cityId, cityName }: ICity, { Temperature, WeatherIcon, WeatherText }: IWeatherApiForecastDTO, metric: boolean = true): IForecast {
    return {
        weatherText: WeatherText,
        temperature: {
            unit: metric ? Temperature.Metric.Unit : Temperature.Imperial.Unit,
            value: metric ? Temperature.Metric.Value : Temperature.Imperial.Value,
        },
        weatherIconNumber: WeatherIcon,
        cityName,
        cityId,
    };
}

export {
    mapForecastDtoToDomain,
};
