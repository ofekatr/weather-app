import { extractShortDayNameFromDate } from "app/common/utils/dates";
import { IDailyForecast } from "app/weather/models/data/week-forecast";
import React from "react";
import { Card } from "semantic-ui-react";
import "./week-day-forecast.scss";

interface IWeekDayForecastProps {
  dailyForecast: IDailyForecast;
}

const WeekDayForecast: React.FC<IWeekDayForecastProps> = ({
  dailyForecast: { date, dayIconNumber, nightIconNumber, temperature },
}) => {
  const dayName = extractShortDayNameFromDate(date);

  return (
    <Card id="week-day-forecast" className="week-day-forecast">
      <div>{dayName}</div>
      <div>{`${temperature.value} °${temperature.unit}`}</div>
    </Card>
  );
};

export default WeekDayForecast;
