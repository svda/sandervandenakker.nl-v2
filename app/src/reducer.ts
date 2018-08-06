import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './containers/App/reducer';

export default combineReducers({
  router: routerReducer,
  app,
});