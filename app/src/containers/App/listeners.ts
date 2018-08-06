import { Dispatch } from 'redux';

import { auth } from '../../firebase';
import { APP_UPDATE_USER } from './actions';

export default function (dispatch: Dispatch, getState: any) {
  auth.onAuthStateChanged((user: any) => {
    dispatch({
      type: APP_UPDATE_USER,
      data: {
        user,
      }
    });
  });
}