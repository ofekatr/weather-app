import AppHeader from "app/core/layout/AppHeader.ts/AppHeader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PAGES_TO_ROUTES from "./constants/routes";

const WeatherPage = React.lazy(() => import("app/weather/pages/WeatherPage"));
const FavoritesPage = React.lazy(() =>
  import("app/favorites/pages/FavoritesPage")
);

const AppBrowser: React.FC = () => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path={PAGES_TO_ROUTES.favorites} component={FavoritesPage} />
          <Route path={PAGES_TO_ROUTES.weather} component={WeatherPage} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default AppBrowser;
