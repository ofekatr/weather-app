import { deepFreezeAndSeel } from 'app/common/utils/objects';
import { createContext } from 'react';
import IFavoriteContext, { IFavoriteContextMethods, IFavoritesContextData } from './models/favorites-context';

const DEFAULT_STATE_DATA: IFavoritesContextData = {
    favorites: [
        {
            cityId: 'asdasd',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'asdsdasdasd',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'fdsfsdf',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'gdfgdfg',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'xczvcv',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'werewr',
            cityName: 'Tel Aviv'
        },
        {
            cityId: 'ggggggggggg',
            cityName: 'Tel Aviv'
        }
    ],
};

const DEFAULT_STATE_METHODS: IFavoriteContextMethods = deepFreezeAndSeel({
    removeFavorite: (_favoriteId: string) => { },
    addFavorite: (_newFavorite: string) => { },
    checkExists: (_favoriteId: string) => false,
})

const DEFAULT_STATE: IFavoriteContext = {
    ...DEFAULT_STATE_DATA,
    ...DEFAULT_STATE_METHODS,
}

const FavoritesContext = createContext(DEFAULT_STATE);

export { FavoritesContext, DEFAULT_STATE_DATA, DEFAULT_STATE };

