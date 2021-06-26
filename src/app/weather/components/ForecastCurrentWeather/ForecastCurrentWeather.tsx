import React from "react";
import './forecast-current-weather.scss';

interface IForecastCurrentWeatherProps {
  className: string;
  weatherText: string;
}

const ForecastCurrentWeather: React.FC<IForecastCurrentWeatherProps> = ({
  className,
  weatherText,
}) => {
  return <div className={`${className} current-forecast`}>{weatherText}</div>
};

export default ForecastCurrentWeather;
