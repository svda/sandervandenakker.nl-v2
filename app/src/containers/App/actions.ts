import { Dispatch } from 'redux';

import { auth, googleAuthProvider } from '../../firebase';

export const APP_PAGE_CHANGED = 'APP_PAGE_CHANGED';
export const APP_LOGIN_USER = 'APP_LOGIN_USER';
export const APP_LOGOUT_USER = 'APP_LOGOUT_USER';
export const APP_UPDATE_USER = 'APP_UPDATE_USER';

export const updatePage = (data: any) => (dispatch: Dispatch) => {
  // dispatch({
  //   type: APP_PAGE_CHANGED,
  //   payload: data,
  // });
};

export const loginUser = () => {
  auth.signInWithPopup(googleAuthProvider);
  return {
    type: APP_LOGIN_USER,
  }
}

export const logoutUser = () => {
  auth.signOut();
  return {
    type: APP_LOGOUT_USER,
  }
}

