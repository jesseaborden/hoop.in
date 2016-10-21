//Libs
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home/home_component.js';
import Create from './components/Create/create_component.js';
import Share from './components/Share/share_component.js';
import Room from './components/Room/room_component.js';
import Join from './components/Join/join_component.js';

// Routes
const routes = (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/share" component={Share} />
      <Route path="/room" component={Room} />
      <Route path="/join" component={Join} />
    </Route>
  </Router>
);
export default routes;
