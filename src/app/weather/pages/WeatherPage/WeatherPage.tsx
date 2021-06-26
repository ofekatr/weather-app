import ICity from "app/common/models/city";
import Forecast from "app/weather/components/Forecast";
import React, { useState } from "react";
import CitiesSearchBar from "../../components/CitiesSearchBar";
import "./weather-page.scss";

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<ICity>({
    cityId: "215854",
    cityName: "Tel Aviv",
  });

  return (
    <div className="weather-page">
      <div className="weather-page__search-bar">
        <CitiesSearchBar setCity={setCity} />
      </div>
      <div className="weather-page__forecast">
        <Forecast city={city} />
      </div>
    </div>
  );
};

export default WeatherPage;
