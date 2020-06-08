import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Postprofile from "./PostProfile";
import Navbar from "../Navbar";
import "./Profile.css";
import Add from '../PageAdd/Addpage'

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
      <div
        className="profile"
        style={{ backgroundImage: `url(${url}/${data.backGroundImage})` }}
      >
        <img src={`${url}/${data.image}`} className="profileimage" alt="..." />

        <br />
      </div>
      <div className="jumbotron">
        <div className="row user-row">
        <div className="userdata">
          <h2>{data.name}</h2>
        <span>{data.about}</span>
          </div>


        <div className="settings">
        <FontAwesomeIcon icon={faPen} className="fa-2x mx-auto" data-toggle="modal" data-target="#exampleModalCenter" />
        <Add/>
        </div>

        </div>
        
      </div>
      <Postprofile />
    </div>
  );
};

export default Profile;
