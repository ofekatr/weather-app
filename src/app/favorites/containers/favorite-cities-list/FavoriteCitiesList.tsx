import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import React from "react";
import { Card } from "semantic-ui-react";

const FavoriteCitiesList: React.FC = () => {
  return (
    <Card.Group id="favorite-items">
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
      <FavoriteCityItem />
    </Card.Group>
  );
};

export default FavoriteCitiesList;
