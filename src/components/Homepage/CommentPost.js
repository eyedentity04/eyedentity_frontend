import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Add.css";

const CommentPost = (props) => {
  const { data } = props;

  const [comment, setComment] = useState([]);

  const url = process.env.REACT_APP_API_URL;
  
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios.get(`${url}/comment/find/${props.id}`,{
      headers : {"token" : token}
    })
    .then((result) => {
      setComment(result.data)
    })
  },[comment])


  let getComment = comment.map((item, index) => {
    return (
      <div key={index}>
          <ul  className="list-group list-group-flush">
            <li className="list-group-item border-top">
              <div className="d-inline-flex flex-row">
                <img
                  src={`${url}/${item.userComment.image}`}
                  alt = "undifined"
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
      <div className="container">
      <p>There are {getComment.length} comments</p>
      </div>
      <div>{getComment}</div>
    </div>
  );
};

export default CommentPost;
