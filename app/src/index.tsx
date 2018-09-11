import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import { messaging } from './firebase';

ReactDOM.render(
  (<App />),
  document.getElementById('root'),
);

registerServiceWorker();

messaging.onMessage(payload => {
  // tslint:disable-next-line:no-console
	console.log(payload);
});
