import React from "react";
import { Card } from "semantic-ui-react";
import "./week-day-forecast.scss";

const WeekDayForecast: React.FC = () => {
  return (
    <Card id="week-day-forecast" className="week-day-forecast">
      <div>Sun</div>
      <div>25 °C</div>
    </Card>
  );
};

export default WeekDayForecast;
