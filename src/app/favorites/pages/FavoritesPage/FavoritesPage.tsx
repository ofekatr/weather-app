import FavoriteCitiesList from "app/favorites/containers/favorite-cities-list";
import React from "react";

const FavoritesPage: React.FC = () => {
  return (
    <div className="favorite-items-wrapper">
      <FavoriteCitiesList />
    </div>
  );
};

export default FavoritesPage;
