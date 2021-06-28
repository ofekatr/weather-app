export interface IAppSettingsContextData {
    temperatureUnitCode: 1 | 2;
}

export interface IAppSettingsContextMethods {
    getAppTemperatureUnit: () => 1 | 2;
    toggleAppTemperatureUnit: () => void;
}

interface IAppSettingsContext extends IAppSettingsContextData, IAppSettingsContextMethods { }

export default IAppSettingsContext;