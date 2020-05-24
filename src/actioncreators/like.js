// import axios from "axios";

// export const addLike = (targetPostId) =>{
//   console.log(targetPostId)
//   return(dispatch) =>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     const token = user.token;
//     console.log(token)
//     axios.post("http://api.riyofirsan.com/like/create",targetPostId,{
//       headers: { "token": token },
//     })
//     .then((response)=>{
//       console.log(response)
//       dispatch({
//         type :"LIKE_POST",
//         payload : response.data
//       })
//     })
//     .catch( err =>{
//       console.log(err)
//     })
//   }
// }
// export const getLike = (targetPostId,data) =>{
//   return(dispatch) =>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     const token = user.token;
//     axios.get("http://api.riyofirsan.com/like/show",{
//       headers: { "token": token },
//     })
//     .then((response)=>{
//       console.log(response)
//       dispatch({
//         type :"LIKE_SHOW",
//         payload : response.data
//       })
//     })
//   }
// }

