import IFavorite from 'app/core/context/store/models/favorite';
import React from "react";
import { Card, Button } from "semantic-ui-react";
import "./favorite-city-item.scss";

interface FavoriteCityItemProps {
  favorite: IFavorite;
}

const FavoriteCityItem: React.FC<FavoriteCityItemProps> = ({ favorite }) => {
  return (
    <Card>
      <Card.Header className="card__card-header card-header">
        <div className="card-header__city-name">{favorite.cityName}</div>
        <div className="card-header__buttons">
          <Button color="red" icon="trash" size="small"></Button>
        </div>
      </Card.Header>
      <Card.Content>
        <div>38 °C</div>
        <div>Partially Cloudy</div>
      </Card.Content>
    </Card>
  );
};

export default FavoriteCityItem;
