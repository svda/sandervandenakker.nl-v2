import { routerMiddleware, RouterState } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createTracker } from 'redux-segment';

import history from './history';
import rootReducer from './reducer';
import rootSaga from './sagas';
import addAuthListeners from './modules/Auth/listeners';

export interface IStore {
  router: RouterState;
}

// tslint:disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const router = routerMiddleware(history);
const saga = createSagaMiddleware();
const tracker = createTracker();

const middleware = [
  router,
  saga,
  tracker,
];

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

saga.run(rootSaga);

addAuthListeners(store.dispatch, store.getState);

export default store;