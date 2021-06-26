import { deepFreezeAndSeel } from 'app/common/utils/objects';

const FAVORITES_ACTIONS: { [key: string]: string } =
    deepFreezeAndSeel({
        ADD: 'ADD',
        REMOVE: 'REMOVE',
        CHECK_EXISTS: 'CHECK_EXISTS',
    });


export type IFavoritesActions = keyof typeof FAVORITES_ACTIONS;

export default FAVORITES_ACTIONS;