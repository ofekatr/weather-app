import useCurrentForecast from './useCurrentForecast';
import useWeekForecast from './useWeekForecast';

function useForecastPageData(cityId: string) {
    const currentForecastRes = useCurrentForecast(cityId);
    const weekForecastRes = useWeekForecast(cityId);

    const checkLoading = () => currentForecastRes.isLoading || weekForecastRes.isLoading;
    const checkError = () => currentForecastRes.hasError || weekForecastRes.hasError;
    const getForecastPageData = () =>
        !currentForecastRes.forecast || !weekForecastRes.weekForecast ?
            null :
            ({
                current: {
                    ...currentForecastRes.forecast,
                },
                week: {
                    ...weekForecastRes.weekForecast
                }
            });

    return {
        checkLoading,
        checkError,
        getForecastPageData,
    };
}

export default useForecastPageData;