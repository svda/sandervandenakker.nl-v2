import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from '../../theme';
import Layout from './containers/Layout';

class App extends React.Component<IAppStateProps> {
  public render() {
    const { locale, messages } = this.props;
    console.log(locale, messages)
    return (
      <MuiThemeProvider theme={theme}>
        <IntlProvider key={locale} locale={locale} messages={messages}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
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