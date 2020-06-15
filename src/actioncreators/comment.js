import axios from "axios";

const url = process.env.REACT_APP_API_URL

export const addcomment = (data) => {  
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post(`${url}/comment/create`,data,{
        headers: { "token": token },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data._id)
        dispatch({
          type: "COMMENT_ADD",
          payload: response.data,
        });
      })
      ;
  };
};

export const getcomment = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
        const token = user.token;
        axios
          .get(`${url}/comment/show`, {
            headers: { "token": token },
          })
          .then((response) => {
            
            dispatch({
              type: "COMMENT_SHOW",
              payload: response.data,
            });
          });
  };
};
