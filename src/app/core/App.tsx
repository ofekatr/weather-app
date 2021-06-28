import RouterOutlet from "app/core/containers/RouterOutlet";
import React from "react";
import AppContent from "./containers/AppContent/AppContent";
import AppProviders from "./containers/AppProviders/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <AppContent>
          <RouterOutlet />
        </AppContent>
      </div>
    </AppProviders>
  );
}

export default App;
