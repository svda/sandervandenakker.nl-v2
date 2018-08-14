import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import store from './store';
import theme from './theme';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { messaging } from './firebase';

ReactDOM.render(
  (<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root'),
);

registerServiceWorker();

messaging.onMessage(payload => {
  // tslint:disable-next-line:no-console
	console.log(payload);
});
