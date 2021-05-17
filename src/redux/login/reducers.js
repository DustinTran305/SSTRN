import { LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';

const initialState = {
    username: null,
    password: null,
    token: null
};

const userReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                username: payload.username,
                password: payload.password,
            };
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: payload.token,
            };
        }

        default:
            return state;
    }
};

export default userReducer;
