import axios from "axios";


const url = process.env.REACT_APP_API_URL


export const register = (data,history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`,data)
      dispatch ({
        type : "USER_REGISTER",
        payload : response.data.data,
      })
      history.push("/login")
      alert("success")

    }catch (error){
      if (error) {
        const failedRegister = JSON.stringify(error.response.data)
        error && alert(` ${failedRegister}`)
      }
    }
  }
}

