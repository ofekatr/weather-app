import { fetchWeekForecast } from 'app/common/services/weather';
import { onError } from 'app/common/utils/errors/on-error';
import { AppSettingsContext } from 'app/core/contexts/stores/app-settings';
import assert from 'assert';
import { useCallback, useContext, useEffect, useState } from 'react';
import IWeekForecast from '../models/data/week-forecast';

function useWeekForecast(cityId: string) {
    const { checkAppSettingsTemperatureMetric, temperatureUnitCode } = useContext(AppSettingsContext);

    const [isLoading, setIsLoading] = useState(false);
    const [weekForecast, setWeekForecast] = useState<IWeekForecast | null>(null);
    const [hasError, setHasError] = useState(false);

    const weekForecastCallback = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const weekForecast = await fetchWeekForecast(cityId, checkAppSettingsTemperatureMetric());
                assert.ok(weekForecast, 'Forecast response has no data');
                setWeekForecast(weekForecast);
            } catch (err) {
                onError(err, 'Failed to Get Weekly Forecast 😵');
                setHasError(true);
            }
            setIsLoading(false);
        },
        [cityId, checkAppSettingsTemperatureMetric, temperatureUnitCode],
    )

    useEffect(() => {
        weekForecastCallback();
    }, [weekForecastCallback]);


    return {
        isLoading, hasError, weekForecast,
    }

}

export default useWeekForecast;