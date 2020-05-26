import axios from "axios";

const url = process.env.REACT_APP_API_URL

// export const register = (data) => {
//   return async (dispatch) => {
//     const response = await axios.post(
//       "http://eyedentity-socialmedia.herokuapp.com/users/register",
//       data
//     );
   
//     dispatch({
//       type: "USER_REGISTER",
//       payload: response.data.data,
//     });
    
//   };
// };

// import axios from "axios";

// export const login = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "http://eyedentity-socialmedia.herokuapp.com/users/login",
//         data
//       );
      
//       console.log(response.data)
      
//       dispatch({

//         type: "USER_LOGIN",
//         payload: response.data,
//       });
//     } catch (error) {
//       error && alert(`login failed ,${error.message}`);
//     }
//   };
// };

// export const logout = () => {
//   return {
//     type: "USER_LOGOUT",
//   };
// };

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`,data)
      dispatch ({
        type : "USER_REGISTER",
        payload : response.data.data
      })
    }catch (error){
      error && alert(`something wrong when you input data try again ${error.message}`)
    }
  }
}

