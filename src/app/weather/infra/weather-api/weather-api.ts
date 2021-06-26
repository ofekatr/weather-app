import IWeekForecast from 'app/weather/models/data/week-forecast';
import IForecast from '../../models/data/forecast'

async function fetchCityCurrentForecast(_id: string): Promise<IForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return {
        weatherText: 'SUNNY',
        temperature: {
            unit: 'C',
            value: 27.3,
        },
        weatherIconNumber: 3,
    }
}

async function fetchWeekForecast(_id: string): Promise<IWeekForecast> {
    await (new Promise<void>((resolve) => setTimeout(() => resolve(), 500)));
    return {
        dailyForecasts: [
            {
                date: new Date(),
                dayIconNumber: 1,
                nightIconNumber: 33,
                temperature: {
                    unit: 'C',
                    value: 27.3,
                }
            },
            {
                date: new Date(),
                dayIconNumber: 1,
                nightIconNumber: 33,
                temperature: {
                    unit: 'C',
                    value: 27.3,
                }
            },
            {
                date: new Date(),
                dayIconNumber: 1,
                nightIconNumber: 33,
                temperature: {
                    unit: 'C',
                    value: 27.3,
                }
            },
            {
                date: new Date(),
                dayIconNumber: 1,
                nightIconNumber: 33,
                temperature: {
                    unit: 'C',
                    value: 27.3,
                }
            },
            {
                date: new Date(),
                dayIconNumber: 1,
                nightIconNumber: 33,
                temperature: {
                    unit: 'C',
                    value: 27.3,
                }
            }
        ]
    }
}

export {
    fetchCityCurrentForecast,
    fetchWeekForecast,
}