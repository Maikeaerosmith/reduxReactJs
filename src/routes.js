import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Todos from "./pages/Todos";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/todos" exact component={Todos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
