import { createContext } from 'react';
import IAppSettingsContext, { IAppSettingsContextData, IAppSettingsContextMethods } from './models/app-settings-context';

const TEMPERATURE_UNITS = ['C', 'F'];

const DEFAULT_STATE_DATA: IAppSettingsContextData = {
    temperatureUnitCode: 1,
}

const DEFAULT_STATE_METHODS: IAppSettingsContextMethods = {
    getAppSettingsTemperatureUnit: () => 1,
    toggleAppSettingsTemperatureUnit: () => { },
}

const DEFAULT_STATE: IAppSettingsContextMethods = {
    ...DEFAULT_STATE_METHODS,
}

const AppSettingsContext = createContext(DEFAULT_STATE);

export {
    TEMPERATURE_UNITS,
    DEFAULT_STATE_DATA,
    DEFAULT_STATE_METHODS,
    DEFAULT_STATE,
    AppSettingsContext,
};
