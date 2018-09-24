import { put, takeLatest } from 'redux-saga/effects';
import API from '../../api';

export const INTL_UPDATE_REQUESTED: any = 'INTL_UPDATE_REQUESTED';
export const INTL_UPDATE_SUCCEEDED: any = 'INTL_UPDATE_SUCCEEDED';
export const INTL_UPDATE_FAILED: any = 'INTL_UPDATE_FAILED';

export function* updateIntl(locale: string = 'en') {
  try {
    const data = yield API.fetch(`/translations/${locale}`);
    yield put({
      type: INTL_UPDATE_SUCCEEDED,
      data: {
        locale: data.intl.locale,
        messages: data.intl.messages,
      },
    });
  } catch (e) {
    yield put({
      type: INTL_UPDATE_FAILED,
      message: e.message,
    });
  }
}

export function* updateIntlSaga() {
  yield takeLatest(INTL_UPDATE_REQUESTED, updateIntl);
}
