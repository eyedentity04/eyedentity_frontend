import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Add.css";

const CommentPost = (props) => {
  const { data } = props;

  const [comment, setComment] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function myComment() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const result = await axios
        .get(`${url}/comment/find/${props.data._id}`, {
          headers: { token: token },
        })
        .catch((err) => {
          window.alert("error", err);
        });
      setComment(result.data);
    }
    myComment();
  }, []);

  let getComment = comment.map((item, index) => {
    return (
      <div key={index}>
        <div>
          {item.comment.map((item, index) => (
            <div key={index}>
              <div className="card w-100">
                <h6 className="lead">{item.userComment.name}</h6>
                <p>{item.commentText}</p>
              </div>
            </div>
          ))}
        </div>
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
