import assert from 'assert';
import { useCallback, useEffect, useState } from 'react';
import { fetchWeekForecast } from '../infra/weather-api/weather-api';
import IWeekForecast from '../models/data/week-forecast';

function useWeekForecast(cityId: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [weekForecast, setWeekForecast] = useState<IWeekForecast | null>(null);
    const [hasError, setHasError] = useState(false);

    const weekForecastCallback = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const weekForecast = await fetchWeekForecast(cityId);
                assert.ok(weekForecast, 'Forecast response has no data');
                setWeekForecast(weekForecast);
            } catch (err) {
                setHasError(true);
            }
            setIsLoading(false);
        },
        [cityId],
    )

    useEffect(() => {
        weekForecastCallback();
    }, [weekForecastCallback]);


    return {
        isLoading, hasError, weekForecast,
    }

}

export default useWeekForecast;