import axios from "axios";

// const url_register = 'https://eyedentity-socialmedia.herokuapp.com/users/register'

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

// export const register = (data) =>{
//     return dispatch => {
//         axios.post('https://eyedentity-socialmedia.herokuapp.com/users/register',data)
//         .then(res =>{
//             dispatch({
//                 type: "USER_REGISTER",
//                 payload: res.data.data
//             })
//         })
//     }
// }
