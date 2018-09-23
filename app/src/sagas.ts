// import { delay } from 'redux-saga'
import { /*call,*/ put, /*takeEvery*/ } from 'redux-saga/effects'
import API from './api';

export function* initAppSaga() {
  yield updateIntlSaga();
}

export function* updateIntlSaga() {
  try {
    const data = yield API.fetch('/translations');
    yield put({
      type: 'INTL_UPDATE',
      data: {
        locale: data.intl.locale,
        messages: data.intl.messages,
      },
    });
  } catch (error) {
    yield put({
      type: 'ERROR',
      error,
    });
  }
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