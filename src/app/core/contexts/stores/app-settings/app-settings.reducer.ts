import IAppSettingsContext from './context/models/app-settings-context';

const ACTION_TO_HANDLER: { [key: string]: (state: IAppSettingsContext, payload?: any) => IAppSettingsContext } = {
    TOGGLE: (state: IAppSettingsContext) => ({
        ...state,
        temperatureUnitCode: 1 + (state.temperatureUnitCode % 2) as 1 | 2,
    })
}

function favoritesReducer(state: IAppSettingsContext, action: any) {
    return ACTION_TO_HANDLER[action.type](state, action.payload) ?? state; 
}

export default favoritesReducer;