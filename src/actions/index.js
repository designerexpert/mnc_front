import axios from 'axios';
import config from '../config';

export const LIST_USERS = 'LIST_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const PUT_USER = 'PUT_USER';
export const DEL_USER = 'DEL_USER';

const url = config.backend || 'http://localhost:5000';

export const getUsers = () => {
    const users = axios.get(`${url}/users`);
    return {
        type: LIST_USERS,
        payload: users,
    };
};

export const getUser = (userId) => {
    const user = axios.get(`${url}/users/${userId}`);
    return {
        type: GET_USER,
        payload: user,
    };
};

export const addUser = (user) => {
    // console.log('action addUser User:', user)
    let userId = axios.post(`${url}/register`, user)
    return {
        type: ADD_USER,
        payload: userId
    };
};

export const logInUser = (user) => {
    // console.log('action addUser User:', user)
    let loggedInUser = axios.post(`${url}/login`, user)
    return {
        type: LOGIN_USER,
        payload: loggedInUser
    };
};

export const putUser = (user) => {
    const response = axios.put(`${url}/update`, user);
    return {
        type: PUT_USER,
        payload: response,
    };
};

export const delUser = (user) => {
    const response = axios.delete(`${url}/users`, user);
    return {
        type: DEL_USER,
        payload: response,
    };
};