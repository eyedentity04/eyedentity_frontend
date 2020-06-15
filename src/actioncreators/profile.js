import axios from 'axios'


const url = process.env.REACT_APP_API_URL

export const getData = () => {
    return (dispatch) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      axios
        .get(`${url}/post/show/${user.id}`, {
          headers: { "token": token },
        })
        .then((response) => {
          dispatch({
            type: "PROFILE_POST_SHOW",
            payload: response.data,
          });
        });
    };
  };
  