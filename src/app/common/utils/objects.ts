import { IBaseObject } from '../models/object';

function deepFreezeAndSeel<T extends IBaseObject>(obj: T) {
    return Object.freeze(Object.seal(obj));
}

export {
    deepFreezeAndSeel,
};
