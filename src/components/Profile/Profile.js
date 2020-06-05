import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Postprofile from "./PostProfile";
import Navbar from "../Navbar";
import "./Profile.css";

const Profile = () => {
  const url = process.env.REACT_APP_API_URL;

  const { _id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${url}/users/show/${_id}`).then((res) => {
      const data = res.data;
      console.log(data);
      setData(data);
    });
  }, [_id]);

  return (
    <div>
      <Navbar />
      <div className="profile" style={{backgroundImage : `url(${url}/${data.backGroundImage})`}}>
        <img src={`${url}/${data.image}`} className="profileimage" alt="..."  />

        <div className="username">
          <h2>{data.name}</h2>
          <span>{data.about}</span>
        </div>

        <br />
      </div>
      <div className="jumbotron">
        <h3>Post</h3>
        <hr />
      </div>
      <Postprofile />
    </div>
  );
};

export default Profile;
