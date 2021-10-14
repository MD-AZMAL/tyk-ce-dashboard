import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

import "./App.scss";
import RouteNames from "./routes";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={RouteNames.dashboard} />
      </Route>
      <Route path={RouteNames.dashboard}>
        <DashboardPage />
      </Route>
    </Switch>
  );
};

export default App;
