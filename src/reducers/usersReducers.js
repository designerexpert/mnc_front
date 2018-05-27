import {
    LIST_USERS,
    ADD_USER,
    PUT_USER,
    DEL_USER,
    LOGIN_USER,
} from '../actions';

// let userTemplate = {
//     id: 7,
//     email: '',
//     auth: false,
//     createdAt: '',
//     token: '',
// }

const updateLocalStorage = (user) => {
    return localStorage.setItem('user', JSON.stringify(user));
}

const clearLocalStorage = () => {
    return localStorage.setItem('user', JSON.stringify({}));
}

const retrieveLocalStorage = () => {
    let initUser = JSON.parse(localStorage.getItem('user'));
    return initUser === null ? {} : { authenticated: initUser };
}

export default (user = retrieveLocalStorage(), action) => {
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
            updateLocalStorage(action.payload.data);
            return { authenticated: action.payload.data };
        case PUT_USER:
            return action.payload.data;
        case DEL_USER:
            clearLocalStorage();
            return action.payload.data;
        default:
            return user;
    }
}