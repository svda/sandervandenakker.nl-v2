import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import store from '../../store';
import theme from '../../theme';
import Layout from './containers/Layout';

// const reactIntlLocaleData = {
//   en: () => import('react-intl/locale-data/en'),
// };

// const reactIntlMessagesData = {
//   en: () => import('../../i18n/locales/en'),
// }

// function loadLocale(locale: any) {
//   reactIntlLocaleData[locale]()
//     .then((intlData: any) => {
//       addLocaleData(intlData);
//     });
// }

// function loadMessages(locale: any) {
//   reactIntlMessagesData[locale]()
//     .then((intlData: any) => {
//       addLocaleData(intlData);
//     });
// }

// const language = reactIntlLocaleData.en; // TODO Make dynamic

class App extends React.Component {

  public render() {
    return (
      <StoreProvider store={store}>
        <MuiThemeProvider theme={theme}>
          <IntlProvider locale="en">
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </IntlProvider>
        </MuiThemeProvider>
      </StoreProvider>
    );
  }

}

export default App;