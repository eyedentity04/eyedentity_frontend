import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://api.riyofirsan.com/users/register",data)
      dispatch ({
        type : "USER_REGISTER",
        payload : response.data.data
      })
    }catch (error){
      error && alert(`register failed ${error.message}`)
    }
  }
}

