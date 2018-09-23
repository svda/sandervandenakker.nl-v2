// import config from '../Config';

import {
  NAVIGATION_LOCATION_CHANGE,
} from './actions';

export const initialState = {
  menu: {
    active: false,
  },
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case NAVIGATION_LOCATION_CHANGE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}