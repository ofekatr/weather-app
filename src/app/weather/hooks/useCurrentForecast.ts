import { ICity } from 'app/common/models';
import { fetchCityCurrentForecast } from 'app/common/services/weather';
import { onError } from 'app/common/utils/errors/on-error';
import { AppSettingsContext } from 'app/core/contexts/stores/app-settings';
import assert from 'assert';
import { useCallback, useContext, useEffect, useState } from 'react';
import IForecast from '../models/data/forecast';

function useCurrentForecast(city: ICity) {
    const { checkAppSettingsTemperatureMetric, temperatureUnitCode } = useContext(AppSettingsContext);

    const [isLoading, setIsLoading] = useState(false);
    const [currentForecast, setCurrentForecast] = useState<IForecast | null>(null);
    const [hasError, setHasError] = useState(false);

    const currentForecastCallback = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const currentForecast = await fetchCityCurrentForecast(city, checkAppSettingsTemperatureMetric());
                assert.ok(currentForecast, 'Forecast response has no data');
                setCurrentForecast(currentForecast);
            } catch (err) {
                onError(err, 'Failed to Get Forecast 😵');
                setHasError(true);
            }
            setIsLoading(false);
        },
        [city, temperatureUnitCode],
    )

    useEffect(() => {
        currentForecastCallback();
    }, [currentForecastCallback]);


    return {
        isLoading, hasError, forecast: currentForecast,
    }

}

export default useCurrentForecast;