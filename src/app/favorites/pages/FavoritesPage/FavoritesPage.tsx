import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import React from "react";
import { Card } from "semantic-ui-react";

const FavoritesPage: React.FC = () => {
  return (
    <div className="favorite-items-wrapper">
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
    </div>
  );
};

export default FavoritesPage;
