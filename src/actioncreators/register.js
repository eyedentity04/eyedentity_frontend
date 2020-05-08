import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://eyedentity-socialmedia.herokuapp.com/users/register",
      data
    );
    console.log(response);

    dispatch({
      type: "USER_REGISTER",
      payload: response.data.data,
    });
  };
};


