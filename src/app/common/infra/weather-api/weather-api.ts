import { ICity } from 'app/common/models';
import config from 'app/core/config';
import IForecast from 'app/weather/models/data/forecast';
import IWeekForecast from 'app/weather/models/data/week-forecast';
import axios from 'axios';
import IWeatherApiAutocompleteResult from './models/dtos/autocomplete-result/autocomplete-result.dto';
import mapWeatherApiAutocompleteResultDtoToDomain from './models/dtos/autocomplete-result/autocomplete-result.mapper';
import IWeatherApiForecastDTO from './models/dtos/forecast/forecast.dto';
import { mapForecastDtoToDomain } from './models/dtos/forecast/forecast.mapper';
import IWeatherApiGeopositionResult from './models/dtos/geroposition-result/geoposition-result.dto';
import mapWeatherApiGeopositionResultToDomain from './models/dtos/geroposition-result/geoposition-result.mapper';
import IWeatherApiWeekForecastDTO from './models/dtos/week-forecast/week-forecast.dto';
import { mapWeekForecastDtoToDomain } from './models/dtos/week-forecast/weekly-forecast.mapper';

const apiKey = config.weatherApi.key;

axios.defaults.baseURL = 'http://dataservice.accuweather.com';

async function apiFetchCityCurrentForecast(city: ICity, metric: boolean = true): Promise<IForecast> {
    const res: { data: IWeatherApiForecastDTO[] } = await axios.get(
        `/currentconditions/v1/${city.cityId}`,
        { params: { apikey: apiKey, metric } }
    );
    return mapForecastDtoToDomain(city, res.data[0], metric);
}

async function apiFetchWeekForecast(cityId: string, metric: boolean = true): Promise<IWeekForecast> {
    const res: { data: IWeatherApiWeekForecastDTO } = await axios.get(
        `forecasts/v1/daily/5day/${cityId}`,
        { params: { apikey: apiKey, metric } }
    );

    return mapWeekForecastDtoToDomain(res.data);
}

async function apiFetchSearchResults(searchInput: string): Promise<ICity[]> {
    const res: { data: IWeatherApiAutocompleteResult[] } = await axios.get(
        '/locations/v1/cities/autocomplete',
        { params: { apikey: apiKey, q: searchInput } }
    );
    return res.data.map((mapWeatherApiAutocompleteResultDtoToDomain));
};

async function apiFetchCityByCoords(coords: { lon: number, lat: number }): Promise<ICity> {
    const res: { data: IWeatherApiGeopositionResult } = await axios.get(
        '/locations/v1/cities/geoposition/search',
        { params: { apikey: apiKey, q: `${coords.lat},${coords.lon}`, toplevel: true } }
    )

    return mapWeatherApiGeopositionResultToDomain(res.data);
}

export {
    apiFetchCityCurrentForecast,
    apiFetchWeekForecast,
    apiFetchSearchResults,
    apiFetchCityByCoords,
};

