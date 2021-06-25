import React from "react";
import { Card } from "semantic-ui-react";
import "./forecast.scss";
const Forecast: React.FC = () => {
  return (
    <Card id="forecast-card" className="forecast__forecast-card forecast-card">
      <div className="forecast-card__header header">Header</div>
      <div className="forecast-card__current-forecast">Current Forecast</div>
      <div className="forecast-card__weekly-forecast weekly-forecast">
      <Card
          id="week-day-forecast"
          className="weekly-forecast__week-day-forecast"
        >
          <div>
            Sun
          </div>
          <div>
            25 °C
          </div>
        </Card>
        <Card
          id="week-day-forecast"
          className="weekly-forecast__week-day-forecast"
        >
          <div>
            Sun
          </div>
          <div>
            25 °C
          </div>
        </Card>
        <Card
          id="week-day-forecast"
          className="weekly-forecast__week-day-forecast"
        >
          <div>
            Sun
          </div>
          <div>
            25 °C
          </div>
        </Card>
        <Card
          id="week-day-forecast"
          className="weekly-forecast__week-day-forecast"
        >
          <div>
            Sun
          </div>
          <div>
            25 °C
          </div>
        </Card>
        <Card
          id="week-day-forecast"
          className="weekly-forecast__week-day-forecast"
        >
          <div>
            Sun
          </div>
          <div>
            25 °C
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Forecast;
