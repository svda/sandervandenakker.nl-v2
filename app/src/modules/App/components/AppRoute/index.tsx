import * as React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../../containers/DefaultLayout';

class AppRoute extends React.Component<any> {
  public render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={this.renderWithLayout} />
    );
  }

  private renderWithLayout = () => { // Ensure the right binding
    const { ...rest } = this.props;
    const Layout = this.props.layout || DefaultLayout;

    return (
      <Layout>
        <this.props.component {...rest} />
      </Layout>
    )
  }
}

export default AppRoute;
