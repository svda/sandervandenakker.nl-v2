// import config from '../Config';

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_UPDATE,
} from './actions';

export const initialState = {
  user: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
      };
    case AUTH_UPDATE:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
}