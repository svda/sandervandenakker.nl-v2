import { Dispatch } from 'redux';

import { auth } from '../../firebase';
import { APP_USER_UPDATE } from './actions';

export default function (dispatch: Dispatch, getState: any) {
  auth.onAuthStateChanged((user: any) => {
    dispatch({
      type: APP_USER_UPDATE,
      data: {
        user,
      },
    });
  });
}