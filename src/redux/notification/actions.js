import {
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_FAILURE,
} from './constants';

export const getNotificationRequest = payload => ({
  type: GET_NOTIFICATION_REQUEST,
  payload,
});

export const getNotificationSuccess = payload => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload,
});

export const getNotificationFailure = payload => ({
  type: GET_NOTIFICATION_FAILURE,
  payload,
});
