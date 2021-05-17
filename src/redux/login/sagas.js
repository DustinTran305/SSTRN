import { LOGIN_REQUEST } from './constants';
// import {URL} from './../../../../config/url';
import { loginFailure, loginSuccess } from './actions';
import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { loginApi } from '../../services/login';

export function* login(obj) {
    try {
        const response = yield call(loginApi, obj.payload);

        if (response.status === 200) {
            yield put(loginSuccess(response.data));
        } else {
            yield put(loginFailure());
        }
    } catch (err) {
        yield put(loginFailure(err));
    }
}

function* loginWatch() {
    yield takeLatest(LOGIN_REQUEST, login);
}

export default function* rootChild() {
    yield fork(loginWatch);
}