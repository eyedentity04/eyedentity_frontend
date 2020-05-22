import { combineReducers } from 'redux';

import regis from './register'
import login from './login'
import homeUser from './home';
import commentUser from './comment';
import location from './TagPlace'
import profileUser from './profile';

export default combineReducers({
    regis : regis,
    login : login,
    homeUser : homeUser,
    commentUser : commentUser,
    location : location,
    profileUser:profileUser
})