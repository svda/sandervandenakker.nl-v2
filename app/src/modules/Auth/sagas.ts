import { put, takeLatest } from 'redux-saga/effects';

import { auth, googleAuthProvider } from '../../firebase';

export const AUTH_LOGIN_REQUESTED = 'AUTH_LOGIN_REQUESTED';
export const AUTH_LOGIN_SUCCEEDED = 'AUTH_LOGIN_SUCCEEDED';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';

export const AUTH_LOGOUT_REQUESTED = 'AUTH_LOGOUT_REQUESTED';
export const AUTH_LOGOUT_SUCCEEDED = 'AUTH_LOGOUT_SUCCEEDED';
export const AUTH_LOGOUT_FAILED = 'AUTH_LOGOUT_FAILED';

export const AUTH_UPDATE_SUCCEEDED = 'AUTH_UPDATED';

export function* loginUser() {
  try {
    auth.signInWithPopup(googleAuthProvider);
  } catch (e) {
    yield put({
      type: AUTH_LOGIN_FAILED,
    });
  }
}

export function* logoutUser() {
  try {
    auth.signOut();
  } catch (e) {
    yield put({
      type: AUTH_LOGOUT_FAILED,
    });
  }
}

export function* authSagas() {
  yield takeLatest(AUTH_LOGIN_REQUESTED, loginUser);
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logoutUser);
}