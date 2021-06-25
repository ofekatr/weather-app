import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import React from "react";
import { Card } from "semantic-ui-react";

const FavoritesPage: React.FC = () => {
  return (
    <Card.Group>
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

export default FavoritesPage;
