import { apiFetchCityByCoords, apiFetchSearchResults } from 'app/common/infra/weather-api/weather-api';
import { ICity } from 'app/common/models';

const DEFAULT_CITY_COORDS = {
    LAT: 32.071259715,
    LON: 34.7885785123,
}

async function fetchSearchResults(searchInput: string): Promise<ICity[]> {
    return await apiFetchSearchResults(searchInput);
}

async function getDefaultCity(): Promise<ICity> {
    return apiFetchCityByCoords(
        {
            lat: DEFAULT_CITY_COORDS.LAT,
            lon: DEFAULT_CITY_COORDS.LON,
        }
    );
}

export {
    fetchSearchResults,
    getDefaultCity
};

