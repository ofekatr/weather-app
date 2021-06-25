import { FavoritesContext } from "app/core/context/store/favorites";
import FavoriteCityItem from "app/favorites/components/FavoriteCityItem";
import React, { useContext } from "react";
import { Card, Container } from "semantic-ui-react";

const FavoriteCitiesList: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Card.Group centered stackable itemsPerRow={4} id="favorite-items">
        {favorites?.map((favorite) => (
          <FavoriteCityItem key={favorite.id} favorite={favorite} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default FavoriteCitiesList;
