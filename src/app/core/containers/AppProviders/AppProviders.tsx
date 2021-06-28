import React from "react";
import { AppSettingsProvider } from "../../contexts/stores/app-settings";
import { FavoritesProvider } from "../../contexts/stores/favorites";

const AppProviders: React.FC = (props) => {
  return (
    <AppSettingsProvider>
      <FavoritesProvider {...props}></FavoritesProvider>
    </AppSettingsProvider>
  );
};

export default AppProviders;
