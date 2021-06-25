import { FavoritesContext } from "app/core/context/store/favorites";
import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import React, { useContext } from "react";
import { Card } from "semantic-ui-react";

const FavoriteCitiesList: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Card.Group id="favorite-items">
      {favorites.map((favorite) => (
        <FavoriteCityItem key={favorite.id} favorite={favorite}/>
      ))}
    </Card.Group>
  );
};

export default FavoriteCitiesList;
