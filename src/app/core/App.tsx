import RouterOutlet from "app/core/containers/RouterOutlet";
import React from "react";
import { FavoritesProvider } from "./context/store/favorites";

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <RouterOutlet />
      </div>
    </FavoritesProvider>
  );
}

export default App;
