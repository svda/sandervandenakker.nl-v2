import {
  AUTH_LOGIN_SUCCEEDED,
  AUTH_LOGOUT_SUCCEEDED,
} from './sagas';

export const initialState = {
  user: {},
};

export default function (state = initialState, action: any) {
  const { type, data } = action;
  switch (type) {
    case AUTH_LOGIN_SUCCEEDED: {
      return {
        ...state,
        user: data.user,
      };
    }
    case AUTH_LOGOUT_SUCCEEDED: {
      return {
        ...state,
        user: {},
      };
    }
    default: {
      return state;
    }
  }
}