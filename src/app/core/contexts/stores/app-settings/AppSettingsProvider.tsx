import React, { useReducer } from "react";
import appSettingsReducer from "./app-settings.reducer";
import {
  AppSettingsContext,
  DEFAULT_STATE_DATA,
  TEMPERATURE_UNITS
} from "./context";

const AppSettingsProvider: React.FC<any> = (props) => {
  const [state, dispatch] = useReducer(appSettingsReducer, DEFAULT_STATE_DATA);

  const toggleAppSettingsTemperatureUnit = () => dispatch({ type: "TOGGLE" });

  const getAppSettingsTemperatureUnit = () =>
    TEMPERATURE_UNITS[state.temperatureUnitCode - 1];

  const checkAppSettingsTemperatureMetric = () => state.temperatureUnitCode === 1;

  return (
    <AppSettingsContext.Provider
      value={{
        toggleAppSettingsTemperatureUnit,
        getAppSettingsTemperatureUnit,
        checkAppSettingsTemperatureMetric,
        temperatureUnitCode: state.temperatureUnitCode,
      }}
      {...props}
    ></AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;
