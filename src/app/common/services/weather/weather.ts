import { apiFetchCityCurrentForecast, apiFetchWeekForecast } from 'app/common/infra/weather-api/weather-api';
import { ICity } from 'app/common/models';
import IForecast from 'app/weather/models/data/forecast';
import IWeekForecast from 'app/weather/models/data/week-forecast';

async function fetchCityCurrentForecast(city: ICity): Promise<IForecast> {
    return await apiFetchCityCurrentForecast(city);
}

async function fetchWeekForecast(id: string): Promise<IWeekForecast> {
    return apiFetchWeekForecast(id);
}


export {
    fetchCityCurrentForecast,
    fetchWeekForecast
};

