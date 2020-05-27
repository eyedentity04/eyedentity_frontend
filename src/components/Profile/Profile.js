import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faImages,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Postprofile from "./PostProfile";
import Navbar from "../Navbar";
import profilepic from "../Img/img1.jpg";
import "./Profile.css";

const Profile = () => {

  const url = process.env.REACT_APP_API_URL

  const { _id } = useParams();
  const [data, setData] = useState({});
  
  useEffect(() => {
    axios.get(`${url}/users/show/${_id}`).then((res) => {
      const data = res.data;
      console.log(data)
      setData(data);
    });
  }, [_id]);

  return (
    <div>
      <Navbar />
      <div className="profile">
        <img src={`${url}/${data.image}`} className="profileimage" alt="..." />

        <div className="username">
          <h2>{data.name}</h2>
  <       span>{data.about}</span>
        </div>

        <br />
      </div>
      <div className="jumbotron">
        <div className="row">
          <div className="col-lg-4">
            <FontAwesomeIcon icon={faUserFriends} className="fa-2x " />
            <h4 className="rowicon">Friends</h4>
          </div>
          <div className="col-lg-4">
            <FontAwesomeIcon icon={faImages} className="fa-2x" />
            <h4 className="rowicon">Images</h4>
          </div>
          <div className="col-lg-4">
            <FontAwesomeIcon icon={faUsers} className="fa-2x " />
            <h4 className="rowicon">Community</h4>
          </div>
        </div>
      </div>
      <Postprofile />
    </div>
  );
};

export default Profile;