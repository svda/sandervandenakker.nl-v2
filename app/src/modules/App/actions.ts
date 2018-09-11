import { auth, googleAuthProvider } from '../../firebase';

export const APP_MENU_TOGGLE = 'APP_MENU_TOGGLE';
export const APP_PAGE_CHANGE = 'APP_PAGE_CHANGE';
export const APP_USER_LOGIN = 'APP_USER_LOGIN';
export const APP_USER_LOGOUT = 'APP_USER_LOGOUT';
export const APP_USER_UPDATE = 'APP_USER_UPDATE';

export const changePage = (data: any) => {
  return {
    type: APP_PAGE_CHANGE,
    payload: data,
  };
};

export const loginUser = () => {
  auth.signInWithPopup(googleAuthProvider);
  return {
    type: APP_USER_LOGIN,
  };
}

export const logoutUser = () => {
  auth.signOut();
  return {
    type: APP_USER_LOGOUT,
  };
}

export const toggleMenu = () => {
  return {
    type: APP_MENU_TOGGLE,
  };
};