import { FavoritesContext } from 'app/core/context/store/favorites';
import { fetchCityCurrentForecast } from 'app/weather/infra/weather-api';
import IForecast from 'app/weather/models/data/forecast';
import { useCallback, useContext, useEffect, useState } from 'react';

function useFavoritesPageData() {
    const { favorites } = useContext(FavoritesContext);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [citiesForecasts, setCitiesForecasts] = useState<IForecast[] | null>(null);

    const citiesForecastsCallback = useCallback(async () => {
        try {
            setIsLoading(true);
            const responses = await Promise.all(
                favorites.map(
                    async (favorite) => await fetchCityCurrentForecast(favorite.id)
                )
            );
            setCitiesForecasts(responses);
        } catch (err) {
            setHasError(true);
        }
        setIsLoading(false);
    }, [favorites]);

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