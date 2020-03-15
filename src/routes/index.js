import React from "react";
import { Switch, Route } from "react-router-dom";

import { Overview, Startups, Credits, Investors, Rank, Diagnostic, Contacts, Profile, Setting } from '../pages'
// possibility passing parameters in routes
const routes = () => (
  <Switch>
    <Route path="/overview" exact component={Overview} />
    <Route path="/startups" component={Startups} />
    <Route path="/credits" component={Credits} />
    <Route path="/investors" component={Investors} />
    <Route path="/rank" component={Rank} />
    <Route path="/diagnostic" component={Diagnostic} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/profile" component={Profile} />
    <Route path="/setting" component={Setting} />
  </Switch>
);

export default routes;
