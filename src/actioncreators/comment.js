import axios from "axios";

export const addComment = (data) => {
  return (dispatch) => {
    console.log('ini data',data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
    .post("https://api.riyofirsan.com/comment/create",data,{
        headers: { "token": token },
      })
      .then((response) => {
        console.log(response)
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

export const getComment = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get("https://api.riyofirsan.com/comment/show", {
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
