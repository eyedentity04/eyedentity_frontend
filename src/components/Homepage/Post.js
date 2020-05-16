import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";
import like from "../Img/like.svg";
import axios from "axios"
import {connect} from "react-redux"
import "./post.css";

import {getData} from '../../actioncreators/Home';

const Post = (props) => {
  const { data } = props;

  useEffect(() => {
      if (data && !data.length){
          props.getData()
          console.log(props)
      }
      
  }, [props,data])
    
  const showPost = data.map((item, index) => (
    <div key={index}>
      <div className="card mt-4" style={{ width: "auto" }}>
        <div className="row">
          <img src={img1} className="rounded-circle" alt="..." />
          <h4 className="card-title">User</h4>
        </div>
        <div className="card-body">
          <p className="card-text">
            {item.description}
          </p>
          <img src={item.img} alt=""/>
          <img src={like} style={{ width: "15px" }} alt=""/>
        </div>
      </div>
    </div>
  ));

  return <div className="container">{showPost}</div>;
};

const mapStateToProps = (state) => {

  return {
      data : state.homeUser.data
  }
}

const mapDispatchToProps = {
  getData : getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);