import { fetchCityCurrentForecast } from 'app/common/services/weather';
import { onError } from 'app/common/utils/errors/on-error';
import { AppSettingsContext } from 'app/core/contexts/stores/app-settings';
import { FavoritesContext } from 'app/core/contexts/stores/favorites';
import IForecast from 'app/weather/models/data/forecast';
import { useCallback, useContext, useEffect, useState } from 'react';

function useFavoritesPageData() {
    const { checkAppSettingsTemperatureMetric, temperatureUnitCode } = useContext(AppSettingsContext);
    const { favorites } = useContext(FavoritesContext);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [citiesForecasts, setCitiesForecasts] = useState<IForecast[] | null>(null);

    const citiesForecastsCallback = useCallback(async () => {
        try {
            setIsLoading(true);
            const responses = await Promise.all(
                favorites.map(
                    async (favorite) => await fetchCityCurrentForecast(favorite, checkAppSettingsTemperatureMetric())
                )
            );
            setCitiesForecasts(responses);
        } catch (err) {
            onError(err, 'Failed to Get Favorites 😵');
            setHasError(true);
        }
        setIsLoading(false);
    }, [favorites, temperatureUnitCode]);

    useEffect(() => {
        citiesForecastsCallback();
    }, [citiesForecastsCallback]);

    return {
        hasError,
        isLoading,
        citiesForecasts,
    }
}

export default useFavoritesPageData;