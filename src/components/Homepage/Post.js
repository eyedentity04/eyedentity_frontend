import React, { useEffect, useState } from "react";
import axios from 'axios'
import { connect } from "react-redux";
import "./post.css";

import { getData, addLike } from "../../actioncreators/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useHistory } from "react-router-dom";


const Post = (props) => {
  const url = process.env.REACT_APP_API_URL;

  const { data } = props;

  useEffect(() => {
    props.getData();
  }, [data]);

  const addlike = (targetPostId) => {
    props.addLike(targetPostId);
  };

  dayjs.extend(relativeTime);

  const showPost = data.map((item, index) => {
    const btnLikeClassName = item.likedByMe ? "bg-secondary" : "";
    return (
      <div key={item._id} data={index}>
        <div className="card w-100 post" style={{ borderRadius: "10px" }}>
          <div className="card-header">
            <div className="d-flex flex-row">
              <img
                src={`${url}/${item.name.image}`}
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {item.name.name}
                </p>
                <p className=" text-muted mb-0 ml-2">
                  {item.tagPlace[0].namePlace !== "undefined"
                    ? item.tagPlace[0].namePlace
                    : null}
                </p>
              </div>
              <p className="text-muted ml-auto">{dayjs(item.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
            <p className="card-text text-muted mb-0">
              {item.tag.map((item, index) => (
                <span className="mr-1" key={index}>
                  @{item.name}
                </span>
              ))}
            </p>
            <p className="card-text">{item.description}</p>
            <img className="card-img-top" src={`${url}/${item.image}`} alt="" />

            <button
              type="button"
              className={`btn text-light mr-2 mt-3 ${btnLikeClassName}`}
              onClick={() => {
                addlike(item._id);
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like {item.likesCount}
            </button>


            <Link to={`/${item._id}`}  target="_blank" className="btn text-light mt-3">
            <FontAwesomeIcon icon={faComment} className="fa-1x mx-auto" />
            <span className="comment">
            View All Comments 
            </span>
              
              </Link>
            
            
          </div>
        </div>
      </div>
    );
  });

  return <div className="container">{showPost}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.homeUser.data,
  };
};

const mapDispatchToProps = {
  getData: getData,
  addLike: addLike,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
