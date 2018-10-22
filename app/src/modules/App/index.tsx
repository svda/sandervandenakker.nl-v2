import * as React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import history from '../../history';
import theme from '../../theme';
import Routes from '../../routes';

class App extends React.Component<IAppStateProps> {
  public render() {
    const { locale, messages } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <IntlProvider key={locale} locale={locale} messages={messages}>
          <ConnectedRouter history={history}>
            <Routes />
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