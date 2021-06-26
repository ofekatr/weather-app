import useForecastPageData from "app/weather/hooks/useForecastPageData";
import React from "react";
import { Card } from "semantic-ui-react";
import ForecastCurrentWeather from "../ForecastCurrentWeather";
import ForecastHeader from "../ForecastHeader";
import WeekForecasts from "../WeekForecasts";
import "./forecast.scss";

interface IForecastProps {
  cityName: string;
}

const Forecast: React.FC<IForecastProps> = ({ cityName }) => {
  const { checkError, checkLoading, getForecastPageData } = useForecastPageData(
    cityName
  );

  const forecastPageData = getForecastPageData();

  if (checkLoading() || !forecastPageData) return <div>Loading...</div>;

  if (checkError()) return <div>An error has occured.</div>;

  const { week, current } = forecastPageData;

  return (
    <Card id="forecast-card" className="forecast__forecast-card forecast-card">
      <ForecastHeader
        cityName={cityName}
        temperature={current.temperature}
        className="forecast-card__header header"
      />
      <ForecastCurrentWeather
        currentWeather={current}
        className="forecast-card__current-weather"
      />
      <WeekForecasts
        dailyForecasts={week.dailyForecasts}
        className="forecast-card__weekly-forecast"
      />
    </Card>
  );
};

export default Forecast;
