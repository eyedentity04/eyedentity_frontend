import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";

import { connect } from "react-redux";
import "./post.css";
import { getData } from "../../actioncreators/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

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
              <img src={img1} style={{ height:"50px", width: "50px", borderRadius: "50%" }} />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {item.name.name}
                </p>
                <p className=" text-muted mb-0 ml-2">
                  {item.tagPlace[0].namePlace}
                </p>
              </div>
              <p className="text-muted ml-auto">{item.date}</p>
            </div>
          </div>
          <div class="card-body">
          <p className="card-text text-muted mb-0">
                {item.tag.map((item,index) =>  <span className="mr-1" key={index}> @{item.name}</span>)}
              </p>
            <p class="card-text">{item.description}</p>
            <img
              style={{ height: "400px" }}
              className="card-img-top"
              src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <button
              type="submit"
              className="btn btn-info mt-3"
              style={{ backgroundColor: "#8D7B65" }}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like
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
    data: state.homeUser.data,
  };
};

const mapDispatchToProps = {
  getData: getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
