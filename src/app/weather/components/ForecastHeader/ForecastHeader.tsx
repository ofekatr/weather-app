import ICity from "app/common/models/city";
import { FavoritesContext } from "app/core/context/store/favorites";
import { ITemperature } from "app/weather/models/data/forecast";
import React, { useCallback, useContext } from "react";
import { Icon } from "semantic-ui-react";
import "./forecast-header.scss";
interface IForecastHeaderProps {
  className: string;
  city: ICity;
  temperature: ITemperature;
}

const ForecastHeader: React.FC<IForecastHeaderProps> = ({
  className,
  city: { cityId, cityName },
  temperature,
}) => {
  const { addFavorite, checkExists, removeFavorite } = useContext(
    FavoritesContext
  );

  const handleFavoriteButtonClicked = useCallback(() => {
    if (checkExists(cityId)) return removeFavorite(cityId);
    return addFavorite(cityId);
  }, [cityId, addFavorite, checkExists, removeFavorite]);

  return (
    <div className={`${className} forecast-header`}>
      <div className="forecast-header__details details">
        <div className="details__city-name">{cityName}</div>
        <div className="details__temperature">{`${temperature.value} °${temperature.unit}`}</div>
      </div>
      <div className="forecast-header__favorite-button">
        <Icon
          size="big"
          color="red"
          name={`heart${checkExists(cityId) ? "" : " outline"}`}
          onClick={handleFavoriteButtonClicked}
        />
      </div>
    </div>
  );
};

export default ForecastHeader;
