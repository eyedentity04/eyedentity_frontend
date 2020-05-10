import { combineReducers } from 'redux';

import regis from './register'
import login from './login'
import authReducer from "./auth";
import errorReducer from "./error";

export default combineReducers({
    regis : regis,
    login ,
    auth: authReducer, 
    errors: errorReducer
})