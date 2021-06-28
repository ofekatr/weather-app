export interface IAppSettingsContextData {
    temperatureUnitCode: 1 | 2;
}

export interface IAppSettingsContextMethods {
    getAppSettingsTemperatureUnit: () => 1 | 2;
    toggleAppSettingsTemperatureUnit: () => void;
}

interface IAppSettingsContext extends IAppSettingsContextData, IAppSettingsContextMethods { }

export default IAppSettingsContext;