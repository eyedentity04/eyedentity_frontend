import axios from 'axios'

export const login = (data) => {
    return async(dispatch) => {
        try {
            const response = await axios.post("https://eyedentity-socialmedia.herokuapp.com/users/login", data)
            
            dispatch({
                type: 'USER_LOGIN',
                payload: response.data
            })
        }
        catch(error){
            error && alert(`${error.message}`)
        }

    }
    
    
};


export const logout = () =>{
    return {
        type: 'USER_LOGOUT'
    }
}