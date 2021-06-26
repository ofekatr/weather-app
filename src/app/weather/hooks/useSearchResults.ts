import ICity from 'app/common/models/city';
import { onError } from 'app/common/utils/errors/on-error';
import { useCallback, useEffect, useState } from 'react';
import { fetchSearchResults } from '../infra/weather-api/weather-api';

function useSearchResults() {
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<ICity[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const searchResultsCallback = useCallback(async () => {
        try {
            setIsLoading(true);
            const searchResultsResponse = await fetchSearchResults(searchInput);
            setSearchResults(searchResultsResponse);
        } catch (err) {
            onError(err, 'Failed to Get Search Results 😵');
            setHasError(true);
        }
        setIsLoading(false);
    }, [searchInput]);

    useEffect(() => {
        searchResultsCallback();
    }, [searchResultsCallback]);

    return {
        hasError,
        isLoading,
        searchInput,
        setSearchInput,
        searchResults,
    }
}

export default useSearchResults;