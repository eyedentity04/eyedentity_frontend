import axios from "axios";
import setAuthToken from "../utils/axios";
import jwt_decode from "jwt-decode";
import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";



export const loginUser = userData => dispatch => {
    axios
        .post(`https://eyedentity-socialmedia.herokuapp.com/users/login`, userData)
        .then(res => {
            
            const token = res.data;
            
            localStorage.setItem("x-access-token", token);
            
            setAuthToken(token);
            
            const decoded = jwt_decode(token);
            
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({type: GET_ERRORS, payload: err.response.data}));
};

export const setCurrentUser = decoded => {
    return {type: SET_CURRENT_USER, payload: decoded};
};

export const setUserLoading = () => {
    return {type: USER_LOADING};
};

export const logoutUser = () => dispatch => {
    
    localStorage.removeItem("x-access-token");
    
    setAuthToken(false);
    
    dispatch(setCurrentUser({}));
};