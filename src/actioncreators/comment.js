import axios from "axios";

const url = process.env.REACT_APP_API_URL

export const addcomment = (data) => {
  console.log(data)
  
  return (dispatch) => {
    console.log('ini data',data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post(`${url}/comment/create`,data,{
        headers: { "token": token },
      })
      .then((response) => {
        console.log("data berhasil masuk")
        dispatch({
          type: "COMMENT_ADD",
          payload: response.data,
        });
      })
      .catch(err => {
        console.log(err)
      });
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
            
            console.log(response.data);
            
            dispatch({
              type: "COMMENT_SHOW",
              payload: response.data,
            });
          });
  };
};
