import FavoriteCitiesList from "app/favorites/containers/favorite-cities-list";
import React from "react";
import { Card } from "semantic-ui-react";
import './favorites-page.scss';

const FavoritesPage: React.FC = () => {
  return (
    <Card raised className="favorite-items-wrapper" id="wrapper">
        <FavoriteCitiesList />
    </Card>
  );
};

export default FavoritesPage;
