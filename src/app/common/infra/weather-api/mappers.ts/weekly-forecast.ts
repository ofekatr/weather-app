import IWeekForecast from 'app/weather/models/data/week-forecast';
import IWeatherApiWeekForecastDTO from '../models/dtos/week-forecast';

function mapWeekForecastDtoToDomain(weeklyForecastDto: IWeatherApiWeekForecastDTO): IWeekForecast {
    return {
        dailyForecasts: weeklyForecastDto.DailyForecasts.map((dailyForecast) => ({
            date: new Date(dailyForecast.Date),
            day: {
                iconNumber: dailyForecast.Day.Icon,
            },
            night: {
                iconNumber: dailyForecast.Night.Icon,
            },
            temperature: {
                minimum: {
                    unit: dailyForecast.Temperature.Minimum.Unit,
                    value: dailyForecast.Temperature.Minimum.Value,
                },
                maximum: {
                    unit: dailyForecast.Temperature.Maximum.Unit,
                    value: dailyForecast.Temperature.Maximum.Value,
                }
            }
        })),
    }
}

export {
    mapWeekForecastDtoToDomain,
};

