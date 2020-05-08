import axios from 'axios'

export const login = (data) => {
    return async(dispatch) => {
        try {
            const response = await axios.post("https://eyedentity-socialmedia.herokuapp.com/users/login", data)
            console.log(response.data)
            dispatch({
                type: 'USER_LOGIN',
                payload: response.data.data
            })
        }
        catch(error){
            error && alert(`${error.message}`)
        }

    }

    
};
  
