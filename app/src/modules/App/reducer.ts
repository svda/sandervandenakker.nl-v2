// import config from '../Config';

import {
  APP_CONFIG_UPDATE,
  APP_MENU_TOGGLE,
  APP_PAGE_CHANGE,
} from './actions';

export const initialState = {
  menu: {
    active: false,
  },
  page: 'home',
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case APP_CONFIG_UPDATE: {
      return {
        ...state,
        config: payload,
      }
    }
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
        page: payload.page,
      };
    default:
      return state;
  }
}