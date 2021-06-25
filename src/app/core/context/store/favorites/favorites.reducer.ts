import IFavorite from '../models/favorite';
import IFavoriteContext from './context/models/favorites-context';
import FAVORITES_ACTIONS from './favorites.actions';

export interface IAddFavoritePayload {
    newFavorite: IFavorite;
}

export interface IRemoveFavoritePayload {
    favoriteId: string;
}

const ACTION_TO_HANDLER: any = {
    [FAVORITES_ACTIONS.ADD]:
        (state: IFavoriteContext, { newFavorite }: IAddFavoritePayload) => (
            {
                ...state,
                favorites: [
                    ...state.favorites,
                    newFavorite,
                ]
            }
        ),
    [FAVORITES_ACTIONS.REMOVE]: (
        state: IFavoriteContext,
        { favoriteId }: IRemoveFavoritePayload
    ) => ({
        ...state,
        favorites: state.favorites.filter(
            (favorite) => favorite.id !== favoriteId
        )
    }),
}

function favoritesReducer(state: IFavoriteContext, action: any) {
    return ACTION_TO_HANDLER[action.type] ?? state;
}

export default favoritesReducer;