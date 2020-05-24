import axios from "axios";

export const addComment = (targetPostId) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post("http://localhost:8000/like/create",targetPostId ,{
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
      .get("http://api.riyofirsan.com/post/test", {
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
