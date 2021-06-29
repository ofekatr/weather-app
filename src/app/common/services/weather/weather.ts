import { apiFetchCityCurrentForecast, apiFetchWeekForecast } from 'app/common/infra/weather-api/weather-api';
import { ICity } from 'app/common/models';
import IForecast from 'app/weather/models/data/forecast';
import IWeekForecast from 'app/weather/models/data/week-forecast';

async function fetchCityCurrentForecast(city: ICity, metric: boolean = true): Promise<IForecast> {
    return await apiFetchCityCurrentForecast(city, metric);
}

async function fetchWeekForecast(id: string, metric: boolean = true): Promise<IWeekForecast> {
    return apiFetchWeekForecast(id, metric);
}


export {
    fetchCityCurrentForecast,
    fetchWeekForecast
};

