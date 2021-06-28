import { deepFreezeAndSeel } from 'app/common/utils/objects';
import { IAppSettingsContextData } from './context/models/app-settings-context';

const ACTION_TO_HANDLER: { [key: string]: (state: IAppSettingsContextData, payload?: any) => IAppSettingsContextData } = deepFreezeAndSeel({
    TOGGLE: (state: IAppSettingsContextData) => ({
        ...state,
        temperatureUnitCode: 1 + (state.temperatureUnitCode % 2) as 1 | 2,
    })
});

function favoritesReducer(state: IAppSettingsContextData, action: any) {
    return ACTION_TO_HANDLER[action.type](state, action.payload) ?? state;
}

export default favoritesReducer;