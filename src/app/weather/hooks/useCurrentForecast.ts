import { onError } from 'app/common/utils/errors/on-error';
import assert from 'assert';
import { useCallback, useEffect, useState } from 'react';
import { fetchCityCurrentForecast } from '../infra/weather-api';
import IForecast from '../models/data/forecast';

function useCurrentForecast(cityId: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [currentForecast, setCurrentForecast] = useState<IForecast | null>(null);
    const [hasError, setHasError] = useState(false);

    const currentForecastCallback = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const currentForecast = await fetchCityCurrentForecast(cityId);
                assert.ok(currentForecast, 'Forecast response has no data');
                setCurrentForecast(currentForecast);
            } catch (err) {
                onError(err, 'Failed to Get Forecast 😵');
                setHasError(true);
            }
            setIsLoading(false);
        },
        [cityId],
    )

    useEffect(() => {
        currentForecastCallback();
    }, [currentForecastCallback]);


    return {
        isLoading, hasError, forecast: currentForecast,
    }

}

export default useCurrentForecast;