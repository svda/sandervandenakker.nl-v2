import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes = (props: any) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
