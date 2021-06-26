import { FavoritesContext } from "app/core/context/store/favorites";
import IForecast from "app/weather/models/data/forecast";
import React, { useContext, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import "./favorite-city-item.scss";

interface FavoriteCityItemProps {
  cityForecast: IForecast;
}

const FavoriteCityItem: React.FC<FavoriteCityItemProps> = ({
  cityForecast,
}) => {
  const { removeFavorite } = useContext(FavoritesContext);

  const handleRemoveButtonClicked = () => removeFavorite(cityForecast.id);

  const [shouldRaise, setShouldRaise] = useState<boolean>(false);

  return (
    <Card
      onMouseLeave={() => setShouldRaise(false)}
      onMouseEnter={() => setShouldRaise(true)}
      raised={shouldRaise}
    >
      <Card.Header className="card__card-header card-header">
        <div className="card-header__city-name">{cityForecast.cityName}</div>
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
