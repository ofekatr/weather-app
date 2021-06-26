import FavoriteCitiesList from "app/favorites/containers/favorite-cities-list";
import useFavoritesPageData from "app/favorites/hooks/useFavoritesPageData";
import React from "react";

const FavoritesPage: React.FC = () => {
  const { citiesForecasts, hasError, isLoading } = useFavoritesPageData();
  
  if (hasError) return <div>An error has occured</div>

  if (isLoading || !citiesForecasts) return <div>Loading...</div>

  return (
    <div className="favorite-items-wrapper">
      <FavoriteCitiesList citiesForecasts={citiesForecasts}/>
    </div>
  );
};

export default FavoritesPage;
