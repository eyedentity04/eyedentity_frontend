import { combineReducers } from 'redux';

import regis from './register'
import login from './login'

export default combineReducers({
    regis : regis,
    login : login
})