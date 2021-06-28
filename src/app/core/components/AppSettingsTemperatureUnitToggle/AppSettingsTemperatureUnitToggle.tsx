import { AppSettingsContext } from "app/core/contexts/stores/app-settings";
import React, { useContext } from "react";
import "./app-settings-temperature-unit-toggle.scss";

const AppSettingsTemperatureUnitToggle: React.FC = () => {
  const {
    getAppSettingsTemperatureUnit,
    toggleAppSettingsTemperatureUnit,
  } = useContext(AppSettingsContext);

  const onClick = () => {
    toggleAppSettingsTemperatureUnit();
  };

  const appSettingsTemperatureUnit = getAppSettingsTemperatureUnit();

  return (
    <b id="toggle" onClick={onClick}>
      { appSettingsTemperatureUnit }°
    </b>
  );
};

export default AppSettingsTemperatureUnitToggle;
