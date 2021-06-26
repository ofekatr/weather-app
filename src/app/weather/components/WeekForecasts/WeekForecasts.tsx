import { IPropsWithClassName } from "app/common/models/component-props";
import { IDailyForecast } from "app/weather/models/data/week-forecast";
import React from "react";
import { Card } from "semantic-ui-react";
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
      <Card.Group stackable itemsPerRow={5}>
        {dailyForecasts.map((dailyForecast) => (
          <WeekDayForecast key={dailyForecast.date.toString()} dailyForecast={dailyForecast} />
        ))}
      </Card.Group>
    </div>
  );
};

export default WeekForecasts;
