import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import { messaging } from './firebase';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

messaging.onMessage(payload => {
  // tslint:disable-next-line:no-console
	console.log(payload);
});
