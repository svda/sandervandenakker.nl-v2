import {
  APP_MENU_TOGGLE,
  APP_PAGE_CHANGE,
  APP_USER_LOGIN,
  APP_USER_LOGOUT,
  APP_USER_UPDATE,
} from './actions';

export const initialState = {
  menu: {
    active: false,
  },
  page: 'home',
  user: {},
};

export default function (state = initialState, action: any) {
  const { type, data } = action;

  switch (type) {
    case APP_MENU_TOGGLE: {
      return {
        ...state,
        menu: {
          active: !state.menu.active,
        },
      };
    }
    case APP_PAGE_CHANGE:
      return {
        ...state,
        page: data.page,
      };
    case APP_USER_LOGIN:
      return {
        ...state,
      };
    case APP_USER_LOGOUT:
      return {
        ...state,
      };
    case APP_USER_UPDATE:
      return {
        ...state,
        user: data.user,
      };
    default:
      return state;
  }
}