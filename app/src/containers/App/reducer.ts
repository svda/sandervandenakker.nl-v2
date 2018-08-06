import {
  APP_PAGE_CHANGED,
  APP_LOGIN_USER,
  APP_LOGOUT_USER,
  APP_UPDATE_USER,
} from './actions';

export const initialState = {
  page: 'home',
  user: {},
};

export default function (state = initialState, action:any) {
  const { type, data } = action;

  switch (type) {
    case APP_PAGE_CHANGED:
      return {
        ...state,
        page: data.page,
      };
    case APP_LOGIN_USER:
      return {
        ...state,
      };
    case APP_LOGOUT_USER:
      return {
        ...state,
      };
    case APP_UPDATE_USER:
      return {
        ...state,
        user: data.user,
      };
    default:
      return state;
  }
}