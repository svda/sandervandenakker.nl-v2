import { auth, googleAuthProvider } from '../../firebase';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_UPDATE = 'AUTH_UPDATE';

export const loginUser = () => {
  auth.signInWithPopup(googleAuthProvider);
  return {
    type: AUTH_LOGIN,
  };
}

export const logoutUser = () => {
  auth.signOut();
  return {
    type: AUTH_LOGOUT,
  };
}
