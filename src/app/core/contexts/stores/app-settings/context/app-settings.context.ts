import IAppSettingsContext, { IAppSettingsContextData, IAppSettingsContextMethods } from './models/app-settings-context'

const DEFAULT_STATE_DATA: IAppSettingsContextData = {
    temperatureUnitCode: 1,
}

const DEFAULT_STATE_METHODS: IAppSettingsContextMethods = {
    getAppTemperatureUnit: () => 1,
    toggleAppTemperatureUnit: () => {},
}

const DEFAULT_STATE: IAppSettingsContext = {
    ...DEFAULT_STATE_DATA,
    ...DEFAULT_STATE_METHODS,
}

export default DEFAULT_STATE;