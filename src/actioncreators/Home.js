import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const add = (data) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .post(`${url}/post/create`, data, {
        headers: { token: token },
      })
      .then((response) => {
        window.alert("success")
        dispatch({
          type: "POST_ADD",
          payload: response.data,
        });
      })
      .catch(err =>{
        alert("error")
      })
      dispatch ({
        type : "HIDE"
      })
  };
};

export const getData = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(`${url}/post/test`, { headers: { token: token } })
      .then((posts) => {
        axios
          .get(`${url}/like/like`, { headers: { token: token } })
          .then((likes) => {
            const newData = posts.data.map((item) => {
              return {
                ...item,
                likesCount: likes.data.find((like) => item._id == like.postId)
                  ? likes.data.find((like) => item._id == like.postId).likes
                  : 0,
              };
            });
            dispatch({
              type: "POST_SHOW",
              payload: newData,
            });
          });
      });
  };
};

export const addLike = (targetPostId) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .post(
        `${url}/like/create`,
        { targetPostId },
        {
          headers: { token: user.token },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: "POST_ADD_LIKE",
          payload: response.data,
        });
      })
      .catch((err) => err);
  };
};

export const user = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  return (dispatch) => {
    axios
      .get(`${url}/users/show/${id}`)
      .then((response) => {
        dispatch({
          type: "USER",
          payload: response.data,
        });
      })
      .catch((err) => {
        window.alert(err);
      });

  };
};

export const editProfile = (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  return (dispatch) => {
    axios
      .put(`${url}/users/edit/${id}`, data)
      .then((response) => {
        window.alert("success");
        console.log(response);
        dispatch({
          type: "EDIT_PROFILE",
          payload: response.data,
        });
        dispatch({
          type : "HIDE"
        })
      })
      .catch((err) => alert("failed to update yout profile", err));
  };
};


export const saveHide = () => {
  return { type : "HIDE"}
}