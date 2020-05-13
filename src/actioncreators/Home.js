import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = user.token;
console.log(user);
console.log(token);

export const add = (data) => {
  return (dispatch) => {
    axios
      .post("https://eyedentity-socialmedia.herokuapp.com/post/create", data, {headers: { 'token': token }})
      .then((response) => {
        dispatch({
          type: "POST_ADD",
          payload: response.data,
        });
      });
  };
};
