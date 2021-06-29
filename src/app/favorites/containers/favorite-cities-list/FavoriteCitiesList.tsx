import { Loading } from "app/common/components/Loading";
import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import useFavoritesPageData from "app/favorites/hooks/useFavoritesPageData";
import React from "react";
import { Card, Container } from "semantic-ui-react";

const FavoriteCitiesList: React.FC = () => {
  const { citiesForecasts, hasError, isLoading } = useFavoritesPageData();

  if (hasError) return <></>;

  if (isLoading || !citiesForecasts) return <Loading />;

  if (!citiesForecasts.length)
    return (
      <div style={{ textAlign: "center" }}>
        <h2>No favorite cities yet.</h2>
      </div>
    );

  return (
    <Container>
      <Card.Group centered stackable itemsPerRow={4} id="favorite-items">
        {citiesForecasts?.map((cityForecast) => (
          <FavoriteCityItem
            key={cityForecast.cityId}
            cityForecast={cityForecast}
          />
        ))}
      </Card.Group>
    </Container>
  );
};

export default FavoriteCitiesList;
