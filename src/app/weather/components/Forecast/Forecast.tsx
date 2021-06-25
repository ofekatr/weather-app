import React from "react";
import { Card } from "semantic-ui-react";
import ForecastCurrentWeather from "../ForecastCurrentWeather";
import ForecastHeader from "../ForecastHeader";
import WeekDayForecast from "../WeekDayForecast";
import "./forecast.scss";
const Forecast: React.FC = () => {
  return (
    <Card id="forecast-card" className="forecast__forecast-card forecast-card">
      <ForecastHeader className="forecast-card__header header" />
      <ForecastCurrentWeather className="forecast-card__current-weather" />
      <div className="forecast-card__weekly-forecast weekly-forecast">
        <WeekDayForecast />
        <WeekDayForecast />
        <WeekDayForecast />
        <WeekDayForecast />
        <WeekDayForecast />
      </div>
    </Card>
  );
};

export default Forecast;
