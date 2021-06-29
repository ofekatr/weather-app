import { ICity, INullable } from 'app/common/models';
import { getDefaultCity } from 'app/common/services/weather';
import { onError } from 'app/common/utils/errors/on-error';
import { useCallback, useEffect, useState } from 'react';

function useDefaultCity() {
    const [defaultCity, setDefaultCity] = useState<INullable<ICity>>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const getDefaultCityCallback = useCallback(async () => {
        try {
            setIsLoading(true);
            const defCityResult = await getDefaultCity();
            setDefaultCity(defCityResult);
        } catch (err) {
            onError(err, 'Failed to Get City by Coordinations 😵');
            setHasError(true);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getDefaultCityCallback();
    }, [getDefaultCityCallback])

    return {
        hasError,
        isLoading,
        defaultCity,
    }
}

export default useDefaultCity;