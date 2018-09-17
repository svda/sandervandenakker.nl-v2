import { Dispatch } from 'redux';

import { auth } from '../../firebase';
import { AUTH_UPDATE } from './actions';

export default function (dispatch: Dispatch, getState: any) {
  auth.onAuthStateChanged((user: any) => {
    dispatch({
      type: AUTH_UPDATE,
      payload: {
        user,
      },
    });
  });
}