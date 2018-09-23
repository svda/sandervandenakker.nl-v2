import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import appReducer from './modules/App/reducer';
import authReducer from './modules/Auth/reducer';
import intlReducer from './modules/Intl/reducer';
import navigationReducer from './modules/Navigation/reducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  intl: intlReducer,
  navigation: navigationReducer,
  router: routerReducer,
});