import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";
import like from "../Img/like.svg";
import { connect } from "react-redux";
import "./post.css";
import { getData } from "../../actioncreators/Home";
import ShowComment from "./ShowComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";


const Post = (props) => {
  const { data } = props;

  useEffect(() => {
    if (data && !data.length) {
      props.getData();
    }
  }, []);

  const showPost = data.map((item, index) => {
    console.log(item.tagPlace[0].namePlace)
    return (
      <div key={index}>
        <div className="card mt-4" style={{ width: "auto " }}>
          <div className="card-title">
            <img src={img1} className="rounded-circle ml-2 mt-2" style={{ width: "60px" }} alt="..." />
            <span>  {item.name.name}</span>
          </div>
          <div className="card-body">
            <p className="card-text">{item.description}</p>
            <img
              style={{ width: "20%"  }}
              src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <div>{item.tagPlace[0].namePlace}</div>
            <div>{item.tagPlace[0].long}</div>
            <div>{item.tagPlace[0].lat}</div>
            <button type="submit"
              className="btn btn-info mt-2"
              style={{ backgroundColor: "#8D7B65" }}> 
            <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
            &nbsp;
            Like
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
