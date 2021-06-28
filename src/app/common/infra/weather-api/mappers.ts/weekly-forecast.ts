import IWeekForecast from 'app/weather/models/data/week-forecast';
import IWeatherApiWeekForecastDTO from '../models/dtos/week-forecast';

function mapWeekForecastDtoToDomain(weeklyForecastDto: IWeatherApiWeekForecastDTO): IWeekForecast {
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
    mapWeekForecastDtoToDomain,
};
