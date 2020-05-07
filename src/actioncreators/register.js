import axios from 'axios'
export const register = (data) =>{
    return dispatch => {
        axios.post('https://eyedentity-socialmedia.herokuapp.com/users/register',data)
        .then(res =>{
            dispatch({
                type: "USER_REGISTER",
                payload: res.data
            })
        })
    }
}
