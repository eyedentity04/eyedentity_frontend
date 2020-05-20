import axios from "axios";

export const addComment = (data) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post("http://api.riyofirsan.com/post/create", data, {
        headers: { "token": token },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "COMMENT_ADD",
          payload: response.data,
        });
      });
  };
};

export const getComment = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get("http://api.riyofirsan.com/post/show", {
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