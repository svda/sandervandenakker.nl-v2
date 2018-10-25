import * as React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl-redux';
import { Switch } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import history from '../../history';
import theme from '../../theme';
import { AppRoute } from '../App/components';

import createRoutes from '../../routes';
const routes = createRoutes();

class App extends React.Component<IAppStateProps> {
  public render() {
    const { locale, messages } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <IntlProvider key={locale} locale={locale} messages={messages}>
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map((route) => (
                <AppRoute key={route.name} {...route} />
              ))}
            </Switch>
          </ConnectedRouter>
        </IntlProvider>
      </MuiThemeProvider>
    );
  }
}

interface IAppStateProps {
  locale: any;
  messages: any;
  user: any;
}

export default connect<IAppStateProps>(
  ({ intl, auth }: any) => ({
    locale: intl.locale,
    messages: intl.messages,
    user: auth.user,
  }),
)(App);