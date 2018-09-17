import config from '../Config';
// import messages from './languages/en';

import {
  INTL_UPDATE,
} from './actions';

export const initialState = {
  locale: config.get('intl.defaultLocale'),
  // messages,
};

export default function (state = initialState, action: any) {
  if (action.type !== INTL_UPDATE) {
    return state;
  }

  return { ...state, ...action.payload }
};
