import AppHeader from "app/core/layout/AppHeader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PAGES_TO_ROUTES from "./constants/routes";
import "./router-outlet.scss";
const WeatherPage = React.lazy(() => import("app/weather/pages/WeatherPage"));
const FavoritesPage = React.lazy(() =>
  import("app/favorites/pages/FavoritesPage")
);

interface IAppPageProps {
  children: React.ReactNode;
}

const AppPage = ({ children }: IAppPageProps) => (
  <div className="app-page">{children}</div>
);

const AppBrowser: React.FC = () => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="router-outlet-wrapper">
          <AppHeader />
          <Switch>
            <Route
              path={PAGES_TO_ROUTES.favorites}
              render={() => (
                <AppPage>
                  <FavoritesPage />
                </AppPage>
              )}
            />
            <Route
              path={PAGES_TO_ROUTES.weather}
              render={() => (
                <AppPage>
                  <WeatherPage />
                </AppPage>
              )}
            />
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default AppBrowser;
