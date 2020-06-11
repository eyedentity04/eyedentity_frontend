import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Add.css";

const CommentPost = (props) => {
  const { data } = props;

  const [comment, setComment] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  console.log(data._id)
  
  useEffect(() => {
    async function myComment() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const result = await axios
        .get(`${url}/comment/find/${data._id}`, {
          headers: { token: token },
        })
        .then((result) => {
          console.log(result)
          setComment(result.data)
        })
        .catch((err) => {
          window.alert("error", err); 
        });
     
     
    }
    console.log(myComment())
    myComment();
  }, [data]);

  // useEffect(() =>{
  //   console.log(data._id)
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const token = user.token;
  //   axios.get(`${url}/comment/find/${data._id}`,{
  //     headers : {"token" : token}
  //   })
  //   .then((result) => {
  //     console.log(result)
  //     setComment(result.data)
  //   })
  // },[data])



  let getComment = comment.map((item, index) => {
    console.log(item.userComment.name)
    return (
      <div key={index}>
          <ul  className="list-group list-group-flush">
            <li className="list-group-item border-top">
              <div className="d-inline-flex flex-row">
                <img
                  src={`${url}/${item.userComment.image}`}
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                  }}
                />
                <p className="lead ml-1 mb-1">{item.userComment.name}</p>
              </div>
              <p className="card-text">{item.commentText}</p>
            </li>
          </ul>
      </div>
    );
  });

  return (
    <div>
      <div>{getComment}</div>
    </div>
  );
};

export default CommentPost;
