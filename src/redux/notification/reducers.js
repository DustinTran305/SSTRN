import { GET_NOTIFICATION_SUCCESS } from './constants';

const initialState = {
  listNotification: [],
};

const notificationReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        listNotification: payload,
      };
    }

    default:
      return state;
  }
};

export default notificationReducer;
