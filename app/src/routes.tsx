import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes = (props: any) => (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
