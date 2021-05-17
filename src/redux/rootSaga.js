import { all, fork } from 'redux-saga/effects';
import home from './login/sagas';
import notification from './notification/sagas';

export default function* rootSaga() {
  yield all([
    fork(home), 
    fork(notification),
  ]);
}
