import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://eyedentity-socialmedia.herokuapp.com/users/register",
      data
    );
   
    dispatch({
      type: "USER_REGISTER",
      payload: response.data.data,
    });
  };
};


