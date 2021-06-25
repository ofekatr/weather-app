import React from "react";
import CitiesSearchBar from "../../components/CitiesSearchBar";
import './weather-page.scss';

const WeatherPage: React.FC = () => {
  return (
    <>
      <div className="weather-page__search-bar">
        <CitiesSearchBar />
      </div>
    </>
  );
};

export default WeatherPage;
