import { authSagas } from './modules/Auth/sagas';
import { updateIntl, updateIntlSaga } from './modules/Intl/sagas';

function* initSaga() {
  yield updateIntl();
}

export default function* rootSaga() {
  yield [
    initSaga(),
    authSagas(),
    updateIntlSaga(),
  ];
}