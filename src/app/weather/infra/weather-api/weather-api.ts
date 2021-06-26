import IWeekForecast from 'app/weather/models/data/week-forecast';
import IForecast from '../../models/data/forecast'

async function fetchCityCurrentForecast(id: string): Promise<IForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return {
        weatherText: 'SUNNY',
        temperature: {
            unit: 'C',
            value: 27.3,
        },
        weatherIconNumber: 3,
        cityName: 'Tel Aviv',
        id
    }
}

async function fetchWeekForecast(_id: string): Promise<IWeekForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return {
        dailyForecasts: [
            {
                date: new Date(),
                day: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                },
                night: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                }
            },
            {
                date: new Date(),
                day: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                },
                night: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                }
            },
            {
                date: new Date(),
                day: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                },
                night: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                }
            },
            {
                date: new Date(),
                day: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                },
                night: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                }
            },
            {
                date: new Date(),
                day: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                },
                night: {
                    temperature: {
                        unit: 'C',
                        value: 27.3,
                    },
                    iconNumber: 1,
                }
            },
        ]
    }
}

export {
    fetchCityCurrentForecast,
    fetchWeekForecast,
}