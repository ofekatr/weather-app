import { deepFreezeAndSeel } from 'app/common/utils/objects';
import { createContext } from 'react';
import IFavorite from '../../models/favorite';
import IFavoriteContext, { IFavoriteContextMethods, IFavoritesContextData } from './models/favorites-context';

const DEFAULT_STATE_DATA: IFavoritesContextData = {
    favorites: [
        {
            id: 'asdasd',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'asdsdasdasd',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'fdsfsdf',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'gdfgdfg',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'xczvcv',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'werewr',
            cityName: 'Tel-Aviv',
        },
        {
            id: 'ggggggggggg',
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

