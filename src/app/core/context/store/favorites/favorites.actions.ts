import { deepFreezeAndSeel } from 'app/common/utils/objects';

const FAVORITES_ACTIONS: { [key: string]: string } =
    deepFreezeAndSeel({
        ADD: 'ADD',
        REMOVE: 'REMOVE',
        CHECK_EXISTS: 'CHECK_EXISTS',
    });


type FAVORITES_ACTIONS = keyof typeof FAVORITES_ACTIONS;

export default FAVORITES_ACTIONS;