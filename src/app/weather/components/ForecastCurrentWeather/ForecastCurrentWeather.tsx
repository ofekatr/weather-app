import React from "react";
import './forecast-current-weather.scss';

interface IForecastCurrentWeatherProps {
  className: string;
}

const ForecastCurrentWeather: React.FC<IForecastCurrentWeatherProps> = ({
  className,
}) => {
  return <div className={`${className} current-forecast`}>Current Weather</div>
};

export default ForecastCurrentWeather;
