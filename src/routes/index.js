import React from "react";
import { Switch, Route } from "react-router-dom";

import { Overview, Startups, Credits, Investors } from '../pages'
// possibility passing parameters in routes
const routes = () => (
  <Switch>
    <Route path="/overview" exact component={Overview} />
    <Route path="/startups" component={Startups} />
    <Route path="/credits" component={Credits} />
    <Route path="/investors" component={Investors} />
  </Switch>
);

export default routes;
