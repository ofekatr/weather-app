import { apiFetchSearchResults } from 'app/common/infra/weather-api/weather-api';
import { ICity } from 'app/common/models';

async function fetchSearchResults(searchInput: string): Promise<ICity[]> {
    return await apiFetchSearchResults(searchInput);
}

export {
    fetchSearchResults,
};
