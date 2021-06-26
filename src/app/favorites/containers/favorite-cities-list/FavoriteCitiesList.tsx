import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import IForecast from "app/weather/models/data/forecast";
import React from "react";
import { Card, Container } from "semantic-ui-react";

interface IFavoriteCitiesListProps {
  citiesForecasts: IForecast[];
}

const FavoriteCitiesList: React.FC<IFavoriteCitiesListProps> = ({
  citiesForecasts,
}) => {
  return (
    <Container>
      <Card.Group centered stackable itemsPerRow={4} id="favorite-items">
        {citiesForecasts?.map((cityForecast) => (
          <FavoriteCityItem key={cityForecast.id} cityForecast={cityForecast} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default FavoriteCitiesList;
