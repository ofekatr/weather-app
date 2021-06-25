import { deepFreezeAndSeel } from 'app/common/utils/object';
import { createContext } from 'react';
import IFavorite from '../../models/favorite';
import IFavoriteContext, { IFavoriteContextMethods, IFavoritesContextData } from './models/favorites-context';

const DEFAULT_STATE_DATA: IFavoritesContextData = {
    favorites: [
        {
            id: 'x',
            cityName: 'Tel-Aviv',
        }
    ],
};

const DEFAULT_STATE_METHODS: IFavoriteContextMethods = deepFreezeAndSeel({
    removeFavorite: (_favoriteId: string) => { },
    addFavorite: (_newFavorite: IFavorite) => { },
})

const DEFAULT_STATE: IFavoriteContext = {
    ...DEFAULT_STATE_DATA,
    ...DEFAULT_STATE_METHODS,
}

const FavoritesContext = createContext(DEFAULT_STATE);

export { FavoritesContext, DEFAULT_STATE_DATA, DEFAULT_STATE };

