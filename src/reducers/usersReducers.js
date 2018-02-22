import {
    LIST_USERS,
    ADD_USER,
    PUT_USER,
    DEL_USER,
    LOGIN_USER,
} from '../actions';


export default (user = {}, action) => {
    switch (action.type) {
        case LIST_USERS:
            return action.payload.data;
        case ADD_USER:
            if (action.payload.data) {
                if (action.payload.data.message === 'success') {
                    return { registered: true };
                } else {
                    return { registered: false };
                }
            }
            break;
        case LOGIN_USER:
            return { authenticated: action.payload.data };
        case PUT_USER:
            return action.payload.data;
        case DEL_USER:
            return action.payload.data;
        default:
            return user;
    }
}