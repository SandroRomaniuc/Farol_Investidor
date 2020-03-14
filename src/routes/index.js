import React from "react";
import { Switch, Route } from "react-router-dom";

import { Overview, Tickets, Credits } from '../pages'
// possibility passing parameters in routes
const routes = () => (
  <Switch>
    <Route path="/overview" exact component={Overview} />
    <Route path="/tickets" component={Tickets} />
    <Route path="/credits" component={Credits} />
  </Switch>
);

export default routes;
