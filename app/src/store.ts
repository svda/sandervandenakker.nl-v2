import { routerMiddleware, RouterState } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createTracker } from 'redux-segment';
import thunk from 'redux-thunk';

import history from './history';
import rootReducer from './reducer';
import addAppListeners from './modules/App/listeners';

export interface IStore {
  router: RouterState;
}

// tslint:disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const router = routerMiddleware(history);
const tracker = createTracker();

const middleware = [
  router,
  thunk,
  tracker,
];

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

addAppListeners(store.dispatch, store.getState);

export default store;