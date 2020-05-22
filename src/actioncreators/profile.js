import axios from 'axios'

export const getData = () => {
    return (dispatch) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      axios
        .get(`http://api.riyofirsan.com/post/show/${user.id}`, {
          headers: { "token": token },
        })
        .then((response) => {
          console.log(response.data);
          
          dispatch({
            type: "PROFILE_POST_SHOW",
            payload: response.data,
          });
        });
    };
  };
  