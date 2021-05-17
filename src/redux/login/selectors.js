import { createSelector } from 'reselect';

export const select = state => state.home;

export const getToken = createSelector(
  select,
  state => state.token,
);
