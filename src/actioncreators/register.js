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
      alert("success")

    }catch (error){
      if (error.message) {
        const failedRegister = JSON.stringify(error.response.data)
        error && alert(` ${failedRegister}`)
      }
    }
  }
}

