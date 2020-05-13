import { combineReducers } from 'redux';

import regis from './register'
import login from './login'
import homeUser from './home';

export default combineReducers({
    regis : regis,
    login : login,
    homeUser : homeUser
})