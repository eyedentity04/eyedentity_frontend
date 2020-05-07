import axios from 'axios'
export const login = (data) =>{
    return dispatch => {
        axios.post('https://eyedentity-socialmedia.herokuapp.com/users/login',data)
        .then(res =>{
            dispatch({
                type: "USER_LOGIN",
                payload: res.data
            })
        })
    }
}