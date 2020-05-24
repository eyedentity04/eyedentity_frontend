import axios from "axios";

export const addLike = (targetPostId,data) =>{
  return(dispatch) =>{
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token;
    axios.post("http://api.riyofirsan.com/like/create",{targetPostId},{
      headers: { "token": token },
    })
    .then((response)=>{
      console.log(response)
      dispatch({
        type :"LIKE_POST",
        payload : response.data
      })
    })
  }
}
export const getLike = (targetPostId,data) =>{
  return(dispatch) =>{
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token;
    axios.get("http://api.riyofirsan.com/like/show",{
      headers: { "token": token },
    })
    .then((response)=>{
      console.log(response)
      dispatch({
        type :"LIKE_SHOW",
        payload : response.data
      })
    })
  }
}

