import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";
import like from "../Img/like.svg";
import { connect } from "react-redux";
import "./post.css";
import Comment from './Comment'

import { getData } from "../../actioncreators/Home";
import ShowComment from "./ShowComment";

const Post = (props) => {
  const { data } = props;

  useEffect(() => {
    if (data && !data.length) {
      props.getData();
    }
  }, []);

  const showPost = data.map((item, index) => {
    return (
      <div key={index}>
        <div className="card mt-4" style={{ width: "auto" }}>
          <div className="card-title">
            <img src={img1} className="rounded-circle ml-2 mt-2" style={{ width: "50px" }} alt="..." />
            <span>{item.name.name}</span>
          <p className="text-muted ml-2 mt-2" >{item.date}</p>
          </div>
          <div className="card-body">
            <p className="card-text">{item.description}</p>
            <img
              style={{ width: "100%" }}
              src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <img src={like} style={{ width: "15px" }} alt="" />
          </div>
        </div>
        <ShowComment/>
        <Comment/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
