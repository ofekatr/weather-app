import RouterOutlet from "app/core/containers/RouterOutlet";
import React from "react";
import AppContent from "./containers/AppContent/AppContent";
import AppSettingsProvider from "./contexts/stores/app-settings/AppSettingsProvider";
import { FavoritesProvider } from "./contexts/stores/favorites";

function App() {
  return (
    <AppSettingsProvider>
      <FavoritesProvider>
        <div className="App">
          <AppContent>
            <RouterOutlet />
          </AppContent>
        </div>
      </FavoritesProvider>
    </AppSettingsProvider>
  );
}

export default App;
