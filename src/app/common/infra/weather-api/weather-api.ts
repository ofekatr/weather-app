import { ICity } from 'app/common/models';
import IForecast from 'app/weather/models/data/forecast';
import IWeekForecast from 'app/weather/models/data/week-forecast';
import mapWeatherApiAutocompleteResultDtoToDomain from './models/dtos/autocomplete-result/autocomplete-result.mapper';
import { mapForecastDtoToDomain } from './models/dtos/forecast/forecast.mapper';
import { mapWeekForecastDtoToDomain } from './models/dtos/week-forecast/weekly-forecast.mapper';

async function apiFetchCityCurrentForecast(city: ICity): Promise<IForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return mapForecastDtoToDomain(city, {
        Temperature: {
            Metric: {
                Unit: 'C',
                Value: 27.3,
            },
            Imperial: {
                Unit: 'F',
                Value: 27.3,
            }
        },
        WeatherIcon: 3,
        WeatherText: 'SUNNY',
    });
}

async function apiFetchWeekForecast(_id: string): Promise<IWeekForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return mapWeekForecastDtoToDomain({
        DailyForecasts: [
            {
                Date: new Date().toLocaleDateString(),
                Day: {
                    Icon: 3,
                },
                Night: {
                    Icon: 33,
                },
                Temperature: {
                    Maximum: {
                        Unit: 'C',
                        Value: 27.3
                    },
                    Minimum: {
                        Unit: 'C',
                        Value: 27.3
                    }
                },
            },
            {
                Date: new Date().toLocaleDateString(),
                Day: {
                    Icon: 3,
                },
                Night: {
                    Icon: 33,
                },
                Temperature: {
                    Maximum: {
                        Unit: 'C',
                        Value: 27.3
                    },
                    Minimum: {
                        Unit: 'C',
                        Value: 27.3
                    }
                },
            },
            {
                Date: new Date().toLocaleDateString(),
                Day: {
                    Icon: 3,
                },
                Night: {
                    Icon: 33,
                },
                Temperature: {
                    Maximum: {
                        Unit: 'C',
                        Value: 27.3
                    },
                    Minimum: {
                        Unit: 'C',
                        Value: 27.3
                    }
                },
            },
            {
                Date: new Date().toLocaleDateString(),
                Day: {
                    Icon: 3,
                },
                Night: {
                    Icon: 33,
                },
                Temperature: {
                    Maximum: {
                        Unit: 'C',
                        Value: 27.3
                    },
                    Minimum: {
                        Unit: 'C',
                        Value: 27.3
                    }
                },
            },
            {
                Date: new Date().toLocaleDateString(),
                Day: {
                    Icon: 3,
                },
                Night: {
                    Icon: 33,
                },
                Temperature: {
                    Maximum: {
                        Unit: 'C',
                        Value: 27.3
                    },
                    Minimum: {
                        Unit: 'C',
                        Value: 27.3
                    }
                },
            },
        ]
    });
}

async function apiFetchSearchResults(_searchInput: string): Promise<ICity[]> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return [
        {
            Key: '23',
            LocalizedName: 'Tel Aviv'
        },
        {
            Key: '24',
            LocalizedName: 'Jaffa'
        }
    ].map((mapWeatherApiAutocompleteResultDtoToDomain));
};

export {
    apiFetchCityCurrentForecast,
    apiFetchWeekForecast,
    apiFetchSearchResults,
};

