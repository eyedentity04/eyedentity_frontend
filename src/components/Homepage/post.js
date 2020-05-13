import React, { useState, useEffect } from "react";
import img1 from "../Img/img1.jpg";
import like from "../Img/like.svg"
import "./Post.css";
import axios from "axios";

const Post = () => {
  // const [data,setData] = useState([])
  // useEffect (() => {
  //     const URL = ''
  //     axios.get(URL)
  //     .then(res => {
  //         const data = res.data
  //         setData(res.data)
  //     })
  // }, [])

  return (
    <div className="container mt-4  ">
      <div className="card" style={{ width: "auto" }}>
        <div className="row">
          <img src={img1} className="rounded-circle" alt="..." />
          <h4 className="card-title">User</h4>
        </div>

        <div className="card-body">
            
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img src={like} style={{width : "15px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
