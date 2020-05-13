import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))
const token = user.token
console.log(user)
console.log(token)

const headers = {
  'Content-Type' : 'multipart/form-data',
  'Accept' : 'application/json',
  'token': `Bearer ${token}`
}
console.log(headers)

export const add = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://eyedentity-socialmedia.herokuapp.com/post/create",{ headers: headers },data
      )
      .then((response) => {
        dispatch({
          type: "POST_ADD",
          payload: response.data,
        });
      });
  };
};
