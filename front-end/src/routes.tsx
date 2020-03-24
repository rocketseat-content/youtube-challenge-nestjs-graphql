import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/Board';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Board} />

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
}
