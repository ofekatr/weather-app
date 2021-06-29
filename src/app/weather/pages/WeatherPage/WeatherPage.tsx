import { Loading } from "app/common/components/Loading";
import ICity from "app/common/models/city";
import Forecast from "app/weather/components/Forecast";
import useDefaultCity from "app/weather/hooks/useDefaultCity";
import React, { useState } from "react";
import CitiesSearchBar from "../../components/CitiesSearchBar";
import "./weather-page.scss";

const WeatherPage: React.FC = () => {
  const { defaultCity, hasError, isLoading } = useDefaultCity();

  const [city, setCity] = useState<ICity>(
    defaultCity ?? {
      cityId: "215854",
      cityName: "Tel Aviv",
    }
  );

  if (hasError) return <></>;

  if (isLoading || !defaultCity) return <Loading />;

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
