import { CLEAR_ALL_ERROR, CLEAR_ERROR } from './constants';

const initialState = { errors: [] };

const errorReducer = (state = initialState, action) => {
  const { type, error, payload } = action;
  const matches = /(.*)_(FAILURE)/.exec(type);
  if (!matches) {
    switch (type) {
      case CLEAR_ALL_ERROR:
        return { ...state, errors: [] };
      case CLEAR_ERROR:
        return {
          ...state,
          errors: state.errors.filter(
            err => error && err && err.id !== error.id,
          ),
        };
      default:
        return state;
    }
  }

  const newState = {
    ...state,
  };
  let tempError = error || payload;

  if (tempError) {
    tempError = { id: Date.now(), ...tempError };
    newState.errors = newState.errors.concat(tempError);
  }
  return newState;
};

export default errorReducer;
