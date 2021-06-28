import ICity from 'app/common/models/city';
import useCurrentForecast from './useCurrentForecast';
import useWeekForecast from './useWeekForecast';

function useForecastPageData(city: ICity) {
    const currentForecastRes = useCurrentForecast(city);
    const weekForecastRes = useWeekForecast(city.cityId);

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