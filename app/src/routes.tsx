import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import DefaultLayout from './modules/App/containers/Layout';
import Loading from './modules/App/components/Loading';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./containers/NotFound'),
  loading: Loading,
});

class AppRoute extends React.Component<any> {

  public render() {
    const { component: Component, layout: Layout, ...rest } = this.props;
  
    return (
      <Route {...rest} render={this.renderRoute} />
    );
  }

  private renderRoute = () => { // Ensure Route has the right this binding...
    const { component: Component, layout: Layout, ...rest } = this.props;

    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    )
  }
}

const Routes = (props: React.Props<any>) => (
  <Switch>
    <AppRoute exact path="/" layout={DefaultLayout} component={Home} />
    <AppRoute path="*" layout={DefaultLayout} component={NotFound} />
  </Switch>
);

export default Routes;
