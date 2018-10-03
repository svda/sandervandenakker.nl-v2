import {
  APP_INIT_SUCCEEDED,
  APP_MENU_TOGGLED,
} from './actions';

export const initialState = {
  loading: true,
  menu: {
    active: false,
  },
  page: 'home',
};

export default function (state = initialState, action: any) {
  const { type } = action;
  switch (type) {
    case APP_INIT_SUCCEEDED: {
      return {
        ...state,
        loading: false,
      }
    }
    case APP_MENU_TOGGLED: {
      return {
        ...state,
        menu: {
          active: !state.menu.active,
        },
      };
    }
    default:
      return state;
  }
}