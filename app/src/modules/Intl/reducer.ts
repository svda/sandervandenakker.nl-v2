import {
  INTL_UPDATE,
} from './actions';

export const initialState = {
  locale: '',
  messages: {},
};

export default function (state = initialState, { type, data }: any) {
  switch (type) {
    case INTL_UPDATE: {
      return {
        ...state,
        locale: data.locale,
        messages: data.messages,
      };
    }

    default: {
      return state;
    }
  }
};
