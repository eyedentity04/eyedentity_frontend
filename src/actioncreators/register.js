import axios from "axios";
import {useHistory} from 'react-router-dom'

const url = process.env.REACT_APP_API_URL

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`,data)
      
      dispatch ({
        type : "USER_REGISTER",
        payload : response.data.data,
        
      })
    }catch (error){
      error && alert(`something wrong when you input data try again ${error.message}`)
    }
  }
}

