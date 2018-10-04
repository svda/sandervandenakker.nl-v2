import { Dispatch } from 'redux';

import { auth } from '../../firebase';
import {
  AUTH_LOGIN_SUCCEEDED,
  AUTH_LOGOUT_SUCCEEDED,
} from './sagas';

export default function (dispatch: Dispatch, getState: any) {
  auth.onAuthStateChanged((user: any) => {
    if (user) {
      dispatch({
        type: AUTH_LOGIN_SUCCEEDED,
        data: {
          user,
        },
      });
    } else {
      dispatch({
        type: AUTH_LOGOUT_SUCCEEDED,
      });
    }
  });
}