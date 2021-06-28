import ICity from "app/common/models/city";
import useForecastPageData from "app/weather/hooks/useForecastPageData";
import React from "react";
import { Card } from "semantic-ui-react";
import ForecastCurrentWeather from "../ForecastCurrentWeather";
import ForecastHeader from "../ForecastHeader";
import WeekForecasts from "../WeekForecasts";
import "./forecast.scss";

interface IForecastProps {
  city: ICity;
}

const Forecast: React.FC<IForecastProps> = ({ city }) => {
  const { checkError, checkLoading, getForecastPageData } = useForecastPageData(
    city
  );

  const forecastPageData = getForecastPageData();

  return (
    <Card
      raised
      id="forecast-card"
      className="forecast__forecast-card forecast-card"
    >
      {checkError() ? (
        <div>An error has occured.</div>
      ) : checkLoading() || !forecastPageData ? (
        <div>Loading...</div>
      ) : (
        <>
          <ForecastHeader
            city={city}
            temperature={forecastPageData.current.temperature}
            className="forecast-card__header header"
          />
          <ForecastCurrentWeather
            currentWeather={forecastPageData.current}
            className="forecast-card__current-weather"
          />
          <WeekForecasts
            dailyForecasts={forecastPageData.week.dailyForecasts}
            className="forecast-card__weekly-forecast"
          />
        </>
      )}
    </Card>
  );
};

export default Forecast;
