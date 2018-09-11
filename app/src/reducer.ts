import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './modules/App/reducer';
import intlReducer from './modules/Intl/reducer';

export default combineReducers({
  app,
  intl: intlReducer,
  router: routerReducer,
});