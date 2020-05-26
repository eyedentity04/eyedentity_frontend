import axios from "axios";

const url = process.env.REACT_APP_API_URL

export const add = (data) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post(`${url}/post/create`, data, {
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

export const getData = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(`${url}/post/test`, {
        headers: { "token": token },
      })
      .then((response) => {
          dispatch({
          type: "POST_SHOW",
          payload: response.data
        });
      });
  };
};

export const addLike = (targetPostId) => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem("user"))
      
      axios.post(`${url}/like/create`,{targetPostId},{
        headers: { "token": user.token },
      })
      .then(response => {
        dispatch({
          type: "POST_ADD_LIKE",
          payload: response.data
        })
      })
      .catch(err => err)
  }
}

export const user = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const id = user.id
  return (dispatch) => {
    axios.get(`${url}/users/show/${id}`)
    .then( response => {
      dispatch({
        type : "USER",
        payload : response.data
      })
    })
    .catch(err =>{
      window.alert(err)
    })
  }
}