import React, { useEffect} from "react";
import img1 from "../Img/img1.jpg";

import { connect } from "react-redux";
import "./post.css";
import { getData } from "../../actioncreators/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

const Post = (props) => {
  const { data } = props;
  
  useEffect(() => {
    if (data && !data.length) {
      props.getData();
    }
  }, []);

  dayjs.extend(relativeTime)
  
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
              <p className="text-muted ml-auto">{dayjs(item.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
          <p className="card-text text-muted mb-0">
                {item.tag.map((item,index) =>  <span className="mr-1" key={index}> @{item.name}</span>)}
              </p>
            <p class="card-text">{item.description}</p>
            <img
              style={{ height: "400px", objectFit : "cover" }}
              className="card-img-top"
              src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <button
              type="submit"
              className="btn text-light mt-3"
              style={{ backgroundColor: "#C9A982" }}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like
            </button>
            <button
              type="submit"
              className="btn text-light mt-3 ml-2"
              style={{ backgroundColor: "#C9A982" }}
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
    data: state.homeUser.data,
  };
};

const mapDispatchToProps = {
  getData: getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
