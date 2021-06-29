import { deepFreezeAndSeel } from 'app/common/utils/objects';
import { createContext } from 'react';
import IFavorite from '../models/favorite';
import IFavoriteContext, { IFavoriteContextMethods, IFavoritesContextData } from './models/favorites-context';

const DEFAULT_STATE_DATA: IFavoritesContextData = {
    favorites: [],
};

const DEFAULT_STATE_METHODS: IFavoriteContextMethods = deepFreezeAndSeel({
    removeFavorite: (_favoriteId: string) => { },
    addFavorite: (_newFavorite: IFavorite) => { },
    checkExists: (_favoriteId: string) => false,
})

const DEFAULT_STATE: IFavoriteContext = {
    ...DEFAULT_STATE_DATA,
    ...DEFAULT_STATE_METHODS,
}

const FavoritesContext = createContext(DEFAULT_STATE);

export { FavoritesContext, DEFAULT_STATE_DATA, DEFAULT_STATE };

