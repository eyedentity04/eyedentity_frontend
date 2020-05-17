import axios from "axios";

export const addLike = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    const id = user.id
    axios
      .post("http://api.riyofirsan.com/post/create",id, data, {
        headers: { "token": token },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "LIKE_POST",
          payload: response.data,
        });
      });
  };
};

