import { deepFreezeAndSeel } from 'app/common/utils/object';

const FAVORITES_ACTIONS: { [key: string]: string } =
    deepFreezeAndSeel({
        ADD: 'ADD',
        REMOVE: 'REMOVE'
    });

export default FAVORITES_ACTIONS;