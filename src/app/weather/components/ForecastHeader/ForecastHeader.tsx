import { ITemperature } from "app/weather/models/data/forecast";
import React from "react";
import { Icon } from "semantic-ui-react";
import "./forecast-header.scss";
interface IForecastHeaderProps {
  className: string;
  cityName: string;
  temperature: ITemperature;
}

const ForecastHeader: React.FC<IForecastHeaderProps> = ({
  className,
  cityName,
  temperature,
}) => {
  return (
    <div className={`${className} forecast-header`}>
      <div className="details">
        <div>{cityName}</div>
        <div>{`${temperature.value} °${temperature.unit}`}</div>
      </div>
      <div className="favorite-button">
        <Icon
          size="big"
          color="yellow"
          name={`star${true ? " outline" : ""}`}
        />
      </div>
    </div>
  );
};

export default ForecastHeader;
