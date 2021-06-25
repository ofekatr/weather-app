import { FavoritesContext } from "app/core/context/store/favorites";
import React, { useContext } from "react";

const WeatherPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <>
      <div>Weather Page is Working!</div>
      <div>{favorites[0].cityName}</div>
    </>
  );
};

export default WeatherPage;
