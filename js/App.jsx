// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
