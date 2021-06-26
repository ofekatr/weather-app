import { IPropsWithClassName } from "app/common/models/component-props";
import { IDailyForecast } from "app/weather/models/data/week-forecast";
import React from "react";
import WeekDayForecast from "../WeekDayForecast";
import "./week-forecast.scss";

interface IWeekForecastsProps extends IPropsWithClassName {
  dailyForecasts: IDailyForecast[];
}

const WeekForecasts: React.FC<IWeekForecastsProps> = ({
  className,
  dailyForecasts,
}) => {
  return (
    <div className={`${className} weekly-forecast`}>
      {dailyForecasts.map((dailyForecast) => (
        <WeekDayForecast dailyForecast={dailyForecast} />
      ))}
    </div>
  );
};

export default WeekForecasts;
