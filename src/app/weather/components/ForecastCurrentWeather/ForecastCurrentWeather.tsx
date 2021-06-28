import IForecast from "app/weather/models/data/forecast";
import React from "react";
import "./forecast-current-weather.scss";

interface IForecastCurrentWeatherProps {
  className: string;
  currentWeather: IForecast;
}

const ForecastCurrentWeather: React.FC<IForecastCurrentWeatherProps> = ({
  className,
  currentWeather: { weatherText, weatherIconNumber },
}) => {
  return (
    <div className={`${className} current-forecast`}>
      <div className="current-forecast__weather-text">{weatherText}</div>
      {weatherIconNumber && (
        <img
          className="current-forecast__weather-image"
          src={`images/${weatherIconNumber}.png`}
          alt="weather-icon"
        />
      )}
    </div>
  );
};

export default ForecastCurrentWeather;
