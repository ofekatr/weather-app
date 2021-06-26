import { IBaseObject } from '../models/object';

function deepFreezeAndSeel<T extends IBaseObject>(obj: T) {
    return Object.freeze(Object.seal(obj));
}

function extractExistingProperties<T extends IBaseObject>(obj: T, ...keys: Array<keyof T>) {
    const res: { [key in typeof keys[number]]: T[key] } = {} as { [key in typeof keys[number]]: T[key] };
    keys.forEach((key) => {
        if (obj[key] != undefined)
            res[key] = obj[key];
    });
    return res;
}

export {
    deepFreezeAndSeel,
    extractExistingProperties,
};

