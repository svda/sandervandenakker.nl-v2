// import  { delay } from 'redux-saga';
import { all, put } from 'redux-saga/effects';

import { authSagas } from './modules/Auth/sagas';
import { intlSagas, updateIntl } from './modules/Intl/sagas';

function* initSaga() {
  try {
    yield all([
      updateIntl(),
      // delay(1000),
    ]);
    yield put({
      type: 'APP_INIT_SUCCEEDED',
    })
  } catch (e) {
    yield put({
      type: 'APP_INIT_FAILED',
    })
  }
}

export default function* rootSaga() {
  yield all([
    initSaga(),
    authSagas(),
    intlSagas(),
  ]);
}