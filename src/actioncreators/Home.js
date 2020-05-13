import axios from 'axios'

export const add = (data) => {
  return (dispatch) => {
    axios.post("https://eyedentity-socialmedia.herokuapp.com/post/create",{headers : {
        'x-access-token': ''
    }},data)
    .then((response) => {
      dispatch({
        type: "POST_ADD",
        payload: response.data,
      });
    });
  };
};
