import AppHeader from "app/core/layout/AppHeader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PAGES_TO_ROUTES from "./constants/routes";
import './router-outlet.scss';

const WeatherPage = React.lazy(() => import("app/weather/pages/WeatherPage"));
const FavoritesPage = React.lazy(() =>
  import("app/favorites/pages/FavoritesPage")
);

const AppBrowser: React.FC = () => {
  return (
    <div className="router-outlet-wrapper">
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <AppHeader />
          <Switch>
            <Route path={PAGES_TO_ROUTES.favorites} component={FavoritesPage} />
            <Route path={PAGES_TO_ROUTES.weather} component={WeatherPage} />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default AppBrowser;
