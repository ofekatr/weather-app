import IFavorite from 'app/core/contexts/stores/favorites/models/favorite';

export interface IFavoritesContextData {
    favorites: IFavorite[];
}

export interface IFavoriteContextMethods {
    addFavorite: (newFavorite: IFavorite) => void;
    removeFavorite: (favoriteId: string) => void;
    checkExists: (favoriteId: string) => boolean;
}

export default interface IFavoriteContext extends IFavoritesContextData, IFavoriteContextMethods { }