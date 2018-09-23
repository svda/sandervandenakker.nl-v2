// import { delay } from 'redux-saga'
import { /*call,*/ put, /*takeEvery*/ } from 'redux-saga/effects'
import API from './api';

export function* initAppSaga() {
  try {
    const data = yield API.fetch('/config');
    yield put({
      type: 'CONFIG_LOAD_SUCCEEDED',
      data,
    });
    yield updateIntlSaga(data.intl);
  } catch (error) {
    yield put({
      type: 'CONFIG_LOAD_FAILED',
      error,
    });
  }
}

export function* updateIntlSaga(intl: any) {
  yield put({
    type: 'INTL_UPDATE',
    data: {
      locale: intl.locale,
      messages: intl.messages,
    },
  })
}

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({ type: 'INCREMENT' })
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

export default function* rootSaga() {
  yield [
    initAppSaga(),
    // watchIncrementAsync(),
  ];
}