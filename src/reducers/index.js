import { combineReducers } from 'redux';
import users from './usersReducers.js';

const rootReducer = combineReducers({
    users
});

export default rootReducer;