import axios from "axios";

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

