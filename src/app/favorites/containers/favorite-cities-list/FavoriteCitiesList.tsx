import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import useFavoritesPageData from "app/favorites/hooks/useFavoritesPageData";
import React from "react";
import { Card, Container } from "semantic-ui-react";

const FavoriteCitiesList: React.FC = () => {
  const { citiesForecasts, hasError, isLoading } = useFavoritesPageData();

  if (hasError) return <div></div>;

  if (isLoading || !citiesForecasts) return <div>Loading...</div>;

  return (
    <Container>
      <Card.Group centered stackable itemsPerRow={4} id="favorite-items">
        {citiesForecasts?.map((cityForecast) => (
          <FavoriteCityItem key={cityForecast.cityId} cityForecast={cityForecast} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default FavoriteCitiesList;
