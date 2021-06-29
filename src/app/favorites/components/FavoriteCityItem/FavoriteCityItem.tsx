import ConfirmRemoveFavorite from "app/common/components/ConfirmRemoveFavorite";
import CustomPopup from "app/common/containers/Popup";
import IForecast from "app/weather/models/data/forecast";
import React, { useCallback, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import "./favorite-city-item.scss";

interface FavoriteCityItemProps {
  cityForecast: IForecast;
}

const FavoriteCityItem: React.FC<FavoriteCityItemProps> = ({
  cityForecast,
}) => {
  const [shouldRaise, setShouldRaise] = useState<boolean>(false);

  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  const onRemoveButtonClick = useCallback(() => setIsConfirmOpen(true), [
    setIsConfirmOpen,
  ]);

  return (
    <Card
      onMouseLeave={() => setShouldRaise(false)}
      onMouseEnter={() => setShouldRaise(true)}
      raised={shouldRaise}
    >
      <Card.Header className="card__card-header card-header">
        <div className="card-header__city-name">{cityForecast.cityName}</div>
        <div className="card-header__buttons">
          <CustomPopup content="Remove">
            <Button
              color="red"
              icon="trash"
              size="small"
              onClick={onRemoveButtonClick}
            ></Button>
          </CustomPopup>
          <ConfirmRemoveFavorite
            cityId={cityForecast.cityId}
            isOpen={isConfirmOpen}
            setOpen={setIsConfirmOpen}
          />
        </div>
      </Card.Header>
      <Card.Content>
        <div>{`${cityForecast.temperature.value} °${cityForecast.temperature.unit}`}</div>
        <div>{cityForecast.weatherText}</div>
      </Card.Content>
    </Card>
  );
};

export default FavoriteCityItem;
