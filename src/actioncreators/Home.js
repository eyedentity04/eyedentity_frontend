import axios from "axios";

export const add = (data) => {
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
          type: "POST_ADD",
          payload: response.data,
        });
      });
  };
};

export const getData = () => {
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
          type: "POST_SHOW",
          payload: response.data,
        });
      });
  };
};
