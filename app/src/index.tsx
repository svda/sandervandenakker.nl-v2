import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import { messaging } from './firebase';
import store from './store';

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root'),
);

registerServiceWorker();

messaging.onMessage(payload => {
  // tslint:disable-next-line:no-console
	console.log(payload);
});
