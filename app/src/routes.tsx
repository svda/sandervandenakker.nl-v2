import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Loading from './containers/App/components/Loading';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./containers/NotFound'),
  loading: Loading,
});

const Routes = (props: React.Props<any>) => (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
