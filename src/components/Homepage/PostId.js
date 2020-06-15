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
import TagsInput from "react-tagsinput";

const PostId = (props) => {

  const url = process.env.REACT_APP_API_URL;

  const { _id } = useParams();
  const [data, setData] = useState({});
  const [post,setPost] = useState({})
  const [tag,setTag] = useState([])
  const [like,setlike] = useState({})
  const [place,setPlace] = useState([])

  const [comments, setComments] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(`${url}/post/show/${_id}`, { headers: { token: token } })
      .then((res) => {
        axios
        .get(`${url}/like/like`, { headers: { token: token } })
        .then((likes) => {
          setlike( {        
            likesCount : likes.data.find((like) => res.data._id == like.postId)
            ? likes.data.find((like) => res.data._id == like.postId).likes
            : 0,
          })
        })
        setPlace(res.data.tagPlace[0])
        setData(res.data.name)
        setPost(res.data)
        setTag(res.data.tag)
      });
  }, []);

  const addlike = (targetPostId) => {
    props.addLike(targetPostId);
  };

  dayjs.extend(relativeTime);

  const addCommentInPost = (newComment) => {
    props.addcomment(newComment);
    setComments(newComment);
  };


  let show = tag.map((item) => {
    return item.name
  })
  
  const btnLikeClassName = data.likedByMe ? "bg-secondary" : "";
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card mt-3 w-100" style={{ borderRadius: "10px" }}>
          <div className="card-header">
            <div className="d-flex flex-row">
              <img
                src={`${url}/${data.image}`}
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {data.name}
                </p> 
                <p className=" text-muted mb-0 ml-2">
                  {place.namePlace !== "undefined"
                    ? place.namePlace
                    : null}
                </p>
              </div>
              <p className="text-muted ml-auto">{dayjs(data.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
             <p className="card-text text-muted mb-0">
              {show}
            </p>
            <p className="card-text">{post.description}</p>
            <img className="card-img-top" src={`${url}/${post.image}`} alt="" />

            <button
              type="button"
              className={`btn text-light mt-3 ${btnLikeClassName}`}
              onClick={() => {
                addlike(post._id);
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp;{like.likesCount}
            </button>

            <div className=" mt-3">
              <Comment data={post} id={_id} addCommentInPost={addCommentInPost} />
            </div>
          </div>
          <CommentPost data={post} id={_id} comments={data} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addLike: addLike,
  addcomment : addcomment,
};

export default connect(null, mapDispatchToProps)(PostId);
