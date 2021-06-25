import { FavoritesContext } from "app/core/context/store/favorites";
import IFavorite from "app/core/context/store/models/favorite";
import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import "./favorite-city-item.scss";

interface FavoriteCityItemProps {
  favorite: IFavorite;
}

const FavoriteCityItem: React.FC<FavoriteCityItemProps> = ({ favorite }) => {
  const { removeFavorite } = useContext(FavoritesContext);

  const handleRemoveButtonClicked = () => removeFavorite(favorite.id);

  return (
    <Card>
      <Card.Header className="card__card-header card-header">
        <div className="card-header__city-name">{favorite.cityName}</div>
        <div className="card-header__buttons">
          <Button
            onClick={handleRemoveButtonClicked}
            color="red"
            icon="trash"
            size="small"
          ></Button>
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
