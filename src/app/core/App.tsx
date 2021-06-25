import RouterOutlet from "app/core/containers/RouterOutlet";
import React from "react";
import AppContent from "./containers/AppContent/AppContent";
import { FavoritesProvider } from "./context/store/favorites";

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <AppContent>
          <RouterOutlet />
        </AppContent>
      </div>
    </FavoritesProvider>
  );
}

export default App;
