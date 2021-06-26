import React, { useReducer } from "react";
import {
  DEFAULT_STATE_DATA,
  FavoritesContext,
} from "./context/favorites.context";
import { IFavoritesContextData } from "./context/models/favorites-context";
import FAVORITES_ACTIONS from "./favorites.actions";
import favoritesReducer from "./favorites.reducer";

const FavoritesProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(favoritesReducer, DEFAULT_STATE_DATA);

  const addFavorite = (newFavoriteId: string) =>
    dispatch({
      type: FAVORITES_ACTIONS.ADD,
      payload: { newFavorite: { id: newFavoriteId } },
    });

  const removeFavorite = (favoriteId: string) => {
    dispatch({
      type: FAVORITES_ACTIONS.REMOVE,
      payload: { favoriteId },
    });
  };

  const checkExists = (favoriteId: string) =>
    !!(state as IFavoritesContextData).favorites.find(
      (favorite) => favorite.id === favoriteId
    );

  const { favorites } = state as IFavoritesContextData;

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, checkExists }}
      {...props}
    ></FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
