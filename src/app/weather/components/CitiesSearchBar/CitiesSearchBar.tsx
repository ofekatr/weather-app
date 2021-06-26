import ICity from "app/common/models/city";
import useSearchResults from "app/weather/hooks/useSearchResults";
import React, { useCallback } from "react";
import { Search } from "semantic-ui-react";
import "./search-bar.scss";

interface ICitiesSearchBarProps {
  setCity: React.Dispatch<React.SetStateAction<ICity>>;
}

const CitiesSearchBar: React.FC<ICitiesSearchBarProps> = ({ setCity }) => {
  const {
    hasError,
    isLoading,
    searchResults,
    setSearchInput,
  } = useSearchResults();

  const onSearchChange = useCallback((_e, data) => setSearchInput(data.value), [
    setSearchInput,
  ]);

  const onResultSelect = useCallback(
    (_e, data) => {
      const { title: cityName, id: cityId } = data.result;
      setCity({ cityId, cityName });
    },
    [setCity]
  );

  if (hasError) return <div>An error has occured</div>;

  return (
    <Search
      onSearchChange={onSearchChange}
      onResultSelect={onResultSelect}
      results={searchResults.map(({ cityId, cityName }) => ({
        title: cityName,
        id: cityId,
      }))}
      fluid
      loading={isLoading}
      placeholder={"Search a city..."}
      size="small"
      id="search-bar"
    />
  );
};

export default CitiesSearchBar;
