import Forecast from "app/weather/containers/Forecast";
import React from "react";
import CitiesSearchBar from "../../components/CitiesSearchBar";
import "./weather-page.scss";

const WeatherPage: React.FC = () => {
  return (
    <div className="weather-page">
      <div className="weather-page__search-bar">
        <CitiesSearchBar />
      </div>
      <div className="weather-page__forecast">
        <Forecast />
      </div>
    </div>
  );
};

export default WeatherPage;
