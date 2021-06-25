import React, { useReducer } from "react";
import IFavorite from "../models/favorite";
import {
  DEFAULT_STATE_DATA,
  FavoritesContext
} from "./context/favorites.context";
import { IFavoritesContextData } from "./context/models/favorites-context";
import FAVORITES_ACTIONS from "./favorites.actions";
import favoritesReducer from "./favorites.reducer";

const FavoritesProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(favoritesReducer, DEFAULT_STATE_DATA);

  const addFavorite = (newFavorite: IFavorite) =>
    dispatch({
      type: FAVORITES_ACTIONS.ADD,
      payload: { newFavorite },
    });

  const removeFavorite = (favoriteId: string) =>
    dispatch({
      type: FAVORITES_ACTIONS.REMOVE,
      payload: { favoriteId },
    });

  const { favorites } = state as IFavoritesContextData;

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }} {...props}
    ></FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
