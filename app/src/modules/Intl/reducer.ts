import {
  INTL_UPDATE_SUCCEEDED,
} from './sagas';

export const initialState = {
  locale: 'en',
  messages: {},
};

export default function (state = initialState, { type, data }: any) {
  switch (type) {
    case INTL_UPDATE_SUCCEEDED: {
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
