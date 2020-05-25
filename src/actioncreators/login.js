import axios from "axios";

const url = process.env.REACT_APP_API_URL

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/users/login`,
        data
      );
      
      console.log(response.data)
      
      dispatch({
        type: "USER_LOGIN",
        payload: response.data,
      });
    } catch (error) {
      error && alert(`login failed ,${error.message}`);
    }
  };
};

export const logout = () => {
  return {
    type: "USER_LOGOUT",
  };
};
