import { extractShortDayNameFromDate } from "app/common/utils/dates";
import { IDailyForecast } from "app/weather/models/data/week-forecast";
import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "./week-day-forecast.scss";

interface IWeekDayForecastProps {
  dailyForecast: IDailyForecast;
}

const WeekDayForecast: React.FC<IWeekDayForecastProps> = ({
  dailyForecast: { date, day, night, temperature },
}) => {
  const [shouldRaise, setShouldRaise] = useState<boolean>(false);

  const dayName = extractShortDayNameFromDate(date);

  return (
    <Card
      id="week-day-forecast"
      className="week-day-forecast"
      onMouseLeave={() => setShouldRaise(false)}
      onMouseEnter={() => setShouldRaise(true)}
      raised={shouldRaise}
    >
      <div className="week-day-forecast__day-name">{dayName}</div>
      <div className="week-day-forecast__times-in-day-temps times-in-day-temps">
        <div className="times-in-day-temps__temp-item temp-item">
          {day.iconNumber && (
            <img
              className="temp-item__img"
              src={`images/${day.iconNumber}.png`}
              alt="day-temperature"
            />
          )}
          <div className="temp-item__temp">{`${temperature.maximum.value} °${temperature.maximum.unit}`}</div>
        </div>
        <div className="times-in-day-temps__temp-item temp-item">
          {night.iconNumber && (
            <img
              className="temp-item__img"
              src={`images/${night.iconNumber}.png`}
              alt="night-temperature"
            />
          )}
          <div className="temp-item__temp">{`${temperature.minimum.value} °${temperature.minimum.unit}`}</div>
        </div>
      </div>
    </Card>
  );
};

export default WeekDayForecast;
