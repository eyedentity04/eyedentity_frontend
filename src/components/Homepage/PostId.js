import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./post.css";
import { addLike } from "../../actioncreators/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Comment from "../Homepage/Comment";
import CommentPost from "../Homepage/CommentPost";
import { addcomment } from "../../actioncreators/comment";
import Navbar from "../Navbar";

const PostId = (props) => {
  const url = process.env.REACT_APP_API_URL;

  const { _id } = useParams();
  const [data, setData] = useState({});

  const [comments, setComments] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(`${url}/post/show/${_id}`, { headers: { token: token } })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setData(data);
      });
  }, [_id]);

  const addlike = (targetPostId) => {
    props.addLike(targetPostId);
  };

  dayjs.extend(relativeTime);

  const addCommentInPost = (newComment) => {
    props.addcomment(newComment);
    setComments(newComment);
  };

  const btnLikeClassName = data.likedByMe ? "bg-secondary" : "";
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card mt-3 w-100" style={{ borderRadius: "10px" }}>
          <div className="card-header">
            <div className="d-flex flex-row">
              <img
                src={`${url}/${data.name}`}
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              <div className="d-inline-flex flex-column">
                {/* <p className="lead font-weight-bold mb-0 ml-2">
                  {data.name.name}
                </p>  */}
                {/* <p className=" text-muted mb-0 ml-2">
                  {data.tagPlace[0].namePlace !== "undefined"
                    ? data.tagPlace[0].namePlace
                    : null}
                </p> */}
              </div>
              <p className="text-muted ml-auto">{dayjs(data.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
             {/* <p className="card-text text-muted mb-0">
              {data.tag.map((item, index) => (
                <span className="mr-1" key={index}>
                  @{item.name}
                </span>
              ))}
            </p> */}
            <p className="card-text">{data.description}</p>
            <img className="card-img-top" src={`${url}/${data.image}`} alt="" />

            <button
              type="button"
              className={`btn text-light mt-3 ${btnLikeClassName}`}
              onClick={() => {
                addlike(data._id);
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like {data.likesCount}
            </button>

            <div className=" mt-2">
              <Comment data={data} addCommentInPost={addCommentInPost} />
            </div>
          </div>
          <CommentPost data={data} comments={comments} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addLike: addLike,
  addcomment,
};

export default connect(null, mapDispatchToProps)(PostId);
