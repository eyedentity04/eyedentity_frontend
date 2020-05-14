import axios from "axios";

export const add = (data) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    console.log(user);
    console.log(token);
    axios
      .post("https://eyedentity-socialmedia.herokuapp.com/post/create", data, {
        headers: { "token": token },
      })
      .then((response) => {
        dispatch({
          type: "POST_ADD",
          payload: response.data,
        });
      });
  };
};
