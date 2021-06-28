import ICity from 'app/common/models/city';
import IForecast from 'app/weather/models/data/forecast';
import IWeekForecast from 'app/weather/models/data/week-forecast';
import { mapForecastDtoToDomain } from './mappers.ts/forecast';
import { mapWeekForecastDtoToDomain } from './mappers.ts/weekly-forecast';

async function fetchCityCurrentForecast(city: ICity): Promise<IForecast> {
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

async function fetchWeekForecast(_id: string): Promise<IWeekForecast> {
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
                    }
                },
            },
        ]
    });
}

async function fetchSearchResults(_searchInput: string): Promise<ICity[]> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return [
        {
            cityId: '23',
            cityName: 'Tel-Aviv'
        },
        {
            cityId: '24',
            cityName: 'Jaffa'
        },
    ]
}

export {
    fetchCityCurrentForecast,
    fetchWeekForecast,
    fetchSearchResults,
};

