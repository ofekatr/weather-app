import React from "react";
import { Icon } from "semantic-ui-react";
import './forecast-header.scss';
interface IForecastHeaderProps {
  className: string;
}

const ForecastHeader: React.FC<IForecastHeaderProps> = ({ className }) => {
  return (
    <div className={`${className} forecast-header`}>
      <div className="details">
        <div>Some details</div>
        <div>38 °C</div>
      </div>
      <div className="favorite-button">
        <Icon size='big' color='yellow' name={`star${true ? ' outline' : ''}`}/>
      </div>
    </div>
  );
};

export default ForecastHeader;
