import { GET_NOTIFICATION_REQUEST } from './constants';
import { getNotificationFailure, getNotificationSuccess } from './actions';
import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { getAllNotificationsNew } from '../../services/getList';
export function* getNotification(obj) {
  try {
    const respone = yield call(getAllNotificationsNew, obj.payload);
    console.log('a',respone, respone.data.data)

    if (respone.status === 200) {
      // const { items, total } = respone.data;
      // const { skip, isLoadMore } = obj.payload;

      yield put(
        // getNotificationSuccess({
        //   items,
        //   total,
        //   skip,
        //   isLoadMore,
        // }),
        getNotificationSuccess(respone.data.data),
      );
    }
    // console.log(respone.data)
  } catch (err) {
    yield put(getNotificationFailure(err));
  }
}

function* getNotificationWatch() {
  yield takeLatest(GET_NOTIFICATION_REQUEST, getNotification);
}

export default function* rootChild() {
  yield fork(getNotificationWatch);
}
