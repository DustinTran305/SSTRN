import { createSelector } from 'reselect';

export const select = state => state.notification;

export const getListNotification = createSelector(
  select,
  state => state.listNotification,
);
