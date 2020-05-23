import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";
import "../Homepage/post.css"
import { connect } from "react-redux";

import { getData } from "../../actioncreators/profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faComment } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const { data } = props;

  useEffect(() => {
    if (data && !data.length) {
      props.getData();
    }
  }, []);

  const showPost = data.map((item, index) => {
    console.log(item.tagPlace[0].namePlace);
    return (
      <div key={index}>
        <div class="card mt-3 w-100" style={{ borderRadius: "10px" }}>
          <div class="card-header">
            <div className="d-flex flex-row">
              <img src={img1} style={{ width: "50px", borderRadius: "50%" }} />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {item.name.name}
                </p>
                <p className=" text-muted mb-0 ml-2">{item.tagPlace[0].namePlace}</p>
              </div>
              <p className="text-muted ml-auto">{item.date}</p>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">{item.description}</p>
            <img
              className="card-img-top"
              src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <button
              type="submit"
              className="btn text-light mt-3"
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like
            </button>
            <button
              type="submit"
              className="btn text-light mt-3 ml-2"
            >
              <FontAwesomeIcon icon={faComment} className="fa-1x mx-auto" />
              &nbsp; Comment
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="container">{showPost}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.profileUser.data,
  };
};

const mapDispatchToProps = {
  getData: getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);